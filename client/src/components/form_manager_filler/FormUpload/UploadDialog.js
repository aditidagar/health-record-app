/* change Dialog pop up according to props, PATCH request if replace == true, else POST */
import React, {useState} from "react";
import axios from "axios";
import {withStyles} from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import {DialogContent} from "@material-ui/core";

const SERVER_URL = "http://localhost:5000";
export default function UploadDialog (props) {
  const formID = props.formID;
  /* event handlers for uploading the form file */
  // set valid ext as xml and json for now, later check for only xml
  const validFileExtensions = ["xml"];
  const [formData, setFormData] = useState("");

  const getForm = (e) => {
    setFormData(e.target.files[0]);
  };

  function isValidFileType(file) {
    return validFileExtensions.indexOf(file.split('.').pop()) > -1;
  }

  const uploadForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("form", formData);

    const fileName = (data.get('form')).name;

    // console.log(fileName);

    const isValidFile = isValidFileType(fileName);

    if (isValidFile) {
      axios({
        method: "POST",
        url: SERVER_URL + "/xmlUpload",
        data: data,
      }).then((res) => {
        alert('Form uploaded successfully.');
        props.setTableUpdate(new Date());
        props.handleClose();
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          alert(error.response.data);
        } else {
          console.log('Error sending file', error.message);
          alert(error.message);
        }
      });
    } else {
      alert("SDC Form must be a .xml file");
      console.log("Wrong Type of form");
    }
  };

  const replaceForm = (e) => {
    e.preventDefault();
    // console.log(formID.toString());
    console.log('clicked replace');
    const data = new FormData();
    data.append("form", formData);
    const fileName = (data.get('form')).name;
    console.log(fileName);
    const isValidFile = isValidFileType(fileName);
    if (isValidFile) {
      axios({
        method: "PATCH",
        url: SERVER_URL + "/sdcform/" + formID.toString(),
        data: data,
      }).then((res) => {
        alert("Successfully replaced form.");
        props.setTableUpdate(new Date());
        props.handleClose();
        props.viewReplaceState(new Date());
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          alert(error.response.data);
        } else {
          console.log('Error sending file', error.message);
          alert(error.message);
        }
      });
    } else {
      alert("SDC Form must be a .xml file");
      console.log("Wrong Type of form");
    }

  };

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(4),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  let fileUpload;
  if (props.replaceForm) {
    fileUpload = <form className="form-upload" onSubmit={replaceForm}>
      <input className="upload-input" type="file" name="form" onChange={getForm} required />
      <input className="upload-submit" type="submit" name="upload" value="Upload and Replace Form"/>
    </form>;
  } else {
    fileUpload = <form className="form-upload" onSubmit={uploadForm}>
      <input className="upload-input" type="file" name="form" onChange={getForm} required />
      <input className="upload-submit" type="submit" name="upload" value="Upload Form"/>
    </form>;
  }
  return (
    <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.openState}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        {props.replaceForm ? 'Replace SDC form for procedure: ' + props.procedure + ' ?' : 'Upload a new SDC form'}
      </DialogTitle>
      <DialogContent dividers>
        {fileUpload}
      </DialogContent>
    </Dialog>
  );
}