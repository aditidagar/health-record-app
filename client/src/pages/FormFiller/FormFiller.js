import React, {Component, useEffect, useState} from "react";
import "./styles.css";

// import page components 
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

import Components from "../../components/JsonRender/components"
import sampleJson from "../../components/JsonRender/sampleParserOutput"
import {FormsTable} from "../../components/form_manager_filler/FormsTable/FormsTable";
import axios from "axios";

// use for local development
const SERVER_URL = 'http://localhost:5000';

const divStyle = {
	position: 'relative',
	top: '40px',
    left: '180px',
	width: 'calc(100% - 200px)'
};
export default function FormFiller() {
	// variables to store state of the form filler table
	const [formsData, setFormsData] = useState([]);
	const [tableUpdate, setTableUpdate] = useState(new Date());

	// update the table of forms if query is changed,
	useEffect(() => {
		if (!tableUpdate) return;
		getForms()
	}, [tableUpdate]);

	const getForms = async () => {
		try {
			const response = await axios.get(SERVER_URL + '/sdcforms');
			setFormsData(response.data.forms);
			console.log(response.data.forms);
		} catch (e) {
			console.log(e);
		}
	}
	return(
		<div>
			<NavBar
				role={"Form Filler"}
			/>
			<SearchBar />
			{/*<div style={divStyle}>*/}
			{/*	<h2>Form Name: {sampleJson.name}</h2>*/}
			{/*	<h3>ProcedureID: {sampleJson.procedureID}</h3>*/}
			{/*	{sampleJson.body.map(block => Components(block))}*/}
			{/*</div>*/}
			<FormsTable
				tableData={formsData}
				setTableUpdate={setTableUpdate}
				role={"FORM_FILLER"}
			/>
		</div>
	);
}

