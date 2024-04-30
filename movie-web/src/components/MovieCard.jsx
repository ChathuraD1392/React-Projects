import React from 'react'
import placeholder from "../assets/placeholder.jpeg";
import './Card.css'

const MovieCard = ({movie}) => {
    
  return (
    <div className='col-md-4'>
    <div className="card">
    <img src={movie.Poster!=='N/A' ? movie.Poster : placeholder} alt="movie poster" className="card-img-top" />
    <h2 className="card-header">{movie.Title}</h2>
    <div className="card-body">
      <p className="h3">{movie.Type}</p>
    </div>
    <div className="card-footer">{movie.Year}</div>
  </div>
  </div>
  )
}

export default MovieCard