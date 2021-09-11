import React, { Component } from "react";
import ResponseField from "./ResponseField";
import Repeating from "./Repeating";
import Components from "../../components/JsonRender/components"
/*{
      "ID": "2168.100004300",
      "order": 418,
      "title": "?Comment(s)",
      "minCard": "0",
      "maxCard": 1,
      "responseField": {
        "dType": "string",
        "maxLength": "4000",
        "responseRequired": true,
        "textAfterResponse": ""
      },
      "type": "QR"
}*/

class QuestionResponse extends Repeating {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);  
		this.state = {value: ""}
	}
	
	handleChange(id, value) {
		if(this.props.handleChange != null){
			this.props.handleChange(id, value)
		}
		this.setState({value: value});
	}
	
	render() {
		let childs = null
		if(this.props.block.childItems != null && ((this.state.value != null && this.state.value !== "") || (this.props.isResponse && this.props.block.responseField.value != null && this.props.block.responseField.value !== "") )){
			childs = this.props.block.childItems.map(child => Components(child, null, this.props.block.childItems, this, this.props.original, this.props.isResponse))
		}
		
		
		
		return <div className="question">
				<div className="question-title">{this.props.block.title}</div>
						<ResponseField isResponse={this.props.isResponse} block={this.props.block.responseField} handleChange={this.handleChange}/>
					{childs}
					{super.render()}
			</div>;
	}
}
export default QuestionResponse;
