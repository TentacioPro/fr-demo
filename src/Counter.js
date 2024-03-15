import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import Badge from '@mui/material/Badge';

export default function Counter() {
    let[like, setLike] = useState(0);
    let[disLike, setDisLike] = useState(0);
    const increamentLike = () => setLike(like + 1);
    const decreamentLike = () => setDisLike(disLike + 1);
  
    return (
    <div>
        <IconButton aria-label='Like' color="primary" onClick={increamentLike}>
        <Badge badgeContent={like} color="primary">
        👍
        </Badge>
         
        </IconButton>
        <IconButton aria-label='Dislike' color="primary" onClick={decreamentLike}>
        <Badge badgeContent={disLike} color="error">
             👎
        </Badge>
        </IconButton>


    </div>
  )
}
