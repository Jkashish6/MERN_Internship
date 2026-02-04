import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Netflix Shows</h1>
        <li><Link to="/watch/Mordern family">Mordern Family</Link></li>
        <li><Link to="/watch/The office">The Office</Link></li>
        <li><Link to="/watch/The bridgerton">The Bridgerton</Link></li>
        <li><Link to="/watch/Schitt's creek">Schitt's Creek</Link></li>
    </div>
  )
}
