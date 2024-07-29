import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { createProject } from "../../services/projectService";
import { toast, ToastContainer } from "react-toastify";
import InputText from "./InputText";
import InputSwitch from "./InputSwitch";
import InputImg from "./InputImg";

function NovoProjeto() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p
        className="text-center font-garamond text-xl uppercase drop-shadow-lg"
        onClick={() => toast("Wow so easy")}
      >
        Novo projeto
      </p>
      <ToastContainer
        autoClose={2000}
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
      <InputImg photoNumber={1} />
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

  [newFormData.photo1, newFormData.photo2, newFormData.photo3].forEach(
    (photo) => {
      if (!photo.name) return;

      form.append("photo", photo);
    },
  );

  console.log(Object.fromEntries(form));

  await toast.promise(createProject(form), {
    pending: "Postando...",
    success: "Postado com sucesso!",
    error: "Algo deu errado... Tente novamente.",
  });

  setTimeout(() => console.log("Waiting...", 2000));

  return redirect(`/admin/overview`);
}

export default NovoProjeto;
