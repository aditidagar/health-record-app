import React, { Component } from "react";
import Button from '@material-ui/core/Button';

function findOriginal(object, key, val){
	var value;
	Object.keys(object).some(function(k) {
		if (k === key && object[k] === val) {
			value = object;
			return true;
		}
		if (object[k] && typeof object[k] === 'object') {
			value = findOriginal(object[k], key, val);
			return value !== undefined;
		}
	});
	return value;
}
class Repeating extends React.Component {
	constructor(props) {
		super(props); // props: siblings, block, parent 
		this.onClick = this.onClick.bind(this);
		this.countRepeats = this.countRepeats.bind(this);
	}
	
	countRepeats(){
		var count = 0;
		var lastIndex = -1;
		for(let i = 0; i < this.props.siblings.length; i++){
			var sib = this.props.siblings[i]
			if(sib.ID == this.props.block.ID){
				count ++;
				lastIndex = i;
			}
		}
		return {count: count, lastIndex: lastIndex}
	}
	
	
	
	onClick(event){
		var res = this.countRepeats();
		console.log(this.props)
		console.log(res)
		if(this.props.isLast && !this.props.isResponse){
			// TODO: change "<=" to "<", only using <= so that we can see repeats for maxCard=1
			if(res.count < this.props.block.maxCard){
				//update JSON (set isLast false, add json child in right position, and isLast to true)
				this.props.block.isLast = false;
				
				//var newObj = JSON.parse(JSON.stringify(this.props.block));//deepClone(this.props.block)
				console.log(original)
				console.log(this.props.block.ID)
				var original = findOriginal(this.props.original, 'ID', this.props.block.ID)
				var newObj = JSON.parse(JSON.stringify(original));
				newObj.isLast = true;
				newObj.repeatKey = this.props.block.repeatKey + 1;
				
				this.props.siblings.splice(res.lastIndex+1, 0, newObj)
				this.props.parent.forceUpdate(); // rerender children.
			}
		}
	}
	
	render() {
		var res = this.countRepeats();
		// TODO: change "<=" to "<", only using <= so that we can see repeats for maxCard=1 
		if(!this.props.isResponse && this.props.isLast && res.count < this.props.block.maxCard){ // also check min/max card?
			return <div><Button color="primary" style={{textTransform: 'none'}} onClick={this.onClick}>+ Add another <i>{' "' + this.props.block.title + '"'}</i></Button></div>
		}
	}
}
export default Repeating;
