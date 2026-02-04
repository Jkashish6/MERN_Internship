import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
    var movies=[
        {movieID:1,movieName:"Me Before You"},
        {movieID:2,movieName:"Dil Dhadakne Do"},,
        {movieID:3,movieName:"Kal Ho Na Ho"},,
        {movieID:4,movieName:"Mohbattein"},
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>Netflix Movies</h1>
        {
            movies.map((movie)=>{
                return <li><Link to ={`/watch/${movie.movieName}`}>{movie.movieName}</Link></li>
            })
        }

    </div>
  )
}
