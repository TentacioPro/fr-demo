import React from 'react'
import { Link } from 'react-router-dom';
import gif from "./404.gif";

export default function 
NotFound() {
  return (
    <div className="notFound">
        <h2><Link to="/portal/home">Back to HomePage</Link></h2>
        <img src={gif}/>
    </div>
  )
}
