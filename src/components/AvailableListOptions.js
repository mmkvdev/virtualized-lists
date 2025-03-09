const AvailableListOptions = ({ option, updateOption }) => {
  const renderRadioOption = (value, label, checked) => (
    <div>
      <label>
        <input
          value={value}
          type="radio"
          checked={checked}
          onChange={(e) => updateOption(e.target.value)}
        />
        {label}
      </label>
    </div>
  );
  return (
    <div>
      {renderRadioOption("0", "Normal List", option === "0")}
      {renderRadioOption("1", "Virtualized List", option === "1")}
    </div>
  );
};

export default AvailableListOptions;
