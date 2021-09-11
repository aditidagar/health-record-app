import React, { Component } from "react";

/*{
      "ID": "39617.100004300",
      "order": 17,
      "title": "# This checklist applies principally to adrenal carcinomas in adults. Pediatric adrenal cortical tumors have different criteria for malignancy and are, in general, treated under protocols that may differ significantly from the recommendations for adult- type tumors.",
      "type": "DisplayedItem"
}*/
export default props => (
  <div className="displayedItem">
    {props.block.title}
  </div>
);
