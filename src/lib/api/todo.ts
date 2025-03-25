import { Todo } from "@/lib/types";
import { TodoInput } from "../schemas/todoSchema";
import { api } from "../axios";

export async function getTodos(): Promise<Todo[]> {
  const res = await api.get<Todo[]>("/todos?_limit=10");
  return res.data;
}

export async function addTodo(data: TodoInput): Promise<Todo> {
  const res = await api.post<Todo>("/todos", {
    ...data,
    userId: 1,
    completed: false,
  });
  return res.data;
}
