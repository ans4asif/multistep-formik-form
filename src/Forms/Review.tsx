import React from "react";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import swal from 'sweetalert'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  details:{
   display:'flex',
   justifyContent:'space-between',
   },
   headings:{
     fontWeight:'bold'
   },
   paper:{
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    background: "#f2f2ed",
    marginLeft: "5em",
    marginRight: "5em",
   }
}));

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  values: any;
  handleReset:()=>void;
}

export const Review: React.FC<Props> = ({ values, submit,handleReset }) => {
  console.log(values.firstName, values.lastName);
  const classes = useStyles();

  const submitForm=()=>{
    console.log('form submitted')
    swal('Submitted','Thanks for Submitting','success')

    handleReset()

 }
  return (
    <div className={classes.root} >
      <Paper elevation={3} variant="outlined" className={classes.paper}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" className={classes.heading}>Personal Details</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>Name</Typography>
        <Typography >{`${values.firstName} ${values.lastName}`}</Typography>
      </AccordionDetails>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>Age</Typography>
        <Typography >{values.age}</Typography>
      </AccordionDetails>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>CNIC</Typography>
        <Typography >{values.cnic}</Typography>
      </AccordionDetails>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>Address</Typography>
        <Typography >{values.address}</Typography>
      </AccordionDetails>
    </Accordion>
      <br/>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography variant="h5" className={classes.heading}>Account Details</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>Username</Typography>
        <Typography >{values.username}</Typography>
      </AccordionDetails>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>E-mail</Typography>
        <Typography >{values.email}</Typography>
      </AccordionDetails>
      <AccordionDetails className={classes.details}>
        <Typography className={classes.headings}>Password</Typography>
        <Typography >{values.password}</Typography>
      </AccordionDetails>
      </Accordion>

      <div className="submit-btn">
        <Button onClick={() => submit(1)} variant="contained" color="primary">
          Back
        </Button>
    
        <Button onClick={()=>submitForm()} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
      </Paper>
    </div>


  );
};
