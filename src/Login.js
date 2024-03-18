import React from 'react'
import { useFormik } from 'formik'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { API } from './global';

export default function Login() {
  const navigate = useNavigate();
    const LoginSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    })
    const formik = useFormik({
        initialValues: {
            email :"",
            password :"",
        },
        validationSchema : LoginSchema,
        onSubmit : (values) =>{
            console.log(values);
           login(values);
        }
    });

      const login = async (values) => {
        let data = await fetch(`${API}/login`,{
          method:"POST",
          body : JSON.stringify(values),
          headers : {"Content-Type":"application/json"},
        })
        if (data.status === 400) {
          const result = await data.json();
          alert(result.message);
        } else {
          const result = await data.json();
          localStorage.setItem("storetoken",result.token)
          alert("successfully logged in");
          navigate("/portal/home");
        }
      }

  return (
    <form className="loginForm" onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <TextField 
          id="filled-basic" 
          label="E-mail" 
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
          label="Password" 
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
