import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import * as yup from "yup";
import {useFormik} from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditMovie() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [show, setShow] = useState(false);

    useEffect ( () => {
        fetch(`https://65f16b8f034bdbecc7627180.mockapi.io/movie/${id}`, {method:"GET"})
        .then((data) => data.json())
        .then((mv) => setMovie(mv))
        .then(() =>setShow(true))
    },[]);
    console.log(movie);
 
 
    return (
    <div>
        { movie ? <EditForm movie={movie} /> : "Loading....."}

    </div>
  )
    }
  function EditForm({movie}) {
    const [newMovie, setnewMovie] = useState([]);
    const navigate = useNavigate();
    const movieValidationSchema = yup.object({
        name : yup.string().required(),
        poster: yup.string().required().min(10).url(),
        trailer: yup.string().required().min(10).url(),
        rating: yup.number().required().min(0).max(10),
        summary: yup.string().required().min(50),
    })
    
    const formik = useFormik({
    initialValues:{
        name:movie.name,
        poster:movie.poster,
        trailer:movie.trailer,
        rating:movie.rating,
        summary:movie.summary,
    },
    validationSchema: movieValidationSchema,
    onSubmit : (newMovie) => {
     
        console.log(newMovie);
        editMovie(newMovie);
    }
    });

    const editMovie = (newMovie) => {
        fetch(`https://65f16b8f034bdbecc7627180.mockapi.io/movie/${movie.id}`,{
        method: 'PUT',
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
    )};
