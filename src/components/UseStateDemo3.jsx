import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const[users,setUsers]=useState(['parth','raj'])//array

    const addUsers=()=>{
        setUsers([...users,"abc"])
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>UseStateDemo3</h1>
        {
             users.map((u) => {
                return <li>{u}</li>
        })
        }
        <button onClick={addUsers}>Push</button>
       
    </div>

  )
}
