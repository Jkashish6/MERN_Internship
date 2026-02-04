import React from 'react'

export default function ContentComponent() {
    var year=2026;
    var title="React Js";
    var isavailable=true;

    var student={
        name:"Kashish",
        age:23,
        city:"Ahmedabad"
    };

  return (
    <div style={{border:"solid 1px black",width:"700px",height:"auto"}}>
      <h2>Year:{year}</h2>
      <h2>Title:{title}</h2>
      <h2>Isavailable????{isavailable==true ? "True": "False"}</h2>
      <h1>My Info:</h1>
      <h2>Name: {student.name}</h2>
      <h2>Age{student.age}</h2>
      <h2>City:{student.city}</h2>
    </div>
  )
}
