const parser = require("../templateParser").templateParser;
const fs = require('fs');
const { assert } = require('chai');

const mongoose = require("mongoose");

const FormTemplate = mongoose.model('FormTemplate');

const formAdrenal = fs.readFileSync('./test/xml/PKG_Adrenal.xml', 
{encoding:'utf8', flag:'r'}); 
const formCOVID = fs.readFileSync('./test/xml/COVID-19.393_1.000.000.CTP1_sdcFDF.xml', 
{encoding:'utf8', flag:'r'}); 

const pid1 = Date.now();
const pid2 = Date.now()+1;

describe("Testing uploading template to DB", () => {
    describe("#uploading to DB (only testing schema)", () => {
        it("should upload successfully (PKG_Adrenal.xml)", (done) => {
            const t1 = parser.parse(formAdrenal);
            // set procedureID so its always unique
            t1.procedureID = pid1;
            FormTemplate.create(t1).then((data) => {
                done();
            })
        });

        it("should upload successfully (COVID.xml)", (done) => {
            const t1 = parser.parse(formCOVID);
            // set procedureID so its always unique
            t1.procedureID = pid2;
            FormTemplate.create(t1).then((data) => {
                done();
            })
        });
    });

    after(async () => {  
        await FormTemplate.deleteOne({ procedureID: pid1});
        await FormTemplate.deleteOne({ procedureID: pid2});
    })
});
