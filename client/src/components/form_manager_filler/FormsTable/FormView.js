import React from 'react';
import Components from '../../JsonRender/components';
import sampleJson from "../../JsonRender/sampleParserOutput";
import {Box} from "@material-ui/core";


/* Root of form: keeps track of all form field values*/
class FormView extends React.Component {
	
	constructor(props) {
		super(props);
		//this.state = {values:{}}; 
		this.handleChange = this.handleChange.bind(this);  
		// need to make sure original is the original form object, not a form response
		this.original = JSON.parse(JSON.stringify(this.props.formData));
	}
	
	handleChange(id, value) {
		/*var newVals = {...this.state.values}
		newVals[id] = value;
		this.setState({...this.state, values:newVals}); */ 
		// check to see modified form template object
		console.log(this.props.formData.body)
	}
	
	render() {
		console.log('FormView original:')
		console.log(this.original)
		return <Box margin={1}>
		  <h2>Form Name: {this.props.formData.name}</h2>
		  <h3>ProcedureID: {this.props.formData.procedureID}</h3>
		  {this.props.formData.body.map(block => Components(block, this.handleChange, 
		  this.props.formData.body, this, this.original, this.props.isResponse))}
		</Box>
	}
}
export default FormView;
/*
export default function FormView(props) {
  const formJSON = props.formData;
  return(
    <Box margin={1}>
      <h2>Form Name: {formJSON.name}</h2>
      <h3>ProcedureID: {formJSON.procedureID}</h3>
      {formJSON.body.map(block => Components(block))}
    </Box>
  )
}*/