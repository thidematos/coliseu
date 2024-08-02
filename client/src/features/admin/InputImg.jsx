import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  createPhotoPreview,
  photosSelector,
  removePhotoBlob,
  singlePhotoSelector,
} from "./adminSlice";
import { createImageBlob } from "../../utils/handleImageBlob";
import { useEffect } from "react";

function InputImg({ currentPhotoIndex }) {
  const photo = useSelector(singlePhotoSelector(currentPhotoIndex));
  const dispatch = useDispatch();

  return (
    <div className="w-full space-y-2 lg:w-[60%]">
      <p className="font-garamond text-xl font-bold tracking-wide text-specialRed drop-shadow lg:text-base">
        Foto{" "}
        {photo.id + 1 === 1 ? (
          ""
        ) : (
          <span className="text-base font-normal">
            {photo.id + 1} (opcional)
          </span>
        )}
      </p>
      <label
        htmlFor={photo.id + 1}
        className={`relative flex ${photo.blob ? "max-h-[200px]" : "h-[200px]"} w-full flex-col items-center justify-center overflow-hidden border border-dashed border-gray-400 text-sm text-stone-400`}
      >
        {photo.blob ? (
          <>
            <img src={photo.blob} className="top-0 w-full" />
            <FontAwesomeIcon
              icon={faTrash}
              className="drop-shadow-3xl absolute right-3 top-3 rounded-full bg-stone-50 p-3 text-xl text-specialRed"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removePhotoBlob(photo.id));
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
        id={photo.id + 1}
        name={`photo${photo.id + 1}`}
        onChange={(e) =>
          dispatch(
            createPhotoPreview({
              selectedPhoto: photo.id,
              blob: createImageBlob(e.target.files[0]),
            }),
          )
        }
      />
    </div>
  );
}

export default InputImg;
