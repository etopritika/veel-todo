"use client";

import { useTodos } from "@/hooks/useTodos";
import { useFilterStore } from "@/store/filterStore";
import TodoItem from "./TodoItem";
import { RefreshCcw } from "lucide-react";

export default function TodoList() {
  const { data: todos, isLoading, isError } = useTodos();
  const { filter } = useFilterStore();

  if (isLoading)
    return (
      <div className="flex-1 flex justify-center items-center">
        <RefreshCcw className="animate-spin" />
      </div>
    );
  if (isError || !todos)
    return (
      <div className="flex-1 flex justify-center items-center">
        <p className="text-sm text-danger">Error loading todos</p>
      </div>
    );

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul className="py-8 space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
