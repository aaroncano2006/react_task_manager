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
├── dist
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Button.jsx
│   │   ├── Form.jsx
│   │   ├── Input.jsx
│   │   ├── Link.jsx
│   │   ├── Select.jsx
│   │   └── Textarea.jsx
│   ├── schemas
│   │   └── task.js
│   ├── styles
│   │   └── App.css
│   ├── views
│   │   └── form.html
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── T2_Pt1_GestorTasques_Enun...
└── vite.config.js
```

## 👀 Requisits previs

- **[Node JS 22.21.1](https://nodejs.org/en/download)**

## Instal·lació


## 📃 Changelog

`11/12/2025:` **Commit inicial**:

- Estructura inicial del projecte amb components, schemas i estils básics.

- Maquetació inicial de l'aplicació, només pàgina principal amb títol, botó per crear nova tasca (no funcional) i taula buida amb classes Bootstrap i estils inicials.

`15/12/2025`: **Nous components**:

- S'han afegit els components **Link, Select i Textarea**

- Contingut placeholder al formulari (será modificat durant els següents canvis)

- S'ha creat l'array **faker** per provar la visualització del llistat amb dades de prova. (El nom dels camps no correspon amb els del producte final).

- Estils i classes de la taula de la pàgina principal modificats (Afegida classe p-3 als td i text-align: center a les files).

- **Zod schema** per a les tasques.

** A partir dels següents dies es realitzaran diferents branques pel desenvolupament, d'aquesta forma podrem controlar millor quins canvis es realitzen en un dia determinat i tindrem menys risc de trencar el funcionament de la branca **`main`**. Una vegada acabi el dia i es comprovi que els canvis funcionen, realitzarem **`Pull Request`** i tindrem la branca **`main`** actualitzada **