'Use Strict';
/**
 * This file contains patient schema
 */

 
/**
 * 
 * @param {typeof import("mongoose")} mongoose 
 */
module.exports = function(mongoose) {
    const PatientSchema = new mongoose.Schema({
        patientID: {
            type: String,
            required: true,
        }, 
        name: {
            type: String,
            required: true,
        },
        SDCResponses: [
            {
                responseID: {
                    type: String,
                    required: true,
                },
                procedureID: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                timestamp: {
                    type: Date,
                    required: true,
                },
                update_timestamp: {
                    type: Date,
                    required: true,
                }
            }
        ],
    });
    
    return {
        Patient: mongoose.model("Patient", PatientSchema),
    }
}
