function InputText({ label, placeholder, idToLabel, defaultValue = null }) {
  return (
    <div className="flex w-[85%] flex-col items-start justify-center gap-1 font-garamond">
      <label
        htmlFor={idToLabel}
        className="text-xl font-bold tracking-wide text-specialRed drop-shadow lg:text-base"
      >
        {label}
      </label>
      <input
        id={idToLabel}
        placeholder={placeholder}
        name={idToLabel}
        className="w-full rounded-sm border border-gray-300 p-3 shadow outline-none placeholder:text-sm lg:text-sm lg:placeholder:text-xs"
        defaultValue={defaultValue || ""}
      />
    </div>
  );
}

export default InputText;
