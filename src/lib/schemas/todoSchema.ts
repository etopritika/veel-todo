import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, "Enter the task text"),
});

export type TodoInput = z.infer<typeof todoSchema>;
