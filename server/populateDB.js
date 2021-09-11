require("dotenv").config();
/** @type {typeof import("./DatabaseHandler").DB}*/
let DB;
/** @type {typeof import("mongoose")}  */
let mongoose;
/** @type {typeof import("./mock/mockData")}  */
let mockData;
/** @type {typeof import("./templateParser").templateParser}  */
let parser;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Populating DB will clean all data currently stored in DB.\n\
Do you want to continue? (y)\n', ans => {
    if (ans.toLowerCase() === 'y') {
        DB = require("./DatabaseHandler").DB;
        mongoose = require("mongoose");
        mockData = require("./mock/mockData");
        parser = require("./templateParser").templateParser;
        populateDB();
    } else {
        console.log("Cancelled.")
    }
    readline.close();
});

function populateDB() {
    return new Promise((resolve, reject) => {
        dropCurrentModels().then(() => {
            return populatePatients();
        }).then(() => {
            return populateFormTemplates();
        }).then(() => {
            return populateResponses();
        }).then(() =>{
            return resolve();
        }).catch(() => {
            console.log("Something went wrong, dropping added data...");
            return dropCurrentModels();
        }).finally(() => {
            mongoose.disconnect();
            resolve();
        });
    })
}

async function populateFormTemplates() {
    const promises = mockData.xmlFiles.map(xml => {
        return DB.insertForm(parser.parse(xml));
    })
    await Promise.all(promises);
    return Promise.resolve();
}

async function populatePatients() {
    const promises = mockData.patients.map(patient => {
        return DB.insertPatient(patient.patientID, patient.name);
    });
    await Promise.all(promises);
    return Promise.resolve();
}

async function populateResponses() {
    const promises = mockData.responses.map(response => {
        return DB.insertResponse(response);
    });
    await Promise.all(promises);
    return Promise.resolve();
}

async function dropCurrentModels() {
    for(let model in mongoose.models) {
        try {
            await mongoose.models[model].collection.drop();
        } catch {
            continue;
        }
    }
    return Promise.resolve();
}
