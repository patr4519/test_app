import { useState } from "react"

export const Form = () => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    secondName: '',
    age: '',
  })

  const handleChange = (event) => {
    const {value, name} = event.target
    
    setFormFields((prev) => ({
        ...prev,
        [name]: value
    }))
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
        <label htmlFor='firstName'>First name:</label>
        <input type="text" name='firstName' value={formFields.firstName} onChange={handleChange}/>

        <label htmlFor='secondName'>Second name:</label>
        <input type="text" name='secondName' value={formFields.secondName} onChange={handleChange}/>

        <label htmlFor='age'>Age:</label>
        <input type="number" name='age' value={formFields.age} onChange={handleChange}/>
    </div>
  )
}
