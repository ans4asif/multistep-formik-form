import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { PersonalInfo } from "../Forms/PersonalInfo";
import { AccountInfo } from "../Forms/AccountInfo";
import { Review } from "../Forms/Review";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Personal Info", "Account Info", "Review"];
}



export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  const steps = getSteps();
  const handleReset=()=>{
    setFormValues({})
    setActiveStep(0)
  }

  function getStepContent(
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    setFormValues: React.Dispatch<React.SetStateAction<{}>>,
    formValues: {}
  )
  
   {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            submit={setStep}
            prevValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case 1:
        return (
          <AccountInfo
            submit={setStep}
            prevValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case 2:
        return <Review values={formValues} submit={setStep} handleReset={handleReset}/>;
      default:
        return "Unknown step";
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, setFormValues, formValues)}
    </div>
  );
// }


}