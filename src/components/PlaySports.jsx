import React from 'react'
import { useParams } from 'react-router-dom'

export const PlaySports = () => {
    const sportsName= useParams().name;
  return (
    <div style={{textAlign:'center'}}><h1>Playing {sportsName}</h1></div>
  )
}
