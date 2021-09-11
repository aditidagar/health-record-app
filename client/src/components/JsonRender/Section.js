import React, { Component } from "react";
import Components from "../../components/JsonRender/components"
import "./styles.css"
import Repeating from "./Repeating";
/*
{
  "ID": "4257.100004300",
  "order": 19,
  "title": "",
  "minCard": "0",
  "maxCard": 1,
  "type": "Section",
  "childItems": [
	{
      "ID": "39617.100004300",
      "order": 17,
      "title": "# This checklist applies principally to adrenal carcinomas in adults. Pediatric adrenal cortical tumors have different criteria for malignancy and are, in general, treated under protocols that may differ significantly from the recommendations for adult- type tumors.",
      "type": "DisplayedItem"
	 },
	 
	 {
      "ID": "123.100004300",
      "order": 18,
      "title": " some other title",
      "type": "DisplayedItem"
	 }
  ]
}
*/
class Section extends Repeating {
	render(){
		return <div className="section">
			<h2>{this.props.block.title}</h2>
			{this.props.block.childItems.map(block => Components(block, this.props.handleChange, this.props.block.childItems, this, this.props.original, this.props.isResponse))}
			{super.render()}
		  </div>
	}
}

export default Section;