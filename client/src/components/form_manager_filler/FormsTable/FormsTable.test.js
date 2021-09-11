/* tests for a table listing all available forms*/

// import testing dependencies
import user from "@testing-library/user-event";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import any sample data
import sampleJson from "../../JsonRender/sampleParserOutput";
import {FormsTable, Row} from "./FormsTable";
import sampleTableData from "./TableTestJSON";
import React from "react";
import Button from "@material-ui/core/Button";

describe('Tests for form table component', () => {
  test('Renders forms table component given table data', () => {
    render(<FormsTable tableData={sampleTableData.forms} role={"FORM_MANAGER"}/>);
    // test render table column headers
    expect(screen.getByText('Form ID')).toBeInTheDocument();
    expect(screen.getByText('Form Title')).toBeInTheDocument();
    expect(screen.getByText('Date Updated')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    // test render row data
    expect(screen.getByText('129.100004300')).toBeInTheDocument();
    expect(screen.getByText('ADRENAL GLAND')).toBeInTheDocument();
    expect(screen.getByText('Sat Feb 13 2021 13:25:43 GMT-0500 (Eastern Standard Time)')).toBeInTheDocument();
    expect(screen.getAllByText('View')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Replace')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Delete')[0]).toBeInTheDocument();
  });

  test('Test clicking Replace', () => {
    // Expect replace dialog to render
    const handleReplaceClickOpen = jest.fn();
    render(<Button onClick={handleReplaceClickOpen}>Replace</Button>);
    expect(screen.getByText('Replace')).toBeInTheDocument();
    const replaceButton = screen.getByText('Replace');
    fireEvent.click(replaceButton);
    expect(handleReplaceClickOpen).toHaveBeenCalled();
  });

  test('Test clicking Delete', () => {
    // Expect delete button to render
    const handleDeleteClickOpen = jest.fn();
    render(<Button onClick={handleDeleteClickOpen} color="secondary">Delete</Button>)
    expect(screen.getByText('Delete')).toBeInTheDocument();
    const replaceButton = screen.getByText('Delete');
    fireEvent.click(replaceButton);
    expect(handleDeleteClickOpen).toHaveBeenCalled();
  });
});