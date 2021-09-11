/**
 * Need to modify form schema here to accept
 * new properties and change ChildItems to store
 * refs.
 */

/**
 * 
 * @param {typeof import("mongoose")} mongoose 
 */
module.exports = function(mongoose) {
    const FormSchema = require('./FormSchema')(mongoose);

    const ObjectId = mongoose.Schema.Types.ObjectId
    
    /**
     * 
     * @param {*} schema 
     * @param {*} path 
     * @returns {import('mongoose').Schema}
     */
    function changeChildItemToRef(schema, path, autopopulate=true) {
        replaceSchemaField(schema, 'childItems', {
            type: [ObjectId],
            ref: path,
            autopopulate: autopopulate,
        });
        return schema;
    }
    
    function replaceSchemaField(schema, field, val) {
        schema.remove(field);
        schema.add({
            [field]: val,
        })
    }
    
    // change Section, Question, Option childItems
    const SectionSchema = changeChildItemToRef(FormSchema.SectionSchema(), 'ResponseItem');
    const QRSchema = changeChildItemToRef(FormSchema.QRSchema(), 'ResponseItem');
    const QSSchema = changeChildItemToRef(FormSchema.QSSchema(), 'ResponseItem');
    const QMSchema = changeChildItemToRef(FormSchema.QMSchema(), 'ResponseItem');
    const OptionSchema = FormSchema.OptionSchema();
    
    // to make sure that autopopulate will populate option.childItem under list array, 
    // need to modify QSSchema.list and QMSchema.list;
    // move childItems to DisplayTypeSchema
    OptionSchema.remove('childItems');
    const ListDisplayTypeSchema = FormSchema.DisplayTypeSchema();
    ListDisplayTypeSchema.add({
        childItems: {
            type: [ObjectId],
            ref: 'ResponseItem',
            autopopulate: true,
            default: () => { return undefined; }
        }
    })
    // replace QSSchema.list and QMSchema.list
    replaceSchemaField(QSSchema, 'list', {
        type: [ListDisplayTypeSchema],
        required: true,
    });
    replaceSchemaField(QMSchema, 'list', {
        type: [ListDisplayTypeSchema],
        required: true,
    });
    
    
    // add value field to Response
    const StringResponseFieldSchema = FormSchema.StringResponseFieldSchema();
    StringResponseFieldSchema.add({
        value: {
            type: String,
        }
    })
    const IntegerResponseFieldSchema = FormSchema.IntegerResponseFieldSchema();
    IntegerResponseFieldSchema.add({
        value: {
            type: Number,
        }
    })
    const DecimalResponseFieldSchema = FormSchema.DecimalResponseFieldSchema();
    DecimalResponseFieldSchema.add({
        value: {
            type: Number,
        }
    })
    
    // add value field to option
    OptionSchema.add({
        value: {
            type: Boolean,
            default: false,
        }
    })
    
    const ResponseSchema = new mongoose.Schema({
        procedureID: {
            type: String,
            required: true,
        },
        formName: {
            type: String,
            required: true,
        },
        // responseID: {
        //     type: String,
        //     required: true,
        // }, // it's the _id
        patientID: {
            type: String,
            required: true
        },
        form: {
            type: Map,
            of: [{
                type: ObjectId,
            }],
        },
        body: [{
            type: ObjectId,
            ref: 'ResponseItem',
        }]
    }, {timestamps: {createdAt: 'timestamp', updatedAt: 'update_timestamp'}, toJSON: {virtuals: true}});
    
    // set the responseID to match the _id
    ResponseSchema.virtual('responseID').get(function(){return this._id;})
    ResponseSchema.virtual('patient', {
        ref: 'Patient', 
        localField: 'patientID', 
        foreignField: 'patientID', 
        justOne: true
      });
    
    // make discriminators
    const DisplayTypeSchema = FormSchema.DisplayTypeSchema();
    DisplayTypeSchema.plugin(require("mongoose-autopopulate"));
    
    // List
    // QS List
    let docArray = QSSchema.path('list');
    docArray.discriminator('DisplayedItem', FormSchema.DisplayedItemSchema());
    const Option = docArray.discriminator('Option', OptionSchema);
    // QM List
    docArray = QMSchema.path('list');
    docArray.discriminator('DisplayedItem', FormSchema.DisplayedItemSchema());
    docArray.discriminator('Option', OptionSchema);
    
    // responseField
    docArray = QRSchema.path('responseField');
    docArray.discriminator('integer', IntegerResponseFieldSchema);
    docArray.discriminator('string', StringResponseFieldSchema);
    docArray.discriminator('decimal', DecimalResponseFieldSchema);
    
    docArray = OptionSchema.path('responseField');
    docArray.discriminator('integer', IntegerResponseFieldSchema);
    docArray.discriminator('string', StringResponseFieldSchema);
    docArray.discriminator('decimal', DecimalResponseFieldSchema);
    
    // Response
    const ResponseItem = mongoose.model('ResponseItem', DisplayTypeSchema);
    const DisplayedItem = ResponseItem.discriminator('DisplayedItem', FormSchema.DisplayedItemSchema());
    const Section = ResponseItem.discriminator('Section', SectionSchema);
    const QR = ResponseItem.discriminator('QR', QRSchema);
    const QS = ResponseItem.discriminator('QS', QSSchema);
    const QM = ResponseItem.discriminator('QM', QMSchema);
    
    // export the model here
    const FormResponse = mongoose.model('FormResponse', ResponseSchema);
    return {
        FormResponse: FormResponse,
        ResponseItem: ResponseItem,
        Section: Section,
        QR: QR,
        QS: QS,
        QM: QM,
        Option: Option,
        DisplayedItem: DisplayedItem
    }
}