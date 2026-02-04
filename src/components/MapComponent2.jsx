import React from 'react'

export const MapComponent2 = () => {
    var students=[
        {id:1,name:"Kashish",marks:78,gender:"female",city:"Ahmedabad"},
        {id:2,name:"Ram",marks:60,gender:"male",city:"Surat"},
        {id:3,name:"Twinkle",marks:90,gender:"female",city:"Bhavnagar"},
        {id:4,name:"Shyam",marks:50,gender:"male",city:"Vadodara"},
        {id:5,name:"Krupanshi",marks:70,gender:"female",city:"Kutch"}
    ]
  return (

    <div>
        <h1>MapComponent2</h1>
        {
            students.map((st)=>{
                return <li><ul>{st.id}-{st.name}-{st.marks}-{st.gender}-{st.city}</ul></li>
            })
        }
    </div>
  )
}
