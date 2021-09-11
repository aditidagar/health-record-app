import React, { Component } from "react";
import DisplayedItem from "./DisplayedItem";
import Section from "./Section";
import QuestionResponse from "./QuestionResponse";
import QuestionSelect from "./QuestionSelect";
import Repeating from "./Repeating";
import Option from "./Option";
const Components = {
  DisplayedItem: DisplayedItem,
  Section: Section,
  QR: QuestionResponse,
  QS: QuestionSelect,
  QM: QuestionSelect,
  Option: Option
};

export default (block, handleChange, siblings, parent, original, isResponse) => {
  if (typeof Components[block.type] !== "undefined") {
	var compType = Components[block.type]
	var repeatingData = {}
	var key = block.ID
	if(compType.prototype instanceof Repeating){
		repeatingData = {
			siblings: siblings,  //these args. are only needed for repeating elements
			parent: parent,
			isLast: block.isLast == null ? true : block.isLast
		}
		if(block.repeatKey == null){
			block.repeatKey = 0;
		}
		
		if(isResponse){ // determine isLast and repeatKey
			for(let i = 0; i < siblings.length; i++){
				if(siblings[i] == block){
					repeatingData.isLast = i == siblings.length - 1;
					block.repeatKey = i;
					break;
				}
			}
		}
		
		key = block.ID + block.repeatKey
	}
	return React.createElement(Components[block.type], {
	  ...repeatingData,
	  key: key,
	  block: block,
	  handleChange: handleChange,
	  original: original,
	  isResponse: isResponse
	});
  }
  return React.createElement(
    () => <div className="not-created">The type {block.type} has not been created yet.</div>,
    { key: block.ID } //?
  );
};


