import { z } from "zod";

export const taskSchema = z.object({
  taskName: z.string().min(5, { message: "Longitud mínima de 5 caràcters" }),

  taskCategory: z.enum(["Personal", "Casa", "Feina", "Estudis"], { message: "Has de seleccionar una de les categories predefinides." }),

  taskDueDate: z.coerce
    .date({ message: "S'espera data amb format DD/MM/YYYY." })
    .min(
      (() => {
        const avui = new Date(); // Agafa la data actual (hora inclosa).
        avui.setHours(0, 0, 0, 0); // Setejem l'hora 0:00. Així evitarem errors amb hores i només agafarem el dia de l'any.
        const dema = new Date(avui); // Creem la data de demà a partir d'avui
        dema.setDate(avui.getDate() + 1); // Sumem 1 dia i ja tenim la data de demà per utilitzar-la com a requisit mínim.
        return dema;
      })(),
      {
        message: "La data ha de ser com a mínim demà.",
      }
    )
    .transform((data) => { 
      // Retorna la data directament en format DD/MM/YYYY. D'aquesta forma serà compatible sense tenir en compte l'idioma del navegador.
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const any = data.getFullYear();
      return `${dia}/${mes}/${any}`;
    }),

  taskPriority: z.enum(["baixa", "mitjana", "alta"], { message: "El valor ha de pertànyer a una de les prioritats predefinides" }),

  taskImportant: z.boolean().optional(),

  taskDescription: z
    .string()
    .max(300, {
      message: "La descripció ha de contenir com a màxim 300 caràcters.",
    })
    .optional(),
});
