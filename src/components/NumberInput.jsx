export const NumberInput = ({name, value, handleChange, label}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type="number" name={name} value={value} onChange={handleChange}/>
    </div>
  )
}
