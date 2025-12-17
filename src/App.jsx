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
import RadioButton from "./components/RadioButton";

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

const categories = [
  { id: 1, nom: "Personal" },
  { id: 2, nom: "Casa" },
  { id: 3, nom: "Feina" },
  { id: 4, nom: "Estudis" },
];

const prioritatsBase = [
  { id: 1, nom: "Baixa" },
  { id: 2, nom: "Mitjana" },
  { id: 3, nom: "Alta" },
];

const prioritats = prioritatsBase.map(p => ({
  ...p,
  htmlId: `taskPriority-${p.nom.toLowerCase()}`,
  value: p.nom.toLowerCase(),
}));


function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-4">
          <h1>Task manager</h1>
        </div>

        <Card headerText="Crear tasca">
          <Form>
            <div className="row mb-3">
              <div className="col-3">
                <Input
                  bootstrap="form-control"
                  type="text"
                  name="taskName"
                  id="taskName"
                >
                  Nom de la tasca
                </Input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <Select
                  bootstrap="form-select mt-2"
                  name="taskCategory"
                  id="taskCategory"
                  textLabel="Categoria"
                >
                  <option value="0">-- Selecciona una categoria --</option>
                  {categories.map((cat) => {
                    return (
                      <option key={cat.id} value={cat.nom}>
                        {cat.nom}
                      </option>
                    );
                  })}
                </Select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <Input
                  bootstrap="form-control"
                  type="date"
                  name="taskDueDate"
                  id="taskDueDate"
                >
                  Data límit
                </Input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <RadioGroup>
                  {prioritats.map((p) => {
                    return (
                      <RadioButton
                        name="taskPriority"
                        id={p.htmlId}
                        defaultValue={p.value}
                      >
                        {p.nom}
                      </RadioButton>
                    );
                  })}
                  {/* <RadioButton
                    type="radio"
                    name="taskPriority"
                    id="taskPriorityBaixa"
                    defaultValue="baixa"
                  >
                    Baixa
                  </RadioButton>
                  <RadioButton
                    type="radio"
                    name="taskPriority"
                    id="taskPriorityMitjana"
                    defaultValue="mitjana"
                  >
                    Mitjana
                  </RadioButton>
                  <RadioButton
                    type="radio"
                    name="taskPriority"
                    id="taskPriorityAlta"
                    defaultValue="alta"
                  >
                    Alta
                  </RadioButton> */}
                </RadioGroup>
              </div>
            </div>

            <Button bootstrap="btn btn-primary" type="submit">
              Afegir tasca
            </Button>
          </Form>
        </Card>

        <div className="row-3 mb-4" id="createButtonRow">
          <Button bootstrap="btn btn-primary">
            <i className="fa-solid fa-circle-plus"></i> Crear tasca
          </Button>
        </div>

        <div className="container" id="listContainer">
          <div className="row-3">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Categoria</th>
                  <th>Due date</th>
                  <th>Prioritat</th>
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
      </div>
    </>
  );
}

export default App;
