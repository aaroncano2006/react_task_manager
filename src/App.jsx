import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import Select from "./components/Select";
import Textarea from "./components/Textarea";
import RadioGroup from "./components/RadioGroup";
import Card from "./components/Card";
import Form from "./components/Form";
import Input from "./components/Input";

const faker = [
  {
    id: 1,
    nom: "Estudiar React",
    categoria: "Estudis",
    dueDate: "2025-12-20",
    prioritat: "Alta",
    important: true,
    descripcio: "Repasar components, props i hooks",
  },
  {
    id: 2,
    nom: "Fer pràctica Laravel",
    categoria: "DAW",
    dueDate: "2025-12-22",
    prioritat: "Mitjana",
    important: false,
    descripcio: "CRUD amb relacions many-to-many",
  },
  {
    id: 3,
    nom: "Netejar l'habitació",
    categoria: "Personal",
    dueDate: "2025-12-18",
    prioritat: "Baixa",
    important: false,
    descripcio: "Ordenar escriptori i prestatgeries",
  },
];

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-4">
          <h1>Task manager</h1>
        </div>

        <Card headerText="Crear tasca">
          <Form>
            <div className="row mb-4">
              <div className="col-3">
                <Input
                  type="text"
                  name="taskName"
                  id="taskName"
                  bootstrap="form-control"
                >
                  Nom de la tasca
                </Input>
              </div>
            </div>

            <Button bootstrap="btn btn-primary" type="submit">
              Afegir tasca
            </Button>
          </Form>
        </Card>

        <div className="row-3 mb-4">
          <Button bootstrap="btn btn-primary">
            <i className="fa-solid fa-circle-plus"></i> Crear tasca
          </Button>
        </div>

        <div className="row-3">
          <table className="table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Categoria</th>
                <th>Due date</th>
                <th>Prioritat</th>
                <th>És important?</th>
                <th>Descripció</th>
                <th>Accions</th>
              </tr>
            </thead>
            <tbody>
              {faker.map((tasca) => (
                <tr key={tasca.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="p-4">{tasca.nom}</td>
                  <td className="p-4">{tasca.categoria}</td>
                  <td className="p-4">{tasca.dueDate}</td>
                  <td className="p-4">{tasca.prioritat}</td>
                  <td className="p-4">{tasca.important ? "Sí" : "No"}</td>
                  <td className="p-4">{tasca.descripcio}</td>
                  <td className="p-4">
                    <Button bootstrap="btn btn-sm btn-warning me-2">
                      <i className="fa-solid fa-pen"></i>
                    </Button>
                    <Button bootstrap="btn btn-sm btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <RadioGroup>
        <div>
          <input type="radio" name="taskPriority" id="baixa" defaultValue="baixa" />
          <label for="baixa" className="ms-2 form-label">
            Baixa
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="taskPriority"
            id="mitjana"
            defaultValue="mitjana"
          />
          <label for="mitjana" className="ms-2 form-label">
            Mitjana
          </label>
        </div>

        <div>
          <input type="radio" name="taskPriority" id="alta" defaultValue="alta" />
          <label for="alta" className="ms-2 form-label">
            Alta
          </label>
        </div>
      </RadioGroup> */}
    </>
  );
}

export default App;
