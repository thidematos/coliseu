import axios from "axios";
import { toast } from "react-toastify";

export async function authUser() {
  try {
    const user = await axios.get("/api/v1/authentication", {
      withCredentials: true,
    });

    return user.data.data.user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function login(credentials) {
  try {
    const res = await axios.post("/api/v1/authentication/login", credentials, {
      withCredentials: true,
    });

    return res.data.data.user;
  } catch (err) {
    console.log(err);
    toast.error("Usuário ou senha incorretos!");
    return err;
  }
}

export async function logoutHandler() {
  await axios.get("/api/v1/authentication/logout", {
    withCredentials: true,
  });
}
