export const NumberInput = ({
  name,
  value,
  handleChange,
  label,
  min = 1,
  max = 500,
  allowFloat = false,
  allowZero = true,
  disabled = false,
  required = false, 
}) => {
  const handleLocalChange = (event) => {
    const newValue = event.target.value;

    const regex = allowFloat ? /^-?\d*\.?\d*$/ : /^-?\d*$/;
    if (!regex.test(newValue) && newValue !== "") return;

    const numericValue = parseFloat(newValue);
    if (!allowZero && numericValue === 0) return;

    handleChange({
      target: {
        name,
        value: newValue,
      },
    });
  };

  const numericValue = parseFloat(value);
  const isOutOfRange =
    !isNaN(numericValue) && (numericValue < min || numericValue > max);

  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={handleLocalChange}
        inputMode="decimal"
        disabled={disabled}
        required={required}
        className={`input__field ${
          isOutOfRange ? "input__field--error" : ""
        }`}
      />
      {isOutOfRange && (
        <span className="input__error">
          Значение должно быть между {min} и {max}
        </span>
      )}
    </div>
  );
};
