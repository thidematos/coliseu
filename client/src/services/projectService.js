import axios from "axios";

const defaultUrl = "";

export async function getAllProjects() {
  //const res = await axios.get("/api/v1/projects");

  const projects = [
    {
      _id: "66ad3d7ecfb17f0a1671ed4d",
      photos: ["photo-1722629502109-0.jpg"],
      user: "669a949e11269717a4d8c0d8",
      title: "Bancada",
      material: "Granito Preto Escovado",
      isMarmoraria: true,
      createdAt: new Date(1722629502125),
      __v: "0",
    },
    {
      _id: "66a9c1eba86159af73ece42a",
      photos: ["photo-1722401259608-0.jpg"],
      user: "669a949e11269717a4d8c0d8",
      title: "Bancada e kit pia",
      material: "Granito Branco Pitaya",
      isMarmoraria: true,
      createdAt: new Date(1722401259632),
      __v: "0",
    },
    {
      _id: "669b0b14eb25d4a4d9a3c73c",
      photos: ["photo-1721436948817-0.jpg"],
      user: "669a949e11269717a4d8c0d8",
      title: "Pergolado policarbonato",
      material: "Alumínio Preto",
      isMarmoraria: false,
      createdAt: new Date(1721436948865),
      __v: "0",
    },
    {
      _id: "669b0aeceb25d4a4d9a3c736",
      photos: ["photo-1722405319473-0.jpg"],
      user: "669a949e11269717a4d8c0d8",
      title: "Portão",
      material: "Alumínio Preto",
      isMarmoraria: false,
      createdAt: new Date(1721436908130),
      __v: "2",
    },
  ];

  return projects;
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
