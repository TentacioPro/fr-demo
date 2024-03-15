import React, { useState } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';
import Movielist from './MovieList';
import { Paper } from '@mui/material';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';


function App() {
  
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    
      <div className='App'>
        <ThemeProvider theme={darkTheme}>
          <Paper style={{minHeight:'100vh' , borderRadius:'0%'}} elevation={9}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/portal" element={<Portal mode={mode} setMode={setMode} />}>
          <Route path="addmovie" element={<AddMovie/>}/>
          <Route path="home" element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movielist" element={<Movielist />} />
          <Route path="view/:id" element={<MovieDetail />} />
          <Route path="edit/:id" element={<EditMovie />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Paper>
      </ThemeProvider>
      </div>
  );
}

export default App;
