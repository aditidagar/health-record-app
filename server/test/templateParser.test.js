const parser = require("../templateParser").templateParser;
const fs = require('fs');
const { assert } = require('chai');

const formAdrenal = fs.readFileSync('./test/xml/PKG_Adrenal.xml', 
{encoding:'utf8', flag:'r'}); 
const formCOVID = fs.readFileSync('./test/xml/COVID-19.393_1.000.000.CTP1_sdcFDF.xml', 
{encoding:'utf8', flag:'r'}); 

describe("Testing templateParser", () => {
    describe("#parse()", () => {
        it("parse should not break because it is given a valid xml", (done) => {
            const t1 = parser.parse(formAdrenal);
            done()
        });

        it("the body should not be empty", () => {
            const t1 = parser.parse(formAdrenal);
            assert.isAbove(t1.body.length, 0);
            const t2 = parser.parse(formCOVID);
            assert.isAbove(t1.body.length, 0);
        });

        it("parsed template should have PID", () => {
            const t1 = parser.parse(formAdrenal);
            assert.exists(t1.procedureID);
            assert.isNotEmpty(t1.procedureID);
            const t2 = parser.parse(formCOVID);
            assert.exists(t2.procedureID);
            assert.isNotEmpty(t2.procedureID);
        });

        it("parsed template should have name", () => {
            const t1 = parser.parse(formAdrenal);
            assert.exists(t1.name);
            assert.isNotEmpty(t1.name);
            const t2 = parser.parse(formCOVID);
            assert.exists(t2.name);
            assert.isNotEmpty(t2.name);
        });
    });
  });