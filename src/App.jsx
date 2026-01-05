import { useState, useEffect } from "react";
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
import Modal from "./components/Modal";
import { TASK_SEED } from "./seeders/task_seed";
import { CATEGORIES, PRIORITATS, TASKS_KEY } from "./constants/index";

function App() {
  /*====CARREGAR TASQUES====*/
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  });

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  /*====ESTAT DEL MODAL D'ELIMINACIÓ====*/
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /*====ESTAT DE LA TASCA A ELIMINAR====*/
  const [taskToDelete, setTaskToDelete] = useState(null);

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
  };

  const askDeleteTask = (target) => {
    setTaskToDelete(target);
    setShowDeleteModal(true);
  };

  /**
   * Esborra una tasca concreta del llistat. S'ha de passar com a paràmetre a un component Tasklist.jsx i dins d'aquest a un component Button.jsx
   * @param {*} target
   */
  const deleteTask = (target) => {
    // Selecciona només les tasques on la id no sigui la mateixa que es passa com a target.
    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== target));
    setTaskToDelete(null);
    setShowDeleteModal(false);
  };

  /**
   * Marca o desmarca una tasca concreta del llista.
   * @param {*} target
   */
  const markTask = (target) => {
    setTasks((prevTasks) =>
      // Recorrem totes les tasques fins trobar target
      prevTasks.map(
        (task) =>
          /* 
          Si es troba target fem una copia de la tasca amb
          aquella id amb spread operator i 
          canviem el seu completed a l'estat contrari 
          (!task.completed)
        */
          task.taskId === target
            ? { ...task, completed: !task.completed } // Retornem la tasca modificada a l'array mapejat.
            : task // Si no és target, simplement deixem la tasca intacta i la retornem.
      )
    );
  };

  /**
   * Carrega dades de prova per comprovar si el llistat es renderitza correctament
   * i la resta de funcionalitats de l'aplicació funcionen sense cap error.
   */
  const loadSeeder = () => {
    setTasks((prev) => [
      ...prev,
      ...TASK_SEED.filter(
        (seed) => !prev.some((task) => task.taskId === seed.taskId)
      ),
    ]);
  };

  /**
   * Esborra només les dades de prova del seeder.
   */
  const removeSeeder = () => {
    setTasks((prev) =>
      prev.filter(
        (task) => !TASK_SEED.some((seed) => seed.taskId === task.taskId)
      )
    );
  };

  /**
   * Detecta si s'ha carregat el seeder.
   */
  const hasSeeder = tasks.some((task) =>
    TASK_SEED.some((seed) => seed.taskId === task.taskId)
  );

  /**
   * Exporta una tasca concreta a un fitxer JSON.
   * @param {*} target
   * @returns
   */
  const exportTask = (target) => {
    const tasks = JSON.parse(localStorage.getItem(TASKS_KEY));
    const targetTask = tasks.find((task) => task.taskId === target);
    if (!targetTask) return; // Si no troba la tasca surt i no s'executa.

    const dataStr = JSON.stringify(targetTask, null, 2);
    // Crea un fitxer en memòria tipus Blob que desa text pla, en aquest cas la tasca en format JSON.
    const tempFile = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(tempFile); // URL temporal.

    // Simula la descarrega creant un element "a".
    const link = document.createElement("a");
    link.href = url;
    link.download = `task-${target}.json`;
    link.click();

    URL.revokeObjectURL(url); // Esborra la URL temporal.
  };

  /**
   * Exporta totes les tasques a un fitxer JSON.
   */
  const exportAllTasks = () => {
    const dataStr = JSON.stringify(
      JSON.parse(localStorage.getItem(TASKS_KEY)),
      null,
      2
    );
    const tempFile = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(tempFile);

    const link = document.createElement("a");
    link.href = url;
    link.download = `tasks.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  /**
   * Importa tasques des de un fitxer JSON.
   * Permet fitxers amb una sola tasca o amb mútilples tasques.
   * @param {*} file
   * @returns
   */
  const importJSON = (file) => {
    if (!file) return; // Si no existeix el fitxer no s'executa.

    file.text().then((text) => {
      // S'agafa el text del fitxer i es converteix a JSON
      try {
        const data = JSON.parse(text);
        // Es mira si és un array i si no ho és afegeix el JSON a un array.
        const importedTasks = Array.isArray(data) ? data : [data];
        const validTasks = importedTasks.filter(isValidTask); // Filtra les tasques segons el format que tenim al Zod Schema i a localStorage.

        if (validTasks.length < 1) {
          alert("El JSON introduït no és vàlid!");
          return;
        }

        /* 
          Es canvia l'estat de les tasques de localStorage 
           i es comprova que en l'estat previ a afegir les
           tasques no hi ha duplicitat per id.
        */
        setTasks((prev) => [
          ...prev,
          ...importedTasks.filter(
            (t) => !prev.some((task) => task.taskId === t.taskId)
          ),
        ]);
      } catch {
        // Si falla s'informa a l'usuari mitjançant un alert.
        alert("El JSON introduït no és vàlid!");
      }
    });
  };

  /**
   * Comprova que les tasques del JSON segueixin el mateix
   * format indicat al Zod Schema i que es desa a localStorage.
   * @param {*} task
   * @returns
   */
  const isValidTask = (task) => {
    return (
      typeof task === "object" &&
      typeof task.taskId === "number" &&
      typeof task.taskName === "string" &&
      typeof task.taskCategory === "string" &&
      typeof task.completed === "boolean"
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <h1>Task manager</h1>
        </div>

        <div className="mb-4">
          <Button
            bootstrap="btn btn-primary me-2 mb-2"
            type="button"
            dtoggle="collapse"
            dtarget="#formCard"
          >
            <i className="fa-solid fa-circle-plus"></i> Afegir nova tasca
          </Button>

          {!hasSeeder && (
            <Button
              bootstrap="btn btn-secondary me-2 mb-2"
              type="button"
              action={loadSeeder}
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i> Carregar dades
              de prova
            </Button>
          )}

          {hasSeeder && (
            <Button
              bootstrap="btn btn-danger me-2 mb-2"
              type="button"
              action={removeSeeder}
            >
              <i className="fa-solid fa-xmark"></i> Esborrar dades de prova
            </Button>
          )}

          {tasks.length > 0 && (
            <Button
              bootstrap="btn btn-warning me-2 mb-2"
              type="button"
              action={exportAllTasks}
            >
              <i className="fa-solid fa-download"></i> Exportar tasques a JSON
            </Button>
          )}

          <Button
            bootstrap="btn btn-success me-2 mb-2"
            type="button"
            dtoggle="collapse"
            dtarget="#importJSONCard"
          >
            <i className="fa-solid fa-circle-plus"></i> Importar tasques a
            partir de fitxer JSON
          </Button>
        </div>

        <Card
          headerText="Importar tasques a partir de fitxer JSON"
          id="importJSONCard"
        >
          {/*Utilitzem un input genèric d'HTML en comptes del nostre
          component. Això és perquè és més senzill treballar amb fitxers
          JSON sense dependre de react-hook-form.
          
          De forma similar passa amb les checkbox de Tasklist.jsx*/}
          <input
            type="file"
            accept=".json"
            onChange={(e) => importJSON(e.target.files[0])} // <--- e.target.files[0] === Fitxer pujat a l'input.
          />
        </Card>

        <Card headerText="Crear tasca" id="formCard">
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

        <div className="mb-4" id="listContainer">
          <div className="row-3 table-responsive">
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
                  onDelete={askDeleteTask}
                  onMark={markTask}
                  onExport={exportTask}
                ></Tasklist>
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          show={showDeleteModal}
          title="Eliminar tasca"
          bodytext="Confirma l'eliminació de la tasca. Aquesta acció és irreversible!"
          toggleShow={setShowDeleteModal}
          submitButtonText="Eliminar tasca"
          submitButtonBootstrap="btn btn-danger"
          target={taskToDelete}
          action={deleteTask}
        ></Modal>
      </div>
    </>
  );
}

export default App;
