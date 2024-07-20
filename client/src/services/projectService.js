import axios from "axios";

const defaultUrl = "";

export async function getAllProjects() {
  const res = await axios.get("/api/v1/projects");

  return res.data.data.projects;
}

export async function createProject(formProject) {
  await axios.post("/api/v1/projects", formProject, { withCredentials: true });
}
