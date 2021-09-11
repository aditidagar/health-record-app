require("dotenv").config();
const multer = require("multer");
const { DB } = require("./DatabaseHandler.js");
const express = require("express");
const app = express();
// const upload = multer({ dest: "uploads/" });
const upload = multer({ storage: multer.memoryStorage() });
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 5000;
const cors = require("cors");
const {
	generateAccessToken,
	authenticateToken,
	TOKEN_EXPIRY_TIME,
} = require("./auth").utils;
const templateParser = require("./templateParser").templateParser;
const { validateForm } = require("./FormValidator.js");

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/test.html");
});

// this is just a sample route to issue tokens, should be replaced with login
app.get("/token", (req, res) => {
	const user = req.query.user;
	if (!user) {
		res.status(400).send("username required");
		return;
	}

	res.status(200).send({
		token: generateAccessToken({ user }),
		expiresIn: TOKEN_EXPIRY_TIME,
	});
});

app.post("/login", (req, res) => {
	const requestData = {
		email: req.body.email,
		password: req.body.password,
	};

	if (!requestData.password || !requestData.email) {
		res.status(400).send("Bad Request: Missing credentials");
		return;
	}

	DB.fetchUsers({ email: requestData.email })
		.then((users) => {
			if (users.length < 1) {
				res.status(401).send("Invalid Email");
				return;
			}

			const user = users[0];
			//passwords not hashed yet
			if (bcrypt.compareSync(requestData.password, user.password)) {
				// Passwords match
				res.status(200).send({
					token: generateAccessToken({ user, role: user.role }),
					expiresIn: TOKEN_EXPIRY_TIME,
					role: user.role,
				});
			} else {
				// Passwords don't match
				res.status(401).send("Invalid password");
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("Server error");
		});
});

// any routes below this route would need to have a valid token to be accessed
app.use(authenticateToken);

app.get("/resource", (req, res) => {
	res.status(200).send("This is a protected resource");
});

app.post("/xmlUpload", upload.single("form"), (req, res) => {
	// This is for testing. Here, I'm just parsing a json file and adding it to db. This should be
	// replaced by XML to JSON parse call
	if (!req.file) return res.status(400).send("No file uploaded.");
	const data = req.file.buffer.toString("utf8");
	let form;
	try {
		form = templateParser.parse(data);
	} catch (err) {
		return res.status(400).send(err.message);
	}
	DB.insertForm(form)
		.then((result) => {
			return res.status(200).send(result);
		})
		.catch((err) => {
			return res.status(400).send(err);
		});
	// return res.status(201).send("file recieved");
});

app.get("/sdcforms", (req, res) => {
	DB.getAllFormTemplates()
		.then((documents) => {
			return res.status(200).send({
				forms: documents,
			});
		})
		.catch((err) => {
			return res.status(500).send(err);
		});
});

app.get("/sdcform/:procedureID", (req, res) => {
	DB.getSDCFormByPID(req.params.procedureID)
		.then((document) => {
			return res.status(200).send(document);
		})
		.catch((err) => {
			return res.status(404).send(err);
		});
});

app.delete("/sdcform/:procedureID", (req, res) => {
	DB.deleteSDCFormByPID(req.params.procedureID)
		.then((sts) => res.status(200).send(sts))
		.catch((err) => res.status(400).send(err));
});

app.patch("/sdcform/:procedureID", upload.single("form"), (req, res) => {
	if (!req.file) return res.status(400).send("No file uploaded.");
	const data = req.file.buffer.toString("utf8");
	let form;
	try {
		form = templateParser.parse(data);
	} catch (err) {
		return res.status(400).send(err.message);
	}
	if (form.procedureID !== req.params.procedureID) {
		return res.status(400).send(`Invalid PID: given 
			${req.params.procedureID} but the form PID is ${form.procedureID}.`);
	}
	DB.replaceSDCForm(form)
		.then((doc) => {
			res.status(200).send(doc);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send(err);
		});
});

app.post("/patient", (req, res) => {
    const patientID = req.body.patientID;
    const name = req.body.name;
    if (!(typeof patientID === 'string') || !(typeof name === 'string')) {
        return res.status(400).send("Invalid body!");
	}
	DB.getPatientByPatientID(req.body.patientID).then(() => {
		res.status(400).send("PatientID exists.")
	}).catch((err) => {
		if (err !== "Patient not found.") {
			return res.status(500).send(err);
		}
		DB.insertPatient(
			patientID, name).then(()=>res.status(200).send("Success")).catch((err) => res.status(400).send(err));
	})
})

app.get("/patient/:patientID", (req, res) => {
    DB.getPatientByPatientID(req.params.patientID).then((patient) =>
        res.status(200).send(patient)).catch((err) =>
            res.status(400).send(err));
})

app.get("/patients", (req, res) => {
    DB.fetchPatients().then((patients) => {
        res.status(200).send(patients);
    }).catch((err) => res.status(500).send(err));
})

app.post("/sdcresponse", (req, res) => {
	if (!req.body.patientID) {
		return res.status(400).send("Missing PatientID.")
	}
	DB.getPatientByPatientID(req.body.patientID).then(()=>{
		DB.insertResponse(req.body).then(r => res.status(200).send("Success"))
        .catch((err) => res.status(500).send(err));
	}).catch((err)=>res.status(500).send(err));
})

app.get("/sdcresponse/:procedureID/:responseID", (req, res) => {
    DB.getFormResponse({procedureID: req.params.procedureID,
        _id: req.params.responseID}).then((responses) => {
            if (!(responses.length)) {
                return res.status(400).send("Not found");
            }
            res.status(200).send(responses[0])
        }).catch((err) => res.status(500).send(err));
})

app.get("/sdcresponse/:procedureID", (req, res) => {
    DB.getFormResponse({procedureID: req.params.procedureID})
        .then((responses) => {
            if (!(responses.length)) {
                return res.status(400).send("Not found");
            }
            res.status(200).send(responses)
        }).catch((err) => res.status(500).send(err));
})

if (!module.parent) {
	console.log(`Attaching to port ${port}...`);
	app.listen(port, () => {
		console.log("Listening on port", port);
	});
}

module.exports.app = app;
