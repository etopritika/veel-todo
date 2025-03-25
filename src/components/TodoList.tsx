"use client";

import { useTodos } from "@/hooks/useTodos";
import { useFilterStore } from "@/store/filterStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { data: todos, isLoading, isError } = useTodos();
  const { filter } = useFilterStore();

  if (isLoading) return <p className="text-sm text-secondary">Loading...</p>;
  if (isError || !todos)
    return <p className="text-sm text-danger">Error loading todos</p>;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul className="py-4 space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
