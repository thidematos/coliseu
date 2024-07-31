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

export async function deleteProject(projectId) {
  await axios.delete(`/api/v1/projects/${projectId}`);

  return null;
}

export async function updateProject(projectId, updateForm) {
  await axios.patch(`/api/v1/projects/${projectId}`, updateForm, {
    withCredentials: true,
  });

  return null;
}
