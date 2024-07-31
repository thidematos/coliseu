import { useEffect, useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { createProject } from "../../services/projectService";
import { toast, ToastContainer } from "react-toastify";
import InputText from "./InputText";
import InputSwitch from "./InputSwitch";
import InputImg from "./InputImg";
import AddNewPhoto from "./AddNewPhoto";
import { useDispatch, useSelector } from "react-redux";
import { addNewPhoto, clearPhotos, photosSelector } from "./adminSlice";

function NovoProjeto() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPhotos());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-center font-garamond text-xl uppercase drop-shadow-lg">
        Novo projeto
      </p>
      <ToastContainer
        autoClose={1500}
        position="bottom-center"
        className={"font-montserrat"}
      />
      <MyForm />
    </div>
  );
}

function MyForm() {
  const { state } = useNavigation();

  const isSubmitting = state === "submitting";

  const photos = useSelector(photosSelector);

  const dispatch = useDispatch();

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
      {photos.map((photo) => (
        <InputImg currentPhotoIndex={photo.id} key={photo.id} />
      ))}

      {photos.at(-1).blob && (
        <AddNewPhoto handler={() => dispatch(addNewPhoto())} />
      )}

      <input type="hidden" name="numPhotos" value={photos.length} />
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

  console.log("executou");

  for (let i = 0; i <= Number(newFormData.numPhotos); i++) {
    if (newFormData[`photo${i}`] && newFormData[`photo${i}`].name) {
      form.append("photo", newFormData[`photo${i}`]);
    }
  }

  await toast.promise(createProject(form), {
    pending: "Postando...",
    success: "Postado com sucesso!",
    error: "Algo deu errado... Tente novamente.",
  });

  setTimeout(() => {
    console.log("Waiting...");
  }, 1500);

  return redirect(`/admin/overview`);
}

export default NovoProjeto;
