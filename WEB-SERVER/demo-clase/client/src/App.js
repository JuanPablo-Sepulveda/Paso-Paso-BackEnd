import {useEffect, useState} from "react"
import './App.css';

function App() {
  
  const [students,setStudents]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/students")
    .then(response=>response.json())
    .then((data)=>setStudents(data))
  },[])

  console.log(students)




  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de estudiantes</h1>
        {
          students.length && students.map(stud=>{
            return (
              <div key={stud.id}>
                <h3>{stud.name}</h3>

              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
