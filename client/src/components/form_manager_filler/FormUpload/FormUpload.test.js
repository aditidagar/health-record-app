/* test suite for uploading files (i.e., SDCforms) */

// import testing dependencies
import {fireEvent, render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import FormUpload from "./FormUpload";
import UploadDialog from "./UploadDialog";

describe('Testing file uploading', () => {
  test('click Upload Form button and calls onClick callback handler', () => {
    render(<FormUpload/>)
    // expect the button has rendered
    expect(screen.getByText('Upload Form')).toBeInTheDocument();
    // expect upload dialog has not rendered
    expect(screen.queryByText('none presentation')).toBeNull();
  });

  test('render upload file dialog', () => {
    let open = true;
    const handleClose = jest.fn();
    render(<UploadDialog handleClose={handleClose}
                         openState={open}
                         replaceForm={false} />);
    // expect the dialog to be rendered
    expect(screen.getByText('Upload a new SDC form')).toBeInTheDocument();
    // test closing upload file dialog
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  test('uploading .xml file', () => {
    const file = new File(["test file"],  "test.xml", {type:
        "text/json"});
    render(<input type="file" data-testid="fileUploadElement" />);

    const input = screen.getByTestId("fileUploadElement");
    user.upload(input,file);

    expect(input.files[0]).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  })
})