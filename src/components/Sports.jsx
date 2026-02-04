import React from 'react'
import { Link } from 'react-router-dom'

export const Sports = () => {
    var teams=[{teamName:'CSK'},{teamName:'MI'},{teamName:'RCB'},{teamName:'PBKS'},{teamName:'KKR'},
        {teamName:'GT'},{teamName:'RR'},{teamName:'SRH'},{teamName:'DC'},{teamName:'LSG'}];
  return (
    <div style={{textAlign:'center'}}>
        <h1>Sports</h1>
        {
            teams.map((team)=>{
                return <li><Link to={`/play/${team.teamName}`}>{team.teamName}</Link></li>
            })
        }

    </div>
  )
}
