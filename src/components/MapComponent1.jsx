import React from 'react'

export const MapComponent1 = () => {

    let cars=["audi","bmw","abcd","pqr"]
  return (
    <div>
        <h1>MapComponent1</h1>
    {
        cars.map((c)=>{
            return <h1>{c}</h1>
        })
    }
    </div>
  )
}
