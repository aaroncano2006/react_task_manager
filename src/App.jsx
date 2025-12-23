import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import Form from "./components/Form";
import Button from "./components/Button";
import Select from "./components/Select";
import Textarea from "./components/Textarea";
import RadioGroup from "./components/RadioGroup";
import RadioButton from "./components/RadioButton";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";

const CATEGORIES = [
  { id: 1, nom: "Personal" },
  { id: 2, nom: "Casa" },
  { id: 3, nom: "Feina" },
  { id: 4, nom: "Estudis" },
];

const PRIORITATS_BASE = [
  { id: 1, nom: "Baixa" },
  { id: 2, nom: "Mitjana" },
  { id: 3, nom: "Alta" },
];

const PRIORITATS = PRIORITATS_BASE.map(p => ({
  ...p,
  htmlId: `taskPriority-${p.nom.toLowerCase()}`,
  value: p.nom.toLowerCase(),
}));

const MAX_KEY = localStorage.length + 1;

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <h1>Task manager</h1>
        </div>

        <Card headerText="Crear tasca">
          <Form id="taskForm" bootstrap="mt-3 ms-5 align-items-center">

            <Input type="hidden" name="taskId" id="taskId" defaultValue={MAX_KEY}></Input>

            <div className="row mb-3">
              <div className="col-10">
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
              <div className="col-10">
                <Select
                  bootstrap="form-select mt-2"
                  name="taskCategory"
                  id="taskCategory"
                  textLabel="Categoria"
                >
                  <option value="">-- Selecciona una categoria --</option>
                  {CATEGORIES.map((cat) => {
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
              <div className="col-10">
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
              <div className="col-10">
                <RadioGroup>
                  {PRIORITATS.map((p) => {
                    return (
                      <RadioButton
                        name="taskPriority"
                        id={p.htmlId}
                        defaultValue={p.value}
                        key={p.id}
                      >
                        {p.nom}
                      </RadioButton>
                    );
                  })}
                </RadioGroup>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-10">
                <Checkbox name="taskImportant" id="taskImportant" defaultValue={true}>
                  Marca com a important
                </Checkbox>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-10">
                <Textarea bootstrap="mb-2" name="taskDescription" id="taskDescription" cols="10" rows="5">
                  Descripció
                </Textarea>
              </div>
            </div>

            <Input type="hidden" name="completed" id="completed" defaultValue={false}></Input>

            <Button bootstrap="btn btn-primary" type="submit">
              Afegir tasca
            </Button>
          </Form>
        </Card>

        <div className="row-3 mb-4" id="createButtonRow">
          <Button bootstrap="btn btn-primary" type="button">
            <i className="fa-solid fa-circle-plus"></i> Crear tasca
          </Button>
        </div>

        <div className="mb-4" id="listContainer">
          <div className="row-3">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom</th>
                  <th>Categoria</th>
                  <th>Due date</th>
                  <th>Prioritat</th>
                  <th>Descripció</th>
                  <th>Accions</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
