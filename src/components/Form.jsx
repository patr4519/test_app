import { useState } from "react"
import { TextInput } from "./TextInput"
import { NumberInput } from "./NumberInput"

export const Form = () => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    secondName: '',
    age: 20,
  })


  const handleChange = (event) => {
    const {value, name} = event.target
    
    setFormFields((prev) => ({
        ...prev,
        [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log(formFields)
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
        <TextInput value={formFields.firstName} handleChange={handleChange} name='firstName' label='First name: ' />
        <TextInput value={formFields.secondName} handleChange={handleChange} name='secondName' label='Second name: ' />
        <NumberInput value={formFields.age} handleChange={handleChange} name='age' label='Age: ' required/>
        <button type="submit">Submit</button>
    </form>
  )
}
