'Use Strict';
/**
 * This file contains form schema
 */

/**
 * 
 * @param {typeof import("mongoose")} mongoose 
 */
module.exports = function(mongoose) {
    const StringResponseFieldSchema = new mongoose.Schema({
        maxLength: {
            type: Number,
        }
    });
    
    const IntegerResponseFieldSchema = new mongoose.Schema({
        maxInclusive: {
            type: Number,
        },
        minInclusive: {
            type: Number,
        }
    });
    
    const DecimalResponseFieldSchema = new mongoose.Schema({
        maxInclusive: {
            type: Number,
        },
        minInclusive: {
            type: Number,
        },
        fractionDigits: {
            type: Number,
        },
        totalDigits: {
            type: Number,
        }
    });
    
    const ResponseFieldSchema = new mongoose.Schema({
        responseRequired: {
            type: Boolean,
            default: true,
        },
        textAfterResponse: {
            type: String,
            default: '',
        }
    }, {discriminatorKey: 'dType'})
    
    const DisplayTypeSchema = new mongoose.Schema({
        ID: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
    }, {discriminatorKey: 'type'});
    
    const DisplayedItemSchema = new mongoose.Schema({
        // Empty fields
        // DisplayedItem only has type, which we can 
        // use discriminatorKey to specify later
    })
    
    const OptionSchema = new mongoose.Schema({
        responseField: {
            type: ResponseFieldSchema,
        },
        selectionDeselectsSiblings: {
            type: Boolean,
            default: false,
        },
        childItems: {
            type: [DisplayTypeSchema],
        }
    })
    
    const SectionSchema = new mongoose.Schema({
        minCard: {
            type: Number,
            default: 1,
        },
        maxCard: {
            type: Number,
            default: 1,
        },
        childItems: {
            type: [DisplayTypeSchema],
        },
    })
    
    const QRSchema = new mongoose.Schema({
        minCard: {
            type: Number,
            default: 1,
        },
        maxCard: {
            type: Number,
            default: 1,
        },
        responseField: {
            type: ResponseFieldSchema,
            required: true,
        },
        childItems: {
            type: [DisplayTypeSchema],
        },
    })
    
    const QSSchema = new mongoose.Schema({
        minCard: {
            type: Number,
            default: 1,
        },
        maxCard: {
            type: Number,
            default: 1,
        },
        list: {
            type: [DisplayTypeSchema],
            required: true,
        },
        childItems: {
            type: [DisplayTypeSchema],
        },
    })
    
    const QMSchema = new mongoose.Schema({
        minCard: {
            type: Number,
            default: 1,
        },
        maxCard: {
            type: Number,
            default: 1,
        },
        maxSelection: {
            type: Number,
            default: 0,
        },
        minSelection: {
            type: Number,
            default: 1,
        },
        list: {
            type: [DisplayTypeSchema],
            required: true,
        },
        childItems: {
            type: [DisplayTypeSchema],
        },
    })

    return {
        StringResponseFieldSchema: ()=>StringResponseFieldSchema.clone(),
        IntegerResponseFieldSchema: ()=>IntegerResponseFieldSchema.clone(),
        DecimalResponseFieldSchema: ()=>DecimalResponseFieldSchema.clone(),
        ResponseFieldSchema: ()=>ResponseFieldSchema.clone(),
        DisplayTypeSchema: ()=>DisplayTypeSchema.clone(),
        DisplayedItemSchema: ()=>DisplayedItemSchema.clone(),
        OptionSchema: ()=>OptionSchema.clone(),
        SectionSchema: ()=>SectionSchema.clone(),
        QRSchema: ()=>QRSchema.clone(),
        QSSchema: ()=>QSSchema.clone(),
        QMSchema: ()=>QMSchema.clone()
    }
}
