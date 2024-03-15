import React from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from "yup";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Register() {
    const registrationValidationSchema =yup.object({
        username : yup.string().required(),
        email : yup.string().required().email(),
        password : yup.string().required().min(8).max(25),

    })
    const formik =useFormik({
        initialValues: {
            username:"",
            email:"",
            password:"",
        },
        
        validationSchema : registrationValidationSchema,
        onSubmit : (values) =>{
            console.log(values);
        }

    });
  return (
    <form className ="registrationForm" onSubmit={formik.handleSubmit}>
        <h1>Register Here</h1>
          <TextField 
          id="filled-basic" 
          label="Filled" 
          variant="filled" 
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
          helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
          />
          <TextField 
          id="filled-basic" 
          label="Filled" 
          variant="filled" 
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
          />
          <TextField 
          id="filled-basic" 
          label="Filled" 
          variant="filled" 
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
          />
          <Button variant="text" type="submit">hit me</Button>
          <h4>Do have an account ? Click here <Link to="/">Login</Link></h4>
    </form>
  )
}
