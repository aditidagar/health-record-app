import React from 'react';
import uploadIcon from './upload.png';
import "./styles.css";
import UploadDialog from "./UploadDialog";
// Dialog API from https://material-ui.com/components/dialogs/#customized-dialogs

/* Component for uploading a form */
export default function FormUpload(props) {
  /* state handlers for button to open dialog*/
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return(
    <div>
      <button className="upload-button" type="button" onClick={handleClickOpen}>
        <span>Upload Form</span>
        <img src={uploadIcon} alt="upload icon" />
      </button>
      <UploadDialog
        handleClose={handleClose}
        openState={open}
        replaceForm={false}
        setTableUpdate={props.setTableUpdate}
      />
    </div>
  );
}

