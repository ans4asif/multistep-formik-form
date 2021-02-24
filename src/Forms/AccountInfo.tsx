import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { Account_Info} from '../interface/PersonalInfo'
import * as Yup from 'yup'
import { TextField } from '@material-ui/core'
import './style.css'
import Button from '@material-ui/core/Button';
const initialValues:Account_Info={
    username:'', 
    password:'', 
    re_password:'',
    email:''
}
const valSchema = Yup.object().shape({
  username: Yup.string()
    .max(15, "*Username should be less than 15 characters")
    .min(3, "*Minimum 3 characters")
    .required("*Username is required"),
  password: Yup.string()
    .max(20, "*Password should be less than 20 characters")
    .min(10, "*Minimum 10 characters")
    .required("*Name is required"),
  re_password: Yup.string()
    .min(10, "*Minimum 10 characters")
    .required("*password is required"),
  email: Yup.string()
    .max(30, "*Email should be less than 30 characters")
    .min(12, "*not a valid email")
    .required("*Email is required"),
});
interface Props{
    submit:React.Dispatch<React.SetStateAction<number>>,
    setFormValues:React.Dispatch<React.SetStateAction<{}>>,
    prevValues:any
  }

export const AccountInfo:React.FC<Props> = ({submit,setFormValues,prevValues}) => {
    return (
        <div>
        <Formik initialValues={prevValues}
        onSubmit={(values:Account_Info)=>{
            submit(2)
            setFormValues({...values,...prevValues})
            
            console.log(values)
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
              name='username'
              label='User Name'
              variant='outlined'
              id='username'/>
              <br/>
              <ErrorMessage name="username" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='email'
              as={TextField}
              name='email'
              label='E-mail'
              variant='outlined'
              id='email'/>
              <br/>
              <ErrorMessage name="email" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='text'
              as={TextField}
              name='password'
              label='Password'
              variant='outlined'
              id='password'/>
              <br/>
              <ErrorMessage name="password" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="field">
             <Field 
             type='text'
              as={TextField}
              name='re_password'
              label='Re-Enter Password'
              variant='outlined'
              id='re_password'/>
              <br/>
              <ErrorMessage name="re_password" render={(msg)=>(
                <span className='error'>{msg}</span>
              )   
              }/>
            </div>
            <div className="submit-btn">
              <Button type="submit" variant="contained" color="primary">Next</Button>
            </div>
            <div className="submit-btn">
              <Button onClick={()=>submit(0)} variant="contained" color="primary">Back</Button>
            </div>
            </Form>
            </div>
            )}
              
        </Formik>
        </div>
    )
}
