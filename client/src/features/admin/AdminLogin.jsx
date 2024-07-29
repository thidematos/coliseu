import { Form, redirect, useNavigation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Loader from "../../ui/Loader";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { login } from "../../services/authServices";
import { toast, ToastContainer } from "react-toastify";

function AdminLogin() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 bg-creme">
      <AdminHeader useControls={false} />
      <MyForm />
      <ToastContainer position="bottom-center" theme="dark" />
    </section>
  );
}

function MyForm() {
  const { state } = useNavigation();

  const isSubmitting = state === "submitting";
  return (
    <Form
      method="POST"
      className="flex flex-col items-center justify-center gap-8 bg-stone-50 p-10 font-garamond shadow-xl"
    >
      <div className="flex flex-col items-start justify-center gap-2">
        <label className="text-xl font-bold text-specialRed drop-shadow-sm">
          Usuário
        </label>
        <input
          type="text"
          className="rounded-sm border border-gray-300 p-3 text-stone-700 shadow outline-none placeholder:text-gray-400"
          placeholder="Insira seu usuário"
          required
          name="email"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <label className="text-xl font-bold text-specialRed drop-shadow-sm">
          Senha
        </label>
        <input
          type="password"
          className="rounded-sm border border-gray-300 p-3 text-stone-700 shadow outline-none placeholder:text-gray-400"
          placeholder="*******"
          required
          name="password"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${isSubmitting ? "bg-gray-300" : "bg-creme tracking-wide"} flex w-[60%] flex-row items-center justify-center rounded-sm bg-creme p-3 text-2xl font-bold text-specialRed shadow-lg`}
      >
        {isSubmitting ? <LoaderSpinner /> : "Acessar"}
      </button>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const credentials = Object.fromEntries(formData);

  await toast.promise(login(credentials), {
    pending: "Acessando...",
  });

  return redirect("/admin/overview");
}

export default AdminLogin;
