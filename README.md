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

`16/12/2025 (dev16122025)`: 

- Eliminat component **Link**.

- S'ha creat un fitxer anomenat **convert.html**, aquest fitxer només serveix per escriure els components en HTML i després traduïrlos a JSX, com que no té un impacte més enllà d'escriure només HTML, no serà rastrejat. S'ha afegit a **.gitignore**.

- S'ha afegit `taskPriority` al **Zod Schema `task.js`**. Aquest error era crític ja que si no existeix a zod quan es crei una nova tasca no tindrà en compte la prioritat i hauran errors en les dades.

- Afegit component **RadioGroup**.

- **Canvis en l'estructura del projecte**: Per simplificar l'aplicació, el formulari estarà a la mateixa pàgina que el llistat.

- Afegit component **Card**.

- Modificat l’ús d’enum al Zod Schema per adaptar-lo a la sintaxi correcta de Zod.

- Integració de react-hook-form amb FormProvider i useFormContext per millorar l’arquitectura del formulari.

- Refactorització del component Input perquè sigui reutilitzable i estigui connectat al context del formulari i sigui compatible amb la validació per Zod.

`17/12/2025 (dev17122025)`:

- Eliminat CDN de Font Awesome a `index.html`. S'ha instal·lat via `npm`.

- Component **`Select.jsx`** modificat per compatibilitzar-ho amb el formulari.

- Constant `categories` afegida i **`taskCategory`** implementada al formulari amb les seves validacions de Zod Schema.

- Ajustos de classes Bootstrap i CSS.

- Camp **És important?** eliminat del llistat. Serà substituit amb una icona Font Awesome al costat del nom.

- **`taskDueDate`** implementada al formulari amb les seves validacions.

- Zod Schema `task.js` corregit per a validar correctament **`taskDueDate`**

- Atribut `defaultValue` afegit al component **`Input.jsx`** per fer-ho compatible amb el funcionament del component **`RadioGroup.jsx`**.

- Component **`RadioButton.jsx`** creat. Es manté la propietat `defaultValue` a **`Input.jsx`** per compatibilitat en cas de ser necessaria per a futurs canvis en l'apliació.

- Constants `prioritatsBase` (identificador únic i nom de la prioritat) i `prioritats` (prioritatBase amb les seves propietats + identificadors per a HTML i valors del RadioButton per coincidir amb el Zod Schema) creades.

- Atribut `key` afegit als componentes **`RadioButton`** de **`App.jsx`** per evitar problemes de duplicitat i errors en consola.

`18/12/2025 (dev18122025)`:

- S'ha modificat la maquetació del component **`RadioButton.jsx`**

- Component **`Checkbox.jsx`** creat.

- Afegit `type="checkbox"` a **`Checkbox.jsx`** i camp **`taskImportant`** afeigt al formulari.

- Component **`Textarea.jsx`** modificat per ser compatible amb el formulari.

- Afegit camp **`taskDescription`** al formulari.

- S'ha corregit una propietat erronea al component **`Select.jsx`** que no permetia agafar les classes Bootstrap.

- S'han afegit marges amb Bootsrap a les labels de **`RadioButton.jsx`** i **`Checkbox.jsx`**.

- S'ha corregit el component **`Checkbox.jsx`** ja que no tenia el codi per estar dins del context del formulari.

- S'ha modificat la maquetació de les columnes del formulari amb la classe Bootstrap `col-10`.

- Validacions corregides i funcionals amb missatges personalitzats.

`20/12/2025 (dev20122025):`

- Eliminat array `faker` de **`App.jsx`** per implementar la creació de tasques amb peristència.

- Eliminat `<tr>` de la taula a **`App.jsx`**.

- Afegit atribut `type` a **`Button.jsx`**, d'aquesta forma podrem crear botons normals i submit per al formulari.