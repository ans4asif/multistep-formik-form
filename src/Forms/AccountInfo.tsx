import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Account_Info } from "../interface/PersonalInfo";
import {
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Input
} from "@material-ui/core";
import "./style.css";
import * as Yup from 'yup'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    background: "#f2f2ed",
    marginLeft: "5em",
    marginRight: "5em",
  },
}));

const initialValues: Account_Info = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};
const valSchema = Yup.object().shape({
  username: Yup.string()
    .max(15, "*Username should be less than 15 characters")
    .min(3, "*Minimum 3 characters")
    .required("*Username is required"),
  password: Yup.string()
    .max(20, "*Password should be less than 20 characters")
    .min(10, "*Minimum 10 characters")
    .required("*Password is required"),
  confirmPassword: Yup.string()
    .required("*password is required")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),

  email: Yup.string()
    .max(30, "*Email should be less than 30 characters")
    .min(12, "*not a valid email")
    .required("*Email is required"),
});
interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  setFormValues: React.Dispatch<React.SetStateAction<{}>>;
  prevValues: any;
}

export const AccountInfo: React.FC<Props> = ({
  submit,
  setFormValues,
  prevValues,
}) => {
  const initValues = { ...initialValues, ...prevValues };
  const classes = useStyles();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };
  const toggleConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
  };
  console.log(showConfirmPass);

  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={(values: Account_Info) => {
          submit(2);
          setFormValues({ ...values, ...prevValues });
          console.log({ ...values, ...prevValues });
        }}
        validationSchema={valSchema}
      >
        {(formik) => (
          <Paper elevation={3} variant="outlined" className={classes.paper}>
            <div>
              <h3 className="account">Account Info</h3>
              <Form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} justify="center">
                  <Grid item xs={8} sm={8}>
                    <Field
                      type="text"
                      as={TextField}
                      name="username"
                      label="User Name"
                      variant="outlined"
                      id="username"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="username"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={8} sm={8}>
                    <Field
                      type="email"
                      as={TextField}
                      name="email"
                      label="E-mail"
                      variant="outlined"
                      id="email"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={8} sm={8}>
                    <Field
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={togglePass}>
                            {showPass ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      type={showPass ? "text" : "password"}
                      as={Input}
                      name="password"
                      label="Password"
                      placeholder="Password"

                      variant="outlined"
                      id="password"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="password"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                  <Grid item xs={8} sm={8}>
                    <Field
                      type={showConfirmPass ? "text" : "password"}
                      as={Input}
                      placeholder="Confirm Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={toggleConfirmPass}>
                            {showConfirmPass ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      name="confirmPassword"
                      label="Confirm Password"
                      variant="outlined"
                      id="confirmPassword"
                      fullWidth
                    />
                    <br />
                    <ErrorMessage
                      name="confirmPassword"
                      render={(msg) => <span className="error">{msg}</span>}
                    />
                  </Grid>
                </Grid>
                <div className="submit-btn">
                  <Button
                    onClick={() => submit(0)}
                    variant="contained"
                    color="primary"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!formik.isValid}
                    variant="contained"
                    color="primary"
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
