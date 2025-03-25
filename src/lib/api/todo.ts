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

export async function updateTodo(
  id: number,
  completed: boolean
): Promise<void> {
  await api.patch(`/todos/${id}`, { completed });
}

export async function deleteTodo(id: number): Promise<void> {
  await api.delete(`/todos/${id}`);
}
