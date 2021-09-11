const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://API_Server:${process.env.DB_PASSWD}@cluster0.tou7d.mongodb.net/${process.env.API_DB}?retryWrites=true&w=majority`;
const clientOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
// Mongoose Connection
const mongoose = require("mongoose");
// Here I am connecting to the test database
mongoose.connect(uri,
{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});

const templateSchema = require("./TemplateSchema")(mongoose);
const responseSchema = require("./ResponseSchema")(mongoose);
const patientSchema = require("./PatientSchema")(mongoose);
const ObjectId = require("mongoose").Types.ObjectId;

async function connectToDB()
{
	return MongoClient.connect(uri, clientOptions);
}

/**
 * @param {JSON} object 
 * @param {string} db 
 * @param {string} _collection  
 */
async function _insert(object, db, _collection) {
	let result = null;
	let mClient = null;
	try {
		mClient = await connectToDB();
		const collection = mClient.db(db).collection(_collection);
		result = {
			res: await collection.insertOne(object),
			error: null,
			success: true
		};
	} catch (error) {
		result = {
			res: null,
			error,
			success: false
		};
	} finally {
		mClient.close();
		return result;
	}
}

/**
 * Insert the given form (Layout only) to the database. Throws error on failure
 * @param {JSON} form JSON parsed XML SDCForm
 * @returns {Promise<import("mongodb").InsertOneWriteOpResult | null}
 */
async function insertForm(form) {
	// const result = await _insert(form, "SDC", "SDCForms");
	// if (result.success) return result.res;
	// else throw new Error(result.error.message);
	return new Promise((resolve, reject) => {
		templateSchema.FormTemplate.findOne({
			procedureID: form.procedureID,
		}, {__v: 0}).then((document) => {
			if (document) {
				return reject(`Insertion failed: PID ${form.procedureID} exists.`)
			} else {
				templateSchema.FormTemplate.create(form).then((document) => {
					return resolve(document.toJSON({transform: removeObjectID}));
				});
			}
		}).catch((err) => reject(err));
	});
}

async function insertUser(user) {
	const result = await _insert(user, "SDC", "User");
	if (result.success) return result.res;
	else throw new Error(result.error.message);
}

async function fetchUsers(query)
{
	let result = [];
	let mClient = null;
	try {
		mClient = await connectToDB();
		const collection = mClient.db("SDC").collection("User");
		result = await collection.find(query).toArray();
	} catch (error) {
		console.log(error);
	} finally {
		mClient.close();
		return result;
	}
}

/**
 * Gets all saved SDC form templates from the database.
 * @returns {Promise<document[], import("mongoose").Error>}
 */
function getAllFormTemplates() {
	return new Promise((resolve, reject) => {
		templateSchema.FormTemplate.find({}, {
			_id: 0, // we don't need ID (I think)
			procedureID: 1, 
			name: 1,
			timestamp: 1,
			update_timestamp: 1,
		}).then((documents) => {
			return resolve(documents);
		}).catch((err) => {
			return reject(err);
		})
	})
}

/**
 * Gets SDC form by procedure ID.
 * @param {string} procedureID 
 * @returns {Promise<document, string>}
 */
function getSDCFormByPID(procedureID) {
	return new Promise((resolve, reject) => {
		templateSchema.FormTemplate.findOne({
			procedureID: procedureID,
		}, {
			__v: 0,
		}).then((document) => {
			if (!document) {
				return reject(`Form not found: PID ${procedureID} does not exist.`)
			}
			const jsonDoc = document.toJSON({transform: removeObjectID})
			return resolve(jsonDoc);
		}).catch((err) => reject(err));
	});
}

/**
 * Deletes a SDC form given it's procedure ID.
 * @param {string} procedureID
 * @returns {Promise<string>}
 */
function deleteSDCFormByPID(procedureID) {
    return new Promise((resolve, reject) => {
        templateSchema.FormTemplate.deleteOne({ procedureID: procedureID},
            (err, result) => {
                if (err) {
                    return reject(err)
				} else if (result.deletedCount == 0) {
					return reject("Form does not exists.")
				} else {
                	return resolve("Success");
                }
            });
    });
}

/**
 * replaces a SDC form
 * @param {SDCForm} form
 * @returns {Promise<string>}
 */
function replaceSDCForm(form) {
    return new Promise((resolve, reject) => {
		templateSchema.FormTemplate.findOneAndUpdate({procedureID: form.procedureID},
			{$set:{body: form.body, name: form.name}}, {new: true, projection: {__v: 0}},
			(err, doc) => {
				if (err) {
					return reject("Failed to update.");
				}
				if (!doc) {
					return reject("Form with given PID not found.")
				}
				return resolve(doc.toJSON({transform: removeObjectID}));
		});
    });
}

