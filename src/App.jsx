import Form from "./Components/Form"
import Header from "./Components/Header"
import ListPatients from "./Components/ListPatients"
import { useState, useEffect } from "react"

function App() {
  const initial = JSON.parse(localStorage.getItem('pacientes'))?? []
  const [pacientes, setPacientes] = useState(initial)
  const [paciente, setPaciente] = useState({})


  //// corregir el siguiente useEfect con la ayuda creada en el comentario del ejercicio 89
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
      setPacientes(pacientesActualizados)
  }


  return (
    <div className="container mx-auto mt-20 ">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
        <ListPatients
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    
    </div>
  )
}

export default App
