import React from 'react'

export const MapComponent3 = () => {

    var cities = [
    { id: 1, name: "Ahmedabad", pop: 8000000, AQI: 302 },
    { id: 2, name: "Delhi", pop: 10000000, AQI: 400 },
    { id: 3, name: "Dehradun", pop: 8000000, AQI: 150 },
  ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapComponent3</h1>
        <table border={2} align='center'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>AQI</th>
                    </tr>
                    {
                    cities.map((c)=>{
                        return (
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.pop}</td>
                                <td>{c.AQI}</td>
                            </tr>
                    
                        )
            })
               
        
        }
        </table>
    </div>
    
  )
}
