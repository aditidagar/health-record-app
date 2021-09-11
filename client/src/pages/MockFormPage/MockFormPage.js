import React from 'react';

import NavBar from "../../components/NavBar/NavBar";

import "./styles.css";

/* use this page component to test form rendering output, once finalized it can be
   incorporated into other pages */

export default function MockFormPage() {
  return(
    <div>
      <NavBar
        role="Form Manager"
      />
    </div>
  );
}