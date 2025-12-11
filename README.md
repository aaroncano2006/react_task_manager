# ⚛️ React Task Manager

## 🎯 Objectiu del projecte

Aquest projecte consisteix en crear un gestor de tasques amb React que permeti realitzar les següents operacions:

- **Crear tasques**
- **Emmagatzemar les tasques al navegador web (utilitzant localStorage)**
- **Llistar totes les tasques creades**
- **Filtrar tasques mitjançant diferents paràmetres**
- **Marcar tasques**
- **Eliminar les tasques**

## 🛠️ Tech stack (Tecnologies utilitzades)

- **Frontend**: React + Vite
- **Styles**: Bootstrap + CSS
- **Icones**: [Font Awesome](https://fontawesome.com/)
- **Gestió de formularis**: React Hook Form
- **Validacions**: Zod


## 📁 Estructura del projecte

```
/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── Button.jsx
│ │ ├── Form.jsx
│ │ └── Input.jsx
│ ├── schemas/
│ │ └── task.js
│ ├── styles/
│ │ └── App.css
│ ├── views/
│ │ └── form.html
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── T2_Pt1_GestorTasques_Enunciat.md
└── vite.config.js
```

## 📃 Changelog

`11/12/2025:` **Commit inicial**:

- Estructura inicial del projecte amb components, schemas i estils básics.

- Maquetació inicial de l'aplicació, només pàgina principal amb títol, botó per crear nova tasca (no funcional) i taula buida amb classes Bootstrap i estils inicials.