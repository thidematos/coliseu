import axios from "axios";

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
    throw err;
  }
}
