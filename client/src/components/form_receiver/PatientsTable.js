/** NOTE:------------------------------------------------------------------------
 * FindDOMNode is deprecated in StrictMode but MaterialUI has not updated it yet.
 * The warning in the console can be ignored or removed StrictMode from React App*/
import React, {useEffect, useState} from 'react';
import axios from "axios";

/* Documentation + API: https://material-ui.com/components/tables */
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Collapse from '@material-ui/core/Collapse';
import "./styles.css";

// import sample medical history data
import {sampleMedicalHistory} from "./PatientTableSample";
import {Box, Divider} from "@material-ui/core";

// Render sample response
import {sampleCovidResponse} from './SampleResponse'
import FormView from '../form_manager_filler/FormsTable/FormView'
import {func} from "prop-types";

//for local development
const SERVER_URL = 'http://localhost:5000';

// column names for the table of patients
const columnHeaders = [
  {id: 'formId', label: 'Patient Name', align: 'left'},
  {id: 'formTitle', label: 'Patient ID', align: 'left'},
  {id: 'actions', label: 'Actions', align: 'left'},
];
// custom styling for Material UI Components
const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "87%",
    top: 0,
    left: 0,
    marginTop: "7%",
    marginLeft: "11%",
    height: "100%"
  },
  paper: {
    maxHeight: "70%",
    height: "70%",
    position: "fixed",
    width: "87%",
    marginTop: "10px",
  },
  container: {
    maxHeight: "100%",
  }
});

const StyledTableCell = withStyles({
  head: {
    backgroundColor: "#342E53",
    color: "white",
  },
  body: {
    fontWeight: "bold"
  }
})(TableCell);

const StyledTableRow = withStyles({
  root: {
    backgroundColor: "#F5F5F5",
  }
})(TableRow);

function ResponseRow(props) {
  const {response} = props.response;
  const [responseOpen, setResponseOpen] = React.useState(false);
  const [patientReport, setPatientReport] = React.useState({});

  /**
   * Return the date as a formatted string
   * @param {string} formDate the date from the db form object
   * @return {string} the formatted date*/
  function formatDate(formDate) {
    let d = new Date(formDate);
    return d.toString();
  }

  const getReportToRender = async () => {
    // fetch form response to render from server
    const responseID = response.responseID;
    const procedureID = response.procedureID;

    await axios.get(SERVER_URL + '/sdcresponse/' + procedureID.toString() + '/' + responseID.toString())
      .then(res => {
        console.log(res.data);
        setPatientReport(res.data);
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          alert(error.response.data);
        } else {
          console.log(error.message);
          console.log(error.message);
        }
      })
  }
  const handleViewClickOpen = () => {
    getReportToRender().then(() => {
      setResponseOpen(!responseOpen);
    })
  }
  const handleViewClickClose = () => {
    setResponseOpen(!responseOpen)
  }

  return (
    <React.Fragment>
      <StyledTableRow key={response.responseID}>
        <TableCell component="th" scope="row">
          {response.name}
        </TableCell>
        <TableCell align="left">{response.responseID}</TableCell>
        <TableCell aligh="left">{formatDate(response.update_timestamp)}</TableCell>
        <TableCell>
          {responseOpen ? <Button onClick={handleViewClickClose} variant="outlined" color="secondary">Close</Button>
          : <Button onClick={handleViewClickOpen} variant="outlined" color="primary">View</Button>}
        </TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={4}>
          <Collapse in={responseOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <h3>Patient Name: {patientReport.patientName}</h3>
              <h3>Patient ID: {patientReport.patientID}</h3>
              <Divider />
              {/* TODO: fetch response data to render*/}
              <FormView formData={patientReport.form} isResponse={true} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

function PatientRow(props) {

  const { row } = props.rowData;
  const [viewOpen, setViewOpen] = React.useState(false);

  let medicalHistory;
  if (row.SDCResponses.length > 0) {
    medicalHistory = row.SDCResponses.map((response) => (
      <ResponseRow
        key={response.responseID}
        response={{response}}
        patientName={row.name}
        patientID={row.patientID}
      />
    ))
  } else {
    medicalHistory = <TableRow>
      <TableCell>
        Patient has no medical reports.
      </TableCell>
    </TableRow>
  }

  const handleViewClickOpen = () => {
    props.setPatientTableUpdate(new Date());
    setViewOpen(!viewOpen);
  }
  const handleViewClickClose = () => {
    setViewOpen(!viewOpen)
  }
  
  // // Testing
  // return <FormView formData={sampleCovidResponse} isResponse={true}/>;

  // event handlers for action buttons 'view'
  return (
    <React.Fragment>
      {/* Row with Procedure ID, form title and actions*/}
      <TableRow hover={true}>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.patientID}</TableCell>
        <TableCell align="left" className="patient-actions">
          <ButtonGroup>
            {/* If open, display 'close' button, else display 'view' button*/}
            {viewOpen ? <Button onClick={handleViewClickClose} color="secondary">Close</Button>
              : <Button onClick={handleViewClickOpen} color="primary">View Medical History</Button>}
          </ButtonGroup>
        </TableCell>
      </TableRow>
      {/* TODO: fetch (medical history) for patients when 'view' is clicked */}
      <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={columnHeaders.length}>
        <Collapse in={viewOpen} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Typography variant="h6">
              Medical History
            </Typography>
            <TableContainer>
              <Table stickyHeader aria-label="patient-responses">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Procedure Name</StyledTableCell>
                    <StyledTableCell>Report ID</StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {medicalHistory}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Collapse>
      </TableCell>
    </React.Fragment>
  );
}


function PatientsTable(props) {
  const classes = useStyles();
  const tableData = props.tableData;
  return (
    <div className={classes.root}>
      <Typography variant="h6">
        Patients
      </Typography>

      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table stickyHeader className="patient-table" aria-label="patient table">
            {/* Table headers for each column */}
            <TableHead>
              <TableRow>
                {columnHeaders.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table entries for each row */}
            <TableBody>
              {tableData.map((row) => (
                <PatientRow
                  key={row.patientID}
                  rowData={{row}}
                  setPatientTableUpdate={props.setPatientTableUpdate}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export {
  ResponseRow,
  PatientRow,
  PatientsTable
}