import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [exp, setExp] = React.useState('');
  const [source, setsource] = React.useState('');


  const expHandleChange = (event) => {
    setExp(event.target.value);
  };
  const sourceHandleChange = (event) => {
    setsource(event.target.value);
  };
  return (
    <div className="ContactUs-form-container">
      <form className={classes.root} id="contactUs-form" noValidate autoComplete="off">
        <div className="form-field-section">
          <TextField id="standard-required" label="NAME" defaultValue="Name" />
          <TextField id="standard-required" label="PHONE" defaultValue="Phone" />
          <FormControl className={classes.formControl}>
            <InputLabel shrink >
              EXPERIENCE
            </InputLabel>
            <Select
              value={exp}
              onChange={expHandleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="3+ years">3+ years</MenuItem>
              <MenuItem value="5+ years">5+ years</MenuItem>
              <MenuItem value="10+ years">10+ years</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-field-section">
          <TextField id="standard-required" label="SURNAME" defaultValue="Surname" />
          <TextField id="standard-required" label="EMAIL ADDRESS" defaultValue="Email" />
          <FormControl className={classes.formControl}>
            <InputLabel shrink >
              WHERE DID YOU HEAR ABOUT US?
            </InputLabel>
            <Select
              value={source}
              onChange={sourceHandleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="Linkedin">Linkedin</MenuItem>
              <MenuItem value="Instagram">Instagram</MenuItem>
              <MenuItem value="Friend">Friend</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" className="send-btn">SEND</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;