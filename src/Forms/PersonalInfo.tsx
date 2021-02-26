import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Personal_Info } from "../interface/PersonalInfo";
import { TextField } from "@material-ui/core";
import "./style.css";
import * as Yup from 'yup'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    background: "#f2f2ed",
    marginLeft: "5em",
    marginRight: "5em",
    boxShadow:'10px'
  },
  submitBtn: {
    padding: "1em 2em 1em 2em",
    borderRadius: "13px",
  },
}));
const initialValues: Personal_Info = {
  firstName: "",
  lastName: "",
  age: 0,
  cnic: 0,
  address: "",
};
const valSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(10, "*Name should be less than 10 characters")
    .min(3, "*Minimum 3 characters")
    .required("*Name is required"),
  lastName: Yup.string()
    .max(10, "*Name should be less than 10 characters")
    .min(3, "*Minimum 3 characters")
    .required("*Name is required"),
  age: Yup.number()
    .max(60, "*Max age can be 60")
    .min(10, "*Minimum age can be 10")
    .required("*Name is required"),
  cnic: Yup.string()
    .min(13, "*Minimum 13 characters")
    .required("*cnic no. is required"),
  address: Yup.string()
    .max(50, "*Address should be less than 50 characters")
    .min(5, "*Minimum 5 characters")
    .required("*Address is required"),
});

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  setFormValues: React.Dispatch<React.SetStateAction<{}>>;
  prevValues: any;
}

export const PersonalInfo: React.FC<Props> = ({
  submit,
  setFormValues,
  prevValues,
}) => {
  console.log({ ...initialValues, ...prevValues }, prevValues);
  const initValues = { ...initialValues, ...prevValues };
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={(values: Personal_Info) => {
          submit(1);
          console.log(values);
          setFormValues({ ...values });
        }}
        validationSchema={valSchema}
      >
        {(formik) => (
          <Paper elevation={3} variant="outlined" className={classes.paper}>
            <div>
              <Form onSubmit={formik.handleSubmit}>
                <h3 className="form-label">Personal Information</h3>

                <Grid container spacing={2} justify="center">
                  <Grid item xs={5} md={5}>
                    <Field
                      type="text"
                      as={TextField}
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      id="firstName"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="firstName"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <Field
                      type="text"
                      as={TextField}
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      id="lastName"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="lastName"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={10} md={10}>
                    <Field
                      type="number"
                      as={TextField}
                      name="age"
                      label="Age"
                      variant="outlined"
                      id="age"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="age"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={10} md={10}>
                    <Field
                      type="text"
                      as={TextField}
                      name="cnic"
                      label="CNIC"
                      variant="outlined"
                      id="cnic"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="cnic"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={10} md={10}>
                    <Field
                      type="text"
                      as={TextField}
                      name="address"
                      label="Address"
                      variant="outlined"
                      id="address"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="address"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                </Grid>
                <div className="btn-container">
                  <Button
                    type="submit"
                    disabled={ !formik.isValid}
                    variant="contained"
                    color="primary"
                    className={classes.submitBtn}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </div>
          </Paper>
        
        )}
      </Formik>
    </div>
  );
};
