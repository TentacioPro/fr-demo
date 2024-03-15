import React from 'react'
import { useFormik } from 'formik'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import * as yup from "yup";
import { Link } from 'react-router-dom';

export default function Login() {
    const LoginSchema = yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
    })
    const formik = useFormik({
        initialValues: {
            username :"",
            password :"",
        },
        validationSchema : LoginSchema,
        onSubmit : (values) =>{
            console.log(values);
        }
    });
  return (
    <form className="loginForm" onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
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
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
          />
          <Button variant="text" type="submit">hit me</Button>

          <h4>Don't have an account ? Click here <Link to="/register">Register</Link></h4>

    </form>
  )
}
