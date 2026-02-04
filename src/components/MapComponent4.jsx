import React from 'react'

export const MapComponent4 = () => {
      var students=[
        {id:1,name:"Kashish",marks:78,gender:"female",city:"Ahmedabad"},
        {id:2,name:"Ram",marks:60,gender:"male",city:"Surat"},
        {id:3,name:"Twinkle",marks:90,gender:"female",city:"Bhavnagar"},
        {id:4,name:"Shyam",marks:50,gender:"male",city:"Vadodara"},
        {id:5,name:"Krupanshi",marks:70,gender:"female",city:"Kutch"}
    ]
  return (
    <div>
        <h1 style={{textAlign:"center"}}>MapComponent4</h1>
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Gender</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
            {
                students.map((st)=>{
                    return <tr style={{backgroundColor:st.gender=="female" && "pink"}}>
                        <td>{st.id}</td>
                        <td>{st.name}</td>
                        <td style={{color:st.marks<=60 && "red"}}>{st.marks}</td>
                        <td>{st.gender}</td>
                        <td>{st.city}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
  )
}
