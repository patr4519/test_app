export const TextInput = ({name, value, handleChange, label}) => {
  return (
    <div className="input">
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} value={value} onChange={handleChange} className='input__field'/>
    </div>
  )
}
