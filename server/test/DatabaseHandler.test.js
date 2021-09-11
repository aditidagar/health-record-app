const DB = require("../DatabaseHandler").DB;

const fs = require("fs");

const { assert } = require('chai');

describe("Testing DatabaseHandler form template", () => {
    const testJsonTemplate = JSON.parse(fs.readFileSync("./test/json/test_form.json"));
    const testPid = testJsonTemplate.procedureID;

    describe("#insertForm() 1st insert", () => {
        it("should insert the form to db", (done) => {
            DB.insertForm(testJsonTemplate).then(()=>done()).catch(()=>done("Failed to insert."));
        });
    });

    describe("#insertForm() repeated insert", () => {
        it("should fail to insert", (done) => {
            DB.insertForm(testJsonTemplate).then(()=>done("Failed to not insert.")).catch(()=>done());
        });
    });

    describe("#getAllFormTemplates()", () => {
        it("should get all templates", (done) => {
            DB.getAllFormTemplates().then((docs) => {
                assert.isAbove(docs.length, 0);
                done();
            }).catch(()=>done("Something went wrong."));
        });
    });

    describe("#getSDCFormByPID()", () => {
        it("should get the test template by PID after insertForm()", (done) => {
            DB.getSDCFormByPID(testPid).then((doc)=>{
                assert.equal(doc.procedureID, testJsonTemplate.procedureID);
                done();
            }).catch((err)=>{
                done(`Failed to get test template: ${err}`);
            });
        });

        it("should reject when pid does not exist", (done) => {
            DB.getSDCFormByPID("testPid").then(()=>done("Not rejecting.")).catch(()=>done());
        });
    });

    describe("#replaceSDCForm()", () => {
        it("should reject when pid does not exist", (done) => {
            const n = Object.assign({}, testJsonTemplate);
            n.procedureID = "non-existent-PID";
            DB.replaceSDCForm(n).then(()=>done("Failed to reject.")).catch(()=>done());
        });

        it("should replace the form (use getSDCFormByPID() to test)", (done) => {
            const n = Object.assign({}, testJsonTemplate);
            n.name = "new name";
            DB.replaceSDCForm(n).then(()=>{
                DB.getSDCFormByPID(testPid).then((doc)=>{
                    assert.equal(doc.name, n.name);
                    done();
                }).catch(()=>done("Cannot find the replaced form, or getSDCFormByPID() does not work."))
            }).catch(()=>done("Failed to replace."));
        });
    })

    describe("#deleteSDCFormByPID()", () => {
        it("should reject when pid does not exist", (done) => {
            DB.deleteSDCFormByPID("non-existent-PID").then(()=>done("Failed to reject.")).catch(()=>done());
        });

        it("should delete the test form (use getSDCFormByPID() to test)", (done) => {
            DB.deleteSDCFormByPID(testPid).then(()=>{
                DB.getSDCFormByPID(testPid).then(()=>{
                    done("Deleted form still exists, or getSDCFormByPID() does not work.")
                }).catch(()=>done())
            }).catch(()=>done("Failed to delete."));
        });
    })
    
    after(async () => {  
        await require("mongoose").model("FormTemplate").deleteOne({ procedureID: testPid});
    })
});

describe("Testing DatabaseHandler form response", ()=> {
    
    const patientName = "p name";
    const testResponse = JSON.parse(fs.readFileSync("./test/json/test_response.json"));
    const patientID = testResponse.patientID;
    let responseID;
    let responseItems; // Map of responseId

    describe("#insertPatient()", () => {
        it("should insert patient", (done) => {
            DB.insertPatient(patientID, patientName).then(()=>done()).catch((err)=>done(err));
        })
    })

    describe("#getPatientByPatientID()", () => {
        it("should get the patient by patientID", (done) => {
            DB.getPatientByPatientID(patientID).then((p) => {
                assert.equal(patientID, p.patientID);
                assert.equal(patientName, p.name);
                assert.isEmpty(p.SDCResponses);
                done();
            }).catch((err)=>done(err));
        })
    })

    describe("#insertResponse()", () => {
        it("should insert the test response", (done) => {
            // need to JSON clone here since the function modifies the object
            // when flatten the response (maybe I should not have done this)
            DB.insertResponse(JSON.parse(JSON.stringify(testResponse))).then((doc)=>{
                responseID = doc._id;
                responseItems = doc.form;
                done();
            }).catch((err)=>done(err));
        });

        it("should update patient record", (done) => {
            DB.getPatientByPatientID(patientID).then((p) => {
                assert.isNotEmpty(p.SDCResponses);
                assert.equal(p.SDCResponses[0].responseID, responseID);
                done();
            }).catch((err) => done(err));
        });
    })

    describe("#getFormResponse()", ()=> {
        it("should get the inserted form response", (done) => {
            DB.getFormResponse({ procedureID: testResponse.form.procedureID, _id: responseID }).then((docs) => {
                const doc = docs[0];
                assert.equal(doc.patientName, patientName, "Patient name not equal.");
                assert.equal(doc.patientID, patientID, "PatientID not equal.")
                assert.deepEqual(doc.form.body, testResponse.form.body, "Form body not equal.");
                done();
            }).catch((err) => {
                done(err);
            });
        })
    });

    after(async () => {  
        await require("mongoose").model("Patient").deleteOne({patientID: patientID});
        const itemsToDelete = [];
        for (const [_, value] of Object.entries(responseItems)) {
            itemsToDelete.push(...value);
          }
          
        await require("mongoose").model("ResponseItem").deleteMany({_id: {$in: itemsToDelete}});
        await require("mongoose").model("FormResponse").deleteOne({_id: responseID});
    })
});
