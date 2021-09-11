import { makeStyles } from '@material-ui/core';
import React from 'react';

// header styling
import "./styles.css";

/* Header component for user pages, display the user's role*/ 
export default function Header(props) {
  return(
    <div className="header">
        {props.title}
    </div>
  );
}