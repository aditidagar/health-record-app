import React, {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";

// import page components 
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FormUpload from "../../components/form_manager_filler/FormUpload/FormUpload";
import {FormsTable} from "../../components/form_manager_filler/FormsTable/FormsTable";

// import sampleTableData from "../../components/form_manager_filler/FormsTable/TableTestJSON";
// use for local development
const SERVER_URL = 'http://localhost:5000';

// have Form Manager manage state of forms table

export default function FormManager() {
	// variables to store state of the table
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
				role="Form Manager"
			/>
			<SearchBar />
			<FormUpload setTableUpdate={setTableUpdate}/>
			<FormsTable
				tableData={formsData}
				setTableUpdate={setTableUpdate}
				role={"FORM_MANAGER"}
			/>

		</div>
	);
}