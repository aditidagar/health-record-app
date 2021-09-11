import React, { Component } from "react";
/*
"responseField": {
        "dType": "string",
        "maxLength": "4000",
        "responseRequired": true,
        "textAfterResponse": ""
      },
*/

class ResponseField extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);  
	}
	
	onChange(event) {
		if(this.props.handleChange != null){
			this.props.handleChange(this.props.block.ID, event.target.value)
		}
		// store value in template object
		this.props.block.value = event.target.value
	}
	
	render() {
		const dType = this.props.block.dType;
		if(dType==="integer"){
			return <span> <input type="number" value={this.props.block.value} disabled={this.props.isResponse} onChange={this.onChange}  min={this.props.block.minInclusive} max={this.props.block.maxInclusive}/> </span>
		}
		else{ // string default
			if(this.props.isOption){
				return <span style={{marginLeft:'20px'}}><input value={this.props.block.value} disabled={this.props.isResponse} onChange={this.onChange} maxLength={this.props.block.maxLength}/> {this.props.textAfterResponse}</span>
			}
			else{
				return <span><textarea value={this.props.block.value} disabled={this.props.isResponse} onChange={this.onChange} maxLength={this.props.block.maxLength}/> {this.props.textAfterResponse}</span>
			}
		}
		
	}
}
export default ResponseField;
/*
export default props => (
  <span><textarea /> {props.textAfterResponse}</span>
);*/