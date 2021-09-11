import React from 'react';
import axios from "axios";
import FormView from "./FormView";
import sampleJson from "../../JsonRender/sampleParserOutput";
import {TextField} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import "./styles.css";

const SERVER_URL = "http://localhost:5000";

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
      borderWidth: 2,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blueviolet',
      borderWidth: 2,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blueviolet',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: 'blueviolet',
        borderWidth: 2,
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blueviolet',
        borderWidth: 2,
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(4),
      width: '25ch',
    },
  },
}));
export default function FormFill(props){
  const classes = useStyles();
  const [patientID, setPatientID] = React.useState("");
  const [patientName, setPatientName] = React.useState("");

  const handleIDChange = (event) => {
    setPatientID(event.target.value);
  }
  const handleNameChange = (event) => {
    setPatientName(event.target.value);
  }

  const handleSubmitForm = () => {
    // TODO: use POST api call to send form response
    console.log("Patient Name: " + patientName);
    console.log("Patient ID: " + patientID);
    // const formResponse = JSON.stringify(props.formData.body);
    const responseObj = {name: patientName.toString(),
      patientID: patientID.toString(),
      form: props.formData,
    };
    console.log(responseObj);
    // console.log(props.formData);
    // console.log(JSON.stringify(props.formData.body))
    // console.log(JSON.stringify(responseObj))

    // send form response to server
    axios.post(SERVER_URL + '/sdcresponse',
      responseObj
    ).then((response) => {
      console.log(response.data);
      alert(response.data + ': Report submitted.');
      props.closeAfterFill(false);
    }).catch(function (error){
      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data);
      }
    })
  }
  return (
    <div>
      <button onClick={handleSubmitForm} className="form-submit-button">Submit Form</button>
      <form className={classes.root} noValidate autoComplete="off">
        <CssTextField
          id="patient-name"
          label="Patient Name"
          placeholder="Patient Name"
          variant="outlined"
          value={patientName}
          onChange={handleNameChange}
        />
        <CssTextField
          id="patient-name"
          label="Patient ID"
          placeholder="Patient ID"
          variant="outlined"
          value={patientID}
          onChange={handleIDChange}
        />
      </form>
      <FormView formData={props.formData}/>
    </div>
  )
}