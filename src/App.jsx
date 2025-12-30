import { useState, useEffect } from "react";
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
import Tasklist from "./components/Tasklist";

/*==== CONSTANTS GLOBALS ====*/
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

const PRIORITATS = PRIORITATS_BASE.map((p) => ({
  ...p,
  htmlId: `taskPriority-${p.nom.toLowerCase()}`,
  value: p.nom.toLowerCase(),
}));

function App() {
  /*====CARREGAR TASQUES====*/
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        storedTasks.push(JSON.parse(localStorage.getItem(key)));
      } catch {}
    }

    setTasks(storedTasks);
  }, []);

  /*====FUNCIONS====*/
  /**
   * Afegeix tasca a localStorage. S'ha de passar com a paràmetre a un component Form.jsx
   * @param {*} task
   */
  const addTask = (task) => {
    const newTask = {
      ...task,
      taskId: Date.now(),
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    localStorage.setItem(newTask.taskId, JSON.stringify(newTask));
  };

  /**
   * Esborra una tasca concreta del llistat. S'ha de passar com a paràmetre a un component Tasklist.jsx i dins d'aquest a un component Button.jsx
   * @param {*} target
   */
  const deleteTask = (target) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== target)); // Selecciona només les tasques on la id no sigui la mateixa que es passa com a target.

    localStorage.removeItem(target);
  };

  /**
   * Marca o desmarca una tasca concreta del llista.
   * @param {*} target
   */
  const markTask = (target) => {
    setTasks((prevTasks) =>
      // Recorrem totes les tasques fins trobar target
      prevTasks.map((task) => {
        if (task.taskId === target) {
          /* Si es troba target fem una copia de la tasca amb
          aquella id amb spread operator i canviem el seu completed a 
          l'estat contrari (!task.completed)*/
          const updatedTask = { ...task, completed: !task.completed };
          localStorage.setItem(target, JSON.stringify(updatedTask)); // Sincronitzem amb localStorage.
          return updatedTask; // Retornem la tasca modificada a l'array mapejat.
        }
        return task; // Si no és target, simplement deixem la tasca intacta i la retornem.
      })
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <h1>Task manager</h1>
        </div>

        <Card headerText="Crear tasca">
          <Form
            id="taskForm"
            bootstrap="mt-3 ms-5 align-items-center"
            submitHandler={addTask}
          >
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
                <Checkbox
                  name="taskImportant"
                  id="taskImportant"
                  defaultChecked={false}
                >
                  Marca com a important
                </Checkbox>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-10">
                <Textarea
                  bootstrap="mb-2"
                  name="taskDescription"
                  id="taskDescription"
                  cols="10"
                  rows="5"
                >
                  Descripció
                </Textarea>
              </div>
            </div>

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
                <Tasklist
                  content={tasks}
                  onDelete={deleteTask}
                  onMark={markTask}
                ></Tasklist>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
