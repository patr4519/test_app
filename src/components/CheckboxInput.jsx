export const CheckboxInput = ({ name, checked, handleChange, label }) => {
  return (
    <div className="input input--checkbox">
      <label htmlFor={name} className="input__label">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={handleChange}
          className="input__checkbox"
        />
        {label}
      </label>
    </div>
  )
}
