import { z } from "zod";

export const taskSchema = z.object({
  taskName: z
    .string()
    .min(5, { message: "El nom és obligatori" })
    .min(5, { message: "Longitud mínima de 5 caràcters" }),

  taskCategory: z.enum(["Personal", "Casa", "Feina", "Estudis"], {
    errorMap: () => ({
      message: "El valor ha de pertànyer a una de les categories predefinides",
    }),
  }),

  taskDueDate: z.coerce
    .date()
    .min(
      (() => {
        const avui = new Date();
        avui.setHours(0, 0, 0, 0);
        return avui.getDate() + 1;
      })(),
      {
        message: "La data ha de ser com a mínim demà.",
      }
    )
    .transform((data) => {
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const any = data.getFullYear();
      return `${dia}/${mes}/${any}`;
    }),

  taskPriority: z.enum(["baixa", "mitja", "alta"], {
    errorMap: () => ({
      message: "El valor ha de pertànyer a una de les prioritats predefinides",
    }),
  }),

  taskImportant: z.boolean().optional(),

  taskDescription: z
    .string()
    .max(300, {
      message: "La descripció ha de contenir com a màxim 300 caràcters.",
    })
    .optional(),
});
