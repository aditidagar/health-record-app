/** NOTE:------------------------------------------------------------------------
 * FindDOMNode is deprecated in StrictMode but MaterialUI has not updated it yet.
 * The warning in the console can be ignored or removed StrictMode from React App*/
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DeleteForm} from "./TableActionComponents";
/* Material UI Table components*/
/* Documentation + API: https://material-ui.com/components/tables */
import { makeStyles } from '@material-ui/core/styles';
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

// get a sample form to render
import Components from '../../JsonRender/components';
import sampleJson from "../../JsonRender/sampleParserOutput"
import UploadDialog from "../FormUpload/UploadDialog";
import FormView from "./FormView";
import FormFill from "./FormFill";

//for local development
const SERVER_URL = 'http://localhost:5000';

// column names for the table of all available forms
const columnHeaders = [
  {id: 'formId', label: 'Form ID', align: 'left'},
  {id: 'formTitle', label: 'Form Title', align: 'left'},
  {id: 'formTime', label: 'Date Updated', align: 'left'},
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
  container: {
    maxHeight: "100%",
  },
  paper: {
    maxHeight: "70%",
    height: "70%",
    position: "fixed",
    width: "87%",
    marginTop: "10px",
  }
});



function Row(props) {
  const { row } = props.rowData;
  const [currentForm, setCurrentForm] = React.useState({});
  // state and event handler for collapsable view of form
  const [viewOpen, setViewOpen] = React.useState(false);
  // used to keep track of the state of form being viewed, if replaced when viewed, re-render with updated form
  const [viewReplace, setViewReplace] = React.useState("");
  useEffect(() => {
    if (!viewReplace) return;
    getFormToView()
  }, [viewReplace]);

  const getFormToView = async () => {
    const viewFormID = row.procedureID;
    console.log(viewFormID);
    await axios.get(SERVER_URL + '/sdcform/' + viewFormID.toString())
      .then(res => {
        // console.log(res.data);
        setCurrentForm(res.data);
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          alert(error.response.data);
        } else {
          console.log('Error: ', error.message);
          alert(error.message);
        }
      });
  }
  const handleViewClickOpen = () => {
    getFormToView().then(() =>{
        setViewOpen(!viewOpen);
    });

  }
  const handleViewClickClose = () => {
    setViewOpen(!viewOpen)
  }

  /**
   * Return the date as a formatted string
   * @param {string} formDate the date from the db form object
   * @return {string} the formatted date*/
  function formatDate(formDate) {
    let d = new Date(formDate);
    return d.toString();
  }

  // event handlers for action buttons 'view, replace, delete'
  // REPLACE ----------
  /* state handlers for button to open dialog for Replace button */
  const [replaceOpen, setReplaceOpen] = React.useState(false);
  const handleReplaceClickOpen = () => {
    setReplaceOpen(true);
  };
  const handleReplaceClickClose = () => {
    setReplaceOpen(false);
  };

  // DELETE -----------
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  };

  let tableActions;
  let formDisplay;
  if (props.role === "FORM_FILLER"){
    tableActions = <ButtonGroup>
      {viewOpen ? <Button onClick={handleViewClickClose} color="secondary">Close</Button>
        : <Button onClick={handleViewClickOpen} color="primary">Fill</Button>}
    </ButtonGroup>
    formDisplay = <FormFill closeAfterFill={setViewOpen} formData={currentForm}/>
  }else if (props.role === "FORM_MANAGER") {
    tableActions = <ButtonGroup>
      {/* If open, display 'close' button, else display 'view' button*/}
      {viewOpen ? <Button onClick={handleViewClickClose} color="primary">Close</Button>
        : <Button onClick={handleViewClickOpen} color="primary">View</Button>}
      <Button onClick={handleReplaceClickOpen}>Replace</Button>
      <Button onClick={handleDeleteClickOpen} color="secondary">Delete</Button>
    </ButtonGroup>;
    formDisplay = <FormView formData={currentForm} isResponse={false}/>
  }

  return (
    <React.Fragment>
      {/* Row with Procedure ID, form title and actions*/}
      <TableRow hover={true}>
        <TableCell align="left">{row.procedureID}</TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{formatDate(row.update_timestamp)}</TableCell>
        <TableCell align="left" className="form-actions">
          {tableActions}
        </TableCell>
      </TableRow>
      {/* Expand and render form when 'view' is clicked */}
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={columnHeaders.length}>
          <Collapse in={viewOpen} timeout="auto" style={{display: "block"}} unmountOnExit>
            {viewOpen && formDisplay}
          </Collapse>
        </TableCell>
      </TableRow>

      {/* Dialog for replacing (uploading new) form*/}
      <UploadDialog
        handleClose={handleReplaceClickClose}
        openState={replaceOpen}
        viewReplaceState={setViewReplace}
        procedure={row.name}
        replaceForm={true}
        formID={row.procedureID}
        setTableUpdate={props.setTableUpdate}
      />
      {/* Dialog for deleting a form*/}
      <DeleteForm
        handleClose={handleDeleteClickClose}
        openState={deleteOpen}
        procedure={row.name}
        formID={row.procedureID}
        setTableUpdate={props.setTableUpdate}
      />
    </React.Fragment>
  );
}

function FormsTable(props) {
  const classes = useStyles();
  const tableData = props.tableData;
  return (
    <div className={classes.root} >
      <Typography variant="h6">
        Available Forms
      </Typography>

      <Paper className={classes.paper} >
        <TableContainer className={classes.container}>
          <Table stickyHeader className="form-table" aria-label="simple table">
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
                <Row key={row.procedureID}
                     rowData={{row}}
                     handleClickDelete={props.handleClickDelete}
                     setTableUpdate={props.setTableUpdate}
                     role={props.role}
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
  Row,
  FormsTable,
}
