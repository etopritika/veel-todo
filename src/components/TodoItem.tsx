import { Todo } from "@/lib/types";
import Button from "./ui/Button";
import { Trash2 } from "lucide-react";
import Tooltip from "./ui/Tooltip";
import { useToggleTodo } from "@/hooks/useToggleTodo";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { mutate: toggleTodo } = useToggleTodo();
  return (
    <li className="flex items-center justify-between">
      <div className="flex space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            toggleTodo({ id: todo.id, completed: !todo.completed })
          }
        />
        <p className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </p>
      </div>
      <Tooltip content="Remove Todo" position="top">
        <Button variant="danger" size="sm" aria-label="Remove Todo">
          <Trash2 size={20} />
        </Button>
      </Tooltip>
    </li>
  );
}
