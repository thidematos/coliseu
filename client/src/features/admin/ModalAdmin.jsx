import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  isAsyncHandlerLoadingSelector,
  toggleAsyncHandlerState,
  toggleModal,
} from "./adminSlice";
import { toast } from "react-toastify";
import { deleteProject } from "../../services/projectService";
import { redirect, useNavigate, useParams } from "react-router-dom";

function Modal() {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const isAsyncLoading = useSelector(isAsyncHandlerLoadingSelector);

  useEffect(() => {
    document.body.style.height = "100dvh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style = "";
    };
  }, []);

  function handler() {
    dispatch(toggleModal(false));
  }

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[9990] h-full w-dvw bg-gray-900/80"
        onClick={handler}
      ></div>
      <div className="center showModal fixed z-[9991] w-[85%] rounded-lg border-2 border-specialRed md:w-[60%] lg:w-[40%] xl:w-[30%]">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-3 top-3 text-4xl text-stone-300 lg:text-2xl"
          onClick={handler}
        />

        <div className="flex flex-col items-center justify-center gap-8 bg-stone-100 p-8 text-center">
          <p className="text-xl">Deseja mesmo excluir esse projeto?</p>
          <div className="flex w-full flex-row justify-around">
            <button
              className="rounded-sm border border-sky-500 bg-serralheria px-4 py-2 font-garamond text-xl font-bold uppercase text-sky-700 shadow-xl"
              disabled={isAsyncLoading}
              onClick={async () => {
                dispatch(toggleAsyncHandlerState(true));

                await toast.promise(deleteProject(projectId), {
                  pending: "Deletando projeto...",
                  error: "Erro! Tente novamente.",
                  success: "Projeto deletado!",
                });

                setTimeout(() => {
                  dispatch(toggleModal(false));
                  dispatch(toggleAsyncHandlerState(false));
                  navigate("/admin/overview");
                }, 1500);
              }}
            >
              Sim
            </button>
            <button
              className="rounded-sm border border-specialRed bg-creme p-3 font-garamond text-xl font-bold uppercase text-specialRed shadow-xl"
              disabled={isAsyncLoading}
              onClick={handler}
            >
              Não
            </button>
          </div>
          <p>Essa ação não pode ser desfeita.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
