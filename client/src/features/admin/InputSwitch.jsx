import { useState } from "react";

function InputSwitch({ defaultIsSerralheria }) {
  const [isSerralheria, setIsSerralheria] = useState(defaultIsSerralheria);

  return (
    <div className="flex flex-row items-center justify-center gap-5 font-garamond font-bold">
      <p
        className={`${isSerralheria ? "" : "rounded-sm bg-specialRed text-creme drop-shadow-2xl"} p-2 duration-200`}
      >
        Marmoraria
      </p>
      <label className="switch">
        <input
          type="checkbox"
          checked={isSerralheria}
          value={isSerralheria}
          name="isSerralheria"
          onChange={(e) => setIsSerralheria(e.target.checked)}
        />

        <span className="slider round"></span>
      </label>
      <input type="hidden" value={isSerralheria} name="isSerralheria" />
      <p
        className={`${isSerralheria ? "scale-105 rounded-sm bg-sky-700 text-stone-100 drop-shadow-2xl" : ""} p-2 duration-200`}
      >
        Serralheria
      </p>
    </div>
  );
}

export default InputSwitch;
