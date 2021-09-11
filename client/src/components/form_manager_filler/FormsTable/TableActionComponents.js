import React, { useState } from 'react';
import axios from "axios";
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {DialogContent, DialogTitle, makeStyles} from "@material-ui/core";
import "./styles.css";
const SERVER_URL = 'http://localhost:5000';
// TODO: act dialog pop up for delete
function DeleteForm (props) {
  const formID = props.formID;
  // event handler for Deleting a form
  function handleClickDelete() {
    console.log("Clicked Delete");
    console.log(formID);
    axios.delete(SERVER_URL + "/sdcform/" + formID.toString())
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Form deleted successfully.");
        // update tableUpdate to trigger useEffect to retrieve new data from server
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
  }
  const useStyles = makeStyles((theme) => ({
    deleteButtons: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

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
  return (
    <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.openState}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        {'Delete form for procedure: ' + props.procedure + ' ?'}
      </DialogTitle>
      <DialogContent dividers className={classes.deleteButtons}>
        <Button variant="contained" color="secondary" onClick={handleClickDelete} >Delete Form</Button>
        <Button variant="contained" onClick={props.handleClose}>Cancel</Button>
      </DialogContent>
    </Dialog>
  );
}

export {
  DeleteForm,
}