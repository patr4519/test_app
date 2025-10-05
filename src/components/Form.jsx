import { useState } from "react"
import { TextInput } from "./TextInput"
import { NumberInput } from "./NumberInput"

export const Form = () => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    secondName: '',
    age: 20,
  })

  console.log('formFields', formFields)

  const handleChange = (event) => {
    const {value, name} = event.target
    
    setFormFields((prev) => ({
        ...prev,
        [name]: value
    }))
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
        <TextInput value={formFields.firstName} handleChange={handleChange} name='firstName' label='First name: ' />
        <TextInput value={formFields.secondName} handleChange={handleChange} name='secondName' label='Second name: ' />
        <NumberInput value={formFields.age} handleChange={handleChange} name='age' label='Age: '/>
    </div>
  )
}
