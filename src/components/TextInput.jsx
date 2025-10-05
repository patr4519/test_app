export const TextInput = ({name, value, handleChange, label}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} value={value} onChange={handleChange}/>
    </div>
  )
}
