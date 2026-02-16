import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loader,setLoader]=useState(true)

    const stopLoader=()=>{
        setLoader(false)
    }
    const startLoader=()=>{
        setLoader(true)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>UseStateDemo2</h1>
        {
            loader==true && <h1>Loading....</h1>
        }
        {
            loader==false && <h1>Loading stopped</h1>
        }
        <button onClick={stopLoader}>STOP</button> &nbsp;&nbsp;&nbsp;
        <button onClick={startLoader}>START</button>
    </div>
  )
}
