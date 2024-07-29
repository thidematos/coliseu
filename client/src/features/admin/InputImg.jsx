import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function InputImg({ photoNumber }) {
  const [image, setImage] = useState({ blob: null });

  return (
    <div className="w-full space-y-2">
      <p className="font-garamond text-xl font-bold tracking-wide text-specialRed drop-shadow">
        Foto
        {photoNumber > 1 && (
          <span className="text-base font-normal">(opcional)</span>
        )}
      </p>
      <label
        htmlFor={photoNumber}
        className={`relative flex ${image.blob ? "max-h-[200px]" : "h-[200px]"} w-full flex-col items-center justify-center overflow-hidden border border-dashed border-gray-400 text-sm text-stone-400`}
      >
        {image.blob ? (
          <>
            <img src={image.blob} className="top-0 w-full" />
            <FontAwesomeIcon
              icon={faTrash}
              className="drop-shadow-3xl absolute right-3 top-3 rounded-full bg-stone-50 p-3 text-xl text-specialRed"
              onClick={(e) => {
                e.preventDefault();
                setImage((state) => {
                  window.URL.revokeObjectURL(state.blob);

                  return {
                    blob: null,
                  };
                });
              }}
            />
          </>
        ) : (
          <span>Clique para selecionar uma foto!</span>
        )}
      </label>
      <input
        type="file"
        className="hidden"
        id={photoNumber}
        name={`photo${photoNumber}`}
        onChange={(e) => {
          if (!e.target.files[0]) return;

          const blob = window.URL.createObjectURL(e.target.files[0]);

          setImage((state) => {
            window.URL.revokeObjectURL(state.blob);

            return {
              blob: blob,
            };
          });
        }}
      />
    </div>
  );
}

export default InputImg;
