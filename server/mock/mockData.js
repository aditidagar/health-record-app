const xmlFolder = './xml/';
const responseFolder = "./responseJson/";
const fs = require('fs');
const path = require("path");

const patients = [
    {
        patientID: "1234",
        name: "Bob Smith"
    },
    {
        patientID: "4567",
        name: "Alan Williams"
    },
    {
        patientID: "4512",
        name: "James Miller"
    },
    {
        patientID: "8726",
        name: "Deb Noell"
    },
    {
        patientID: "8987",
        name: "Annie Wang"
    },
    {
        patientID: "5768",
        name: "Toshia Trader"
    },
    {
        patientID: "9876",
        name: "Mia Baker"
    }
]

const xmlFiles = fs.readdirSync(path.join(__dirname, xmlFolder)).map(file => {
    return fs.readFileSync(path.join(__dirname, xmlFolder, file), {encoding:'utf8', flag:'r'}); 
});

const responses = fs.readdirSync(path.join(__dirname, responseFolder)).map(file => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, responseFolder, file)));
});

module.exports = {
    patients: patients,
    xmlFiles: xmlFiles,
    responses: responses
}
