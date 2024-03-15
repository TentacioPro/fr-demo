import React  from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from "yup";


export default function AddMovie() {
   
    const movieValidationSchema = yup.object({
        name : yup.string().required(),
        poster: yup.string().required().min(10).url(),
        trailer: yup.string().required().min(10).url(),
        rating: yup.number().required().min(0).max(10),
        summary: yup.string().required().min(50),
    })
    
    const formik = useFormik({
    initialValues:{
        name:"",
        poster:"",
        trailer:"",
        rating:"",
        summary:"",
    },
    validationSchema: movieValidationSchema,
    onSubmit : (newMovie) => {
        addMovie(newMovie);
        console.log(newMovie);
    }
    });
    const navigate =useNavigate();
    const addMovie = (newMovie) => {
        fetch('https://65f16b8f034bdbecc7627180.mockapi.io/movie',{
        method: 'POST',
        body: JSON.stringify(newMovie),
        headers : { "Content-type" : "application/json"},
    }).then (() => navigate("/portal/movielist"))
} ;



  return (
  <form className="addForm" onSubmit={formik.handleSubmit}>
    <h1>Add Movie</h1>
    <TextField 
    id="outlined-basic" 
    label="Movie Name" 
    variant="outlined" 
    value={formik.values.name}
    onChange={formik.handleChange}
    name="name"
    onBlur={formik.handleBlur}
    error={formik.touched.name && formik.errors.name}
    helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
    />
    <TextField 
        id="outlined-basic" 
        label="Movie Poster" 
        variant="outlined"
        value={formik.values.poster}
        onChange={formik.handleChange}
        name="poster" 
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}/>
    <TextField 
        id="outlined-basic" 
        label="Movie Trailer" 
        variant="outlined" 
        value={formik.values.trailer}
        onChange={formik.handleChange}
        name="trailer"
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}/>
    <TextField 
        id="outlined-basic" 
        label="Movie Rating" 
        variant="outlined" 
        value={formik.values.rating}
        onChange={formik.handleChange}
        name="rating" 
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}/>
    <TextField 
        id="outlined-basic" label="Movie Summary" variant="outlined" 
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary" 
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}/>

    <Button variant="text" type="submit">hit me</Button>
  </form>
  )
}

