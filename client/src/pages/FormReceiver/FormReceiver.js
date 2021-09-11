import React, {Component, useEffect, useState} from "react";
import "./styles.css";

// import page components 
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

// sample patient table data
import {samplePatientsTableData} from "../../components/form_receiver/PatientTableSample";
import {PatientsTable} from "../../components/form_receiver/PatientsTable";
import axios from "axios";

const SERVER_URL = "http://localhost:5000";

export default function FormReceiver() {
	// TODO: get patients table data from API call
	// variables to store state of patient table
	const [patientsData, setPatientData] = useState([]);
	const [patientTableUpdate, setPatientTableUpdate] = useState(new Date());

	// update patient table
	useEffect(() =>{
		if (!patientTableUpdate) return;
		getPatients()
	}, [patientTableUpdate])

	const getPatients = async () => {
		try {
			const response = await axios.get(SERVER_URL + '/patients');
			setPatientData(response.data);
			console.log(response.data);
		} catch (e) {
			console.log(e);
		}
	}

	return(
		<div>
			<NavBar
				role={"Form Receiver"}
			/>
			<SearchBar searchType={"receiver"} />
			<PatientsTable tableData={patientsData} setPatientTableUpdate={setPatientTableUpdate}/>
		</div>
	);
}