import React, { Component } from "react";
import ResponseField from "./ResponseField";
import "./styles.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Repeating from "./Repeating";
import Option from "./Option";
import Components from "../../components/JsonRender/components"
class QuestionSelect extends Repeating {
	// Just temp code, still need to handle different types (ex. Single-Select Question vs. Multi-Select Question) 
	constructor(props) {
		super(props);
		var optsState = {}
		for(let i =0; i < props.block.list.length; i++){
			optsState[props.block.list[i].ID] = false;
		}
		var minSelections = this.props.block.minSelections ? this.props.block.minSelections : 0;
		var maxSelections = this.props.block.maxSelections ? this.props.block.maxSelections : 1;
		this.state = {optsState: optsState, error:false, minSelections: minSelections, maxSelections: maxSelections}; 
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(id, isChecked){
		//console.log(this.state)
		
		var nOptsState =  {...this.state.optsState, [id]: isChecked}
		let count = this.props.block.list.filter((opt) => nOptsState[opt.ID]).length
		
		
		var error = count > this.state.maxSelections || count < this.state.minSelections
		this.setState({...this.state, optsState: nOptsState, error:error})
		if(this.props.handleChange != null){
			this.props.handleChange(this.props.block.ID, nOptsState)
		}
		
		// store value in template object
		for(let i = 0; i < this.props.block.list.length; i++){
			let opt = this.props.block.list[i]
			opt.value = nOptsState[opt.ID]
		}
		//this.props.block.value = nOptsState;
	}
	
	render() {
		let error = null;
		if(this.state.error){
			error = <label style={{color: "red"}}> ** Please choose between {this.state.minSelections} and {this.state.maxSelections} options</label>
		}
		// Temporary, should be replaced with other components 
		/*<Option block={opt} handleChange={this.handleChange}/>*/
		const handle = this.handleChange;
		const options = this.props.block.list.map((opt) => Components(opt, handle, this.props.block.list,
		this, this.props.original, this.props.isResponse));
		
				
		return  <div className="question">
				<div className="question-title">{this.props.block.title}</div>
				{options}
					{error}
					{super.render()}
			</div>;
	}
}
export default QuestionSelect;
/*
/*<FormControlLabel key={opt.ID} name={opt.ID} control={<Checkbox checked={this.state.optsState[opt.ID]} onChange={this.handleChange}  />} label={opt.title}/> 
*/
/*
{
          "ID": "20880.100004300",
          "order": 330,
          "title": "?TNM Descriptors",
          "minCard": 1,
          "maxCard": 1,
          "maxSelections": "0",
          "minSelections": 1,
          "list": [
            {
              "ID": "22897.100004300",
              "order": 334,
              "title": "?Not applicable",
              "selectionDeselectsSiblings": "true",
              "responseField": {
                "dType": "string",
                "maxLength": "4000",
                "responseRequired": true,
                "textAfterResponse": ""
              },
              "type": "Option"
            },
            {
              "ID": "20890.100004300",
              "order": 339,
              "title": "m (multiple primary tumors)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20891.100004300",
              "order": 340,
              "title": "r (recurrent)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            },
            {
              "ID": "20892.100004300",
              "order": 341,
              "title": "y (post-treatment)",
              "selectionDeselectsSiblings": false,
              "type": "Option"
            }
          ],
          "type": "QM"
        }
*/