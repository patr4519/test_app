export const NumberInput = ({
  name,
  value,
  handleChange,
  label,
  min = 1,
  max = 500,
  allowFloat = false,
  allowZero = true,
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
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={handleLocalChange}
        inputMode="decimal"
        style={{
          border: isOutOfRange ? "2px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          padding: "4px 8px",
          outline: "none",
        }}
      />
      {isOutOfRange && (
        <span style={{ color: "red", fontSize: "12px" }}>
          Значение должно быть между {min} и {max}
        </span>
      )}
    </div>
  );
};
