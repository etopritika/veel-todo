"use client";
import { Todo } from "@/lib/types";
import TodoItem from "./TodoItem";
import { useFilterStore } from "@/store/filterStore";

type TodoListProps = {
  todoList: Todo[];
};

export default function TodoList({ todoList }: TodoListProps) {
  const { filter } = useFilterStore();

  const filteredTodos = todoList.filter((todo) => {
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