function insertPatient(patientID, name) {
	return new Promise((resolve, reject) => {
		patientSchema.Patient.create({
			patientID: patientID,
			name: name,
			SDCResponses: [],
		}).then((doc) => {
			return resolve(doc);
		}).catch((err) => {
			return reject(err);
		})
	})
}

function getPatientByPatientID(patientID) {
	return new Promise((resolve, reject) => {
		patientSchema.Patient.findOne({patientID: patientID}).then((doc) => {
			if (!doc) {
				return reject("Patient not found.");
			}
			return resolve(doc.toJSON({transform: removeObjectID}));
		});
	})
}

function fetchPatients() {
    return new Promise((resolve, reject) => {
        patientSchema.Patient.find({}, (err, patients) => {
            if (err) {
                reject(err);
            } else {
                resolve(patients.map((p) => {
					return p.toJSON({transform: removeObjectID});
				}));
            }
        });
    });
}


async function getFormResponse(query) {
    return new Promise((resolve, reject) => {
	    responseSchema.FormResponse.find(query, {__v: 0})
	        .populate('body')
	        .populate({path: 'patient', options: {select: {name: 1}}}).exec((err, docs) => {
	            if (err) {
	                reject(err);
                } else {
                    resolve(docs.map(doc => {
                        doc = doc.toJSON({transform: removeObjectID});
                        const form = {
                            body: doc.body,
                            procedureID: doc.procedureID,
                            name: doc.formName
                        }
                        const response = {
                            patientName: doc.patient.name,
                            patientID: doc.patientID,
                            responseID: doc.responseID,
                            form: form,
                            timestamp: doc.timestamp,
                            update_timestamp: doc.update_timestamp
                        }
                        return response;
                }))
            }
        });
    })

}


function insertResponse(reqBody) {
	// assume patient exists
	// need to check before inserting
	const db = formResponseToDbObject(reqBody.form);
	db.db.patientID = reqBody.patientID;
	return new Promise((resolve, reject) => {
		// insert form first
		responseSchema.FormResponse.create(db.db).then((doc)=>{
			return responseSchema.ResponseItem.insertMany(db.items).then(()=>doc);
		}).then((doc)=>{
			// update patient record
			const entry = {
				responseID: doc._id, 
				procedureID: doc.procedureID,
				name: doc.formName, 
				timestamp: doc.timestamp, 
				update_timestamp: doc.update_timestamp
			};
			patientSchema.Patient.updateOne(
				{patientID: doc.patientID}, 
				{$push: {SDCResponses: entry}}
			).then(()=>resolve(doc.toJSON()));
		}).catch((err) => reject(err));
	});
}


function formResponseToDbObject(form) {
	const dbObject = {};
	dbObject.procedureID = form.procedureID;
	dbObject.formName = form.name;
	dbObject.body = [];
	dbObject.form = {};
	const responseItems = [];

	form.body.forEach(element => {
        const objId = makeResponseItem(element, dbObject.form, responseItems);
        dbObject.body.push(objId);
	});
	return {db: dbObject, items: responseItems};
}

// helper functions below

function makeResponseItem(item, mapObj, itemArr) {
	if (item.childItems) {
        goThroughChildItems(item, mapObj, itemArr);
    }
    if (item.list) {
        goThroughList(item, mapObj, itemArr);
    }
    const _id = new ObjectId();
    item._id = _id;
    itemArr.push(item);
    const key = IdToMapKey(item.ID);
    if (Array.isArray(mapObj[key])) {
        mapObj[key].push(_id);
    } else {
        mapObj[key] = [_id];
    }
    return _id;
}

function goThroughChildItems(item, mapObj, itemArr) {
	const childItems = [];
    item.childItems.forEach(child => {
        childItems.push(makeResponseItem(child, mapObj, itemArr));
    });
    item.childItems = childItems;
}

function goThroughList(item, mapObj, itemArr) {
	item.list.forEach(option => {
        if (option.childItems) {
            goThroughChildItems(option, mapObj, itemArr);
        }
    });
}

function IdToMapKey(ID) {
	return ID.replace('.', '-');
}

/**
 * Transform function to remove objectID.
 * Should we move this to a new file like
 * DB util?
 */
function removeObjectID (doc, ret, options) {
	delete ret._id;
	delete ret.__v;
	return ret;
}

module.exports.DB = {
	insertForm,
	getAllFormTemplates,
	getSDCFormByPID,
	deleteSDCFormByPID,
	replaceSDCForm,
	fetchUsers,
	insertUser,
	insertResponse,
	getFormResponse,
	insertPatient,
	fetchPatients,
	getPatientByPatientID
};
