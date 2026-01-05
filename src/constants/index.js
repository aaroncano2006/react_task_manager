/*==== CONSTANTS GLOBALS ====*/
export const CATEGORIES = [
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

export const PRIORITATS = PRIORITATS_BASE.map((p) => ({
  ...p,
  htmlId: `taskPriority-${p.nom.toLowerCase()}`,
  value: p.nom.toLowerCase(),
}));

export const TASKS_KEY = "tasks"; // Array de tasques de localStorage