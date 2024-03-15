import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Topbar({mode, setMode}) {

  const navigate = useNavigate()



  return (
      <div>
      <AppBar position="static">
        <Toolbar>
        <Button variant="outlined" color="inherit" onClick={() => navigate("/portal/addmovie")}>Add Movie</Button>
          <Button variant="outlined" color="inherit" onClick={() => navigate("/portal/movielist")}>Movies</Button>
          <Button style={{marginLeft: "60%"}}  
             color="inherit" 
             startIcon={mode === "light" ? <Brightness4Icon/> : <Brightness7Icon/>} 
             onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? "dark" : "light"}Mode
          </Button>
          <Button variant="outlined" color="inherit" onClick={() => navigate("/portal/home")}>Home</Button>
        
        </Toolbar>
      </AppBar>
      </div>
  );
}