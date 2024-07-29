import axios from "axios";

const defaultUrl = "";

export async function getAllProjects() {
  const res = await axios.get("/api/v1/projects");

  return res.data.data.projects;
}

export async function createProject(formProject) {
  await axios.post("/api/v1/projects", formProject, { withCredentials: true });
}

export async function getProject(projectId) {
  const res = await axios.get(`/api/v1/projects/${projectId}`);

  return res.data.data.project;
}
