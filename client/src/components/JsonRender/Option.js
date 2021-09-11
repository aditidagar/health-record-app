import React, { Component } from "react";
import ResponseField from "./ResponseField";
import Components from "./components"
class Option extends React.Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this)
		this.state = {checked: false}
	}
	
	handleChange(event){
		if(!this.isResponse){
			if(this.props.handleChange != null){
				this.props.handleChange(event.target.name, event.target.checked);
			}
			this.setState({checked: event.target.checked})
		}
	}
	
	render(){
		let opt = this.props.block
		let respField = null
		if(this.props.block.responseField != null){
			//respField = <ResponseField block={this.props.block.responseField}/>
			respField = <ResponseField isOption={true} block={this.props.block.responseField}/>;
		}
		let childs = null
		if(this.props.block.childItems != null && (this.state.checked || (this.props.isResponse && this.props.block.value))){
			childs = this.props.block.childItems.map(child => Components(child, null, this.props.block.childItems, this, this.props.original, this.props.isResponse))
		}
		
		return <div key={opt.ID}>
			<input disabled={this.props.isResponse} defaultChecked={this.props.block.value} type="checkbox" key={opt.ID} name={opt.ID} onClick={this.handleChange}  />
				
			<label>{opt.title}</label>
			{respField}
				{childs}
		</div>
	}
}

export default Option;