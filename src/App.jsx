import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-4">
          <h1>Task manager</h1>
        </div>

        <div className="row-3 mb-4">
          <Button bootstrap="btn btn-primary">
            <i className="fa-solid fa-circle-plus"></i> Crear tasca
          </Button>
        </div>

        <div className="row-3">
          <table className="table-bordered">
            <thead>
              <tr>
                <th></th>
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
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;