'Use Strict';
/**
 * 
 * @param {typeof import("mongoose")} mongoose 
 */
module.exports = function(mongoose) {
    const FormSchema = require('./FormSchema')(mongoose);

    const StringResponseFieldSchema = FormSchema.StringResponseFieldSchema();
    const IntegerResponseFieldSchema = FormSchema.IntegerResponseFieldSchema();
    const DecimalResponseFieldSchema = FormSchema.DecimalResponseFieldSchema();
    const ResponseFieldSchema = FormSchema.ResponseFieldSchema();
    const DisplayTypeSchema = FormSchema.DisplayTypeSchema();
    const DisplayedItemSchema = FormSchema.DisplayedItemSchema();
    const OptionSchema = FormSchema.OptionSchema();
    const SectionSchema = FormSchema.SectionSchema();
    const QRSchema = FormSchema.QRSchema();
    const QSSchema = FormSchema.QSSchema();
    const QMSchema = FormSchema.QMSchema();
    
    const FormTemplateSchema = new mongoose.Schema({
        procedureID: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        body: {
            type: [DisplayTypeSchema],
            default: [],
        }
    }, {timestamps: {createdAt: 'timestamp', updatedAt: 'update_timestamp'}});
    
    // now make recursive embedded discriminators, you can refer to
    // https://mongoosejs.com/docs/discriminators.html#recursive-embedded-discriminators-in-arrays
    // I am also using the discriminator to enforce that childItem can
    // contain <Section> <QR/QS/QM> and <DisplayedItem>, whereas List can only
    // contain <Option> and <DisplayedItem>
    
    // FormTemplate
    let docArray = FormTemplateSchema.path('body');
    const DisplayedItem = docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    const Section = docArray.discriminator('Section', SectionSchema);
    const QR = docArray.discriminator('QR', QRSchema);
    const QS = docArray.discriminator('QS', QSSchema);
    const QM = docArray.discriminator('QM', QMSchema);
    
    // Option
    docArray = OptionSchema.path('childItems');
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    docArray.discriminator('Section', SectionSchema);
    docArray.discriminator('QR', QRSchema);
    docArray.discriminator('QS', QSSchema);
    docArray.discriminator('QM', QMSchema);
    
    // Section
    docArray = SectionSchema.path('childItems');
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    docArray.discriminator('Section', SectionSchema);
    docArray.discriminator('QR', QRSchema);
    docArray.discriminator('QS', QSSchema);
    docArray.discriminator('QM', QMSchema);
    
    // QR
    docArray = QRSchema.path('childItems');
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    docArray.discriminator('Section', SectionSchema);
    docArray.discriminator('QR', QRSchema);
    docArray.discriminator('QS', QSSchema);
    docArray.discriminator('QM', QMSchema);
    
    // QS child
    docArray = QSSchema.path('childItems');
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    docArray.discriminator('Section', SectionSchema);
    docArray.discriminator('QR', QRSchema);
    docArray.discriminator('QS', QSSchema);
    docArray.discriminator('QM', QMSchema);
    // QS List
    docArray = QSSchema.path('list');
    const Option = docArray.discriminator('Option', OptionSchema);
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    
    // QM child
    docArray = QMSchema.path('childItems');
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    docArray.discriminator('Section', SectionSchema);
    docArray.discriminator('QR', QRSchema);
    docArray.discriminator('QS', QSSchema);
    docArray.discriminator('QM', QMSchema);
    // QM child
    docArray = QMSchema.path('list');
    docArray.discriminator('Option', OptionSchema);
    docArray.discriminator('DisplayedItem', DisplayedItemSchema);
    
    // ResponseField
    docArray = QRSchema.path('responseField');
    docArray.discriminator('integer', IntegerResponseFieldSchema);
    docArray.discriminator('string', StringResponseFieldSchema);
    docArray.discriminator('decimal', DecimalResponseFieldSchema);
    
    docArray = OptionSchema.path('responseField');
    docArray.discriminator('integer', IntegerResponseFieldSchema);
    docArray.discriminator('string', StringResponseFieldSchema);
    docArray.discriminator('decimal', DecimalResponseFieldSchema);
    
    // export the model here
    const FormTemplate = mongoose.model('FormTemplate', FormTemplateSchema);
    return {
        FormTemplate: FormTemplate,
        DisplayedItem: DisplayedItem,
        Section: Section,
        QR: QR,
        QS: QS,
        QM: QM,
        Option: Option
    }
}