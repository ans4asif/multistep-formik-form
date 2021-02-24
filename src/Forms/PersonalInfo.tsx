import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { Personal_Info} from '../interface/PersonalInfo'
import * as Yup from 'yup'
import { TextField } from '@material-ui/core'
import './style.css'
import Button from '@material-ui/core/Button';

// const initialValues:Personal_Info={
//     firstName:'', 
//     lastName:'', 
//     age:0,
//      cnic:0, 
//      address:''
// }
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


interface Props{
  submit:React.Dispatch<React.SetStateAction<number>>,
  setFormValues:React.Dispatch<React.SetStateAction<{}>>,
  prevValues:any
}

export const PersonalInfo:React.FC<Props> = ({submit,setFormValues,prevValues}) => {
    return (
        <div>
        <Formik initialValues={prevValues}
        onSubmit={(values:Personal_Info)=>{
            submit(1)
            console.log(values)
            setFormValues({...values})
            
        }}
        validationSchema={valSchema}
        >
        {(formik)=>(
          <div className="form"> 
            <Form onSubmit={formik.handleSubmit}>
            <div className="field">
             <Field 
             type='text'
              as={TextField}
              name='firstName'
              label='First Name'
              variant='outlined'
              id='firstName'/>
              <br/>
              <ErrorMessage name="firstName" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='text'
              as={TextField}
              name='lastName'
              label='Last Name'
              variant='outlined'
              id='lastName'/>
              <br/>
              <ErrorMessage name="lastName" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='number'
              as={TextField}
              name='age'
              label='Age'
              variant='outlined'
              id='age'/>
              <br/>
              <ErrorMessage name="age" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='text'
              as={TextField}
              name='cnic'
              label='CNIC'
              variant='outlined'
              id='cnic'/>
              <br/>
              <ErrorMessage name="cnic" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='text'
              as={TextField}
              name='address'
              label='Address'
              variant='outlined'
              id='address'/>
              <br/>
              <ErrorMessage name="address" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="submit-btn">
              <Button type="submit" variant="contained" color="primary">Next</Button>
            </div>
            </Form>
            </div>
            )}
              
        </Formik>
        </div>
    )
}
