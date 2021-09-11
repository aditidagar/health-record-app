import React, { Component } from "react";
import Header from "../Header/Header";

import "./styles.css";
import formIcon from './clipboard.png';
import patientIcon from './patient.png';

const formFiller = "Form Filler";
const formManager = "Form Manager"
const formReceiver = "Form Receiver"

/* Side bar component */
export default function NavBar(props) {
  return (
    <div className="nav-bar">
        {/* label the side bar according to account type/role */}
        <div className="manager-header">
          <Header title = {props.role} />
        </div>
        {/* container for side bar navigation icons and labels */}
        <div className="nav-container">
          {/* only render if form-filler or form-manager*/}
          {((props.role === formFiller) || (props.role === formManager)) &&
          <div className="nav-item">
            <img className="nav-img" src={formIcon} alt="Forms"/>
            <div className="nav-label">Forms</div>
          </div>
          }
          {/* only render if form-filler or form-receiver */}
          {((props.role === formReceiver)) &&
          <div className="nav-item">
            <img className="nav-img" src={patientIcon} alt="Patients"/>
            <div className="nav-label">Patients</div>
          </div>
          }
        </div>
        
          
       
    </div>
  );
}