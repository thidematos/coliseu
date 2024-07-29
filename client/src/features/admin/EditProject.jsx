import { Form, useLoaderData, useParams } from "react-router-dom";
import { getProject } from "../../services/projectService";
import InputText from "./InputText";
import InputImg from "./InputImg";
import InputSwitch from "./InputSwitch";

function EditProject() {
  const project = useLoaderData();

  return (
    <div className="px-8">
      <Form
        method="PATCH"
        encType="multipart/form-data"
        className="flex flex-col items-center justify-center gap-8 bg-stone-50 p-8"
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
        <InputImg defaultArrayImg={project.photos} />
        <InputSwitch defaultIsSerralheria={!project.isMarmoraria} />
      </Form>
    </div>
  );
}

export async function loader({ params }) {
  const project = await getProject(params.projectId);

  return project;
}

export default EditProject;
