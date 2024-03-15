// import vikram from "./Vikram.jpeg"
// import Button from '@mui/material/Button';
import React, { useState } from 'react'
import Counter from './Counter'
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Movie({movieTake,getMovies}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const deleteMovie = (id) => {
    // console.log(id);
    fetch(`https://65f16b8f034bdbecc7627180.mockapi.io/movie/${id}`, {
      method:"DELETE",
    })
    .then(()=> getMovies())
    .then(() => alert("this card gets deleted now."))
  };


  return (
    <Card className='movie-container' sx={{ maxWidth: 345 }}>
        <CardMedia className="movie-poster" height="140" alt="VIKRAM" image={movieTake.poster}/> 
        <CardContent className="movie-spec">
            <Typography gutterBottom variant="h5" component="div"> {movieTake.name} </Typography>
            <CardActions>
              <IconButton color="primary" aria-label="Toggle-Description" onClick={() => setShow(!show)}>
                 {show ? <ExpandLessIcon font-size="large" /> : <ExpandMoreIcon font-size="large" />} 
               </IconButton>
               <IconButton color="primary" aria-label="Movie-Info" onClick={() => navigate(`/portal/view/${movieTake.id}`)} >
                  <InfoIcon font-size="medium"/>
               </IconButton>
            </CardActions>
            <h3 className="movie-rating">⭐{movieTake.rating}</h3>

        </CardContent>

        
        {show ? <p className="movie-summary">{movieTake.summary}</p> :null}
        <CardActions>
        <Counter />
        <IconButton sx={{marginLeft:"auto"}} aria-label="editMovie" onClick={()=> navigate(`/portal/edit/${movieTake.id}`)}>
          <EditIcon color="secondary"/>
        </IconButton>
        <IconButton sx={{marginLeft:"auto"}} aria-label="deleteMovie" onClick={()=> deleteMovie(movieTake.id)}>
          <DeleteForeverIcon color="secondary"/>
        </IconButton>
        </CardActions>
    </Card>
  )
}


// import * as React from 'react';


// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }