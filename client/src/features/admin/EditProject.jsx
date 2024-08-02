import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import {
  deleteProject,
  getProject,
  updateProject,
} from "../../services/projectService";
import InputText from "./InputText";
import InputImg from "./InputImg";
import InputSwitch from "./InputSwitch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addNewPhoto,
  clearPhotos,
  createPhotoPreview,
  photosSelector,
  toggleModal,
} from "./adminSlice";
import AddNewPhoto from "./AddNewPhoto";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

function EditProject() {
  const project = useLoaderData();

  const [reselectPhotos, setReselectPhotos] = useState(false);

  const dispatch = useDispatch();

  const photos = useSelector(photosSelector);

  const { state } = useNavigation();

  const isSubmitting = state === "submitting";

  useEffect(() => {
    dispatch(clearPhotos());

    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  }, [dispatch, project.photos]);

  return (
    <div className="space-y-6 px-8 md:px-[10%]">
      <ToastContainer
        autoClose={1500}
        position="bottom-center"
        className={"font-montserrat"}
      />
      <p className="text-center font-garamond text-xl uppercase drop-shadow-lg">
        Editar Projeto
      </p>
      <Form
        method="PATCH"
        encType="multipart/form-data"
        className="relative flex flex-col items-center justify-center gap-8 bg-stone-50 p-8"
      >
        <InputText
          label={"Projeto"}
          placeholder={"Bancada, pia, portão..."}
          idToLabel={"projeto"}
          defaultValue={project.title}
        />
        <InputText
          label={"Material"}
          placeholder={"Alumínio, Granito Preto Escovado..."}
          idToLabel={"material"}
          defaultValue={project.material}
        />
        {reselectPhotos ? (
          photos.map((photo) => (
            <InputImg key={photo.id} currentPhotoIndex={photo.id} />
          ))
        ) : (
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <p className="text-center text-xs">
              Clique no botão abaixo apenas se quiser selecionar novas fotos
              para o projeto.
            </p>
            <button
              className="uppercase text-sky-700 underline underline-offset-2 lg:text-sm"
              onClick={() => setReselectPhotos(true)}
            >
              Novas fotos
            </button>
          </div>
        )}

        {reselectPhotos && photos.at(-1).blob && (
          <AddNewPhoto handler={() => dispatch(addNewPhoto())} />
        )}

        <InputSwitch defaultIsSerralheria={!project.isMarmoraria} />

        <input type="hidden" value={reselectPhotos} name="newPhotos" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-sm bg-creme px-8 py-3 font-garamond text-xl font-bold text-specialRed shadow-lg lg:px-6 lg:py-2 lg:text-lg"
        >
          {isSubmitting ? <LoaderSpinner /> : "Atualizar"}
        </button>
      </Form>
      <div className="flex w-full flex-row items-center justify-center gap-3">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-2xl text-red-500 drop-shadow-lg lg:text-lg"
        />
        <button
          className="text-lg uppercase text-red-500 underline underline-offset-2 drop-shadow-sm lg:text-sm"
          onClick={() => dispatch(toggleModal(true))}
        >
          Excluir projeto
        </button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const project = await getProject(params.projectId);

  return project;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const newFormData = Object.fromEntries(formData);

  const form = new FormData();
  form.append("title", newFormData.projeto);
  form.append("material", newFormData.material);
  form.append(
    "isMarmoraria",
    newFormData.isSerralheria === "true" ? false : true,
  );

  if (newFormData.newPhotos === "true") {
    const photosInputs = Object.entries(newFormData).filter((el) =>
      el.at(0).startsWith("photo"),
    );

    photosInputs.forEach((input) => {
      form.append("photo", input.at(-1));
    });
  }

  await updateProject(params.projectId, form);

  return redirect("/admin/overview");
}

export default EditProject;
