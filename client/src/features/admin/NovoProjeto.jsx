import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { createProject } from "../../services/projectService";

function NovoProjeto() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-center font-garamond text-xl uppercase drop-shadow-lg">
        Novo projeto
      </p>
      <MyForm />
    </div>
  );
}

function MyForm() {
  const { state } = useNavigation();

  const isSubmitting = state === "submitting";

  return (
    <Form
      method="POST"
      encType="multipart/form-data"
      className="flex w-[85%] flex-col items-center justify-center gap-8 bg-stone-50 p-8"
    >
      <InputText
        label={"Projeto"}
        placeholder={"Bancada, pia, portão..."}
        idToLabel={"projeto"}
      />
      <InputText
        label={"Material"}
        placeholder={"Alumínio, Granito Preto Escovado..."}
        idToLabel={"material"}
      />
      <InputImg />
      <InputSwitch />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-sm bg-creme px-8 py-3 font-garamond text-xl font-bold text-specialRed shadow-lg"
      >
        {isSubmitting ? <LoaderSpinner /> : "Criar"}
      </button>
    </Form>
  );
}

function InputText({ label, placeholder, idToLabel }) {
  return (
    <div className="flex w-[85%] flex-col items-start justify-center gap-1 font-garamond">
      <label
        htmlFor={idToLabel}
        className="text-xl font-bold tracking-wide text-specialRed drop-shadow"
      >
        {label}
      </label>
      <input
        id={idToLabel}
        placeholder={placeholder}
        name={idToLabel}
        className="w-full rounded-sm border border-gray-300 p-3 shadow outline-none placeholder:text-sm"
      />
    </div>
  );
}

function InputSwitch() {
  const [isSerralheria, setIsSerralheria] = useState(false);

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

function InputImg({ label }) {
  const [images, setImages] = useState(() =>
    Array.from({ length: 3 }, (el, ind) => {
      return {
        id: ind + 1,
        blob: null,
      };
    }),
  );

  return (
    <>
      {images.map((images) => (
        <div className="w-full space-y-2" key={images.id}>
          <p className="font-garamond text-xl font-bold tracking-wide text-specialRed drop-shadow">
            Foto {images.id}{" "}
            {images.id > 1 && (
              <span className="text-base font-normal">(opcional)</span>
            )}
          </p>
          <label
            htmlFor={images.id}
            className={`relative flex ${images.blob ? "max-h-[200px]" : "h-[200px]"} w-full flex-col items-center justify-center overflow-hidden border border-dashed border-gray-400 text-sm text-stone-400`}
          >
            {images.blob ? (
              <>
                <img src={images.blob} className="top-0 w-full" />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="drop-shadow-3xl absolute right-3 top-3 rounded-full bg-stone-50 p-3 text-xl text-specialRed"
                  onClick={(e) => {
                    e.preventDefault();
                    setImages((state) =>
                      state.map((el) => {
                        if (el.id !== images.id) return el;

                        window.URL.revokeObjectURL(el.blob);

                        return {
                          ...el,
                          blob: null,
                        };
                      }),
                    );
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
            id={images.id}
            name={`photo${images.id}`}
            onChange={(e) => {
              if (!e.target.files[0]) return;

              const blob = window.URL.createObjectURL(e.target.files[0]);

              setImages((state) =>
                state.map((el) => {
                  if (el.id !== images.id) return el;

                  window.URL.revokeObjectURL(el.blob);

                  return {
                    ...el,
                    blob: blob,
                  };
                }),
              );
            }}
          />
        </div>
      ))}
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const newFormData = Object.fromEntries(formData);

  const form = new FormData();
  form.append("title", newFormData.projeto);
  form.append("material", newFormData.material);
  form.append(
    "isMarmoraria",
    newFormData.isSerralheria === "true" ? false : true,
  );

  [newFormData.photo1, newFormData.photo2, newFormData.photo3].forEach(
    (photo) => {
      if (!photo.name) return;

      form.append("photo", photo);
    },
  );

  console.log(Object.fromEntries(form));

  await createProject(form);

  return redirect(`/admin/overview`);
}

export default NovoProjeto;
