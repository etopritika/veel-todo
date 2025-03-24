import { Todo } from "@/lib/types";
import Button from "./ui/Button";
import { Trash2 } from "lucide-react";
import Tooltip from "./ui/Tooltip";

type TodoItemProps = {
  todo: Todo;
  // onDelete: (id: number) => void;
  // onToggle: (id: number) => void;
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex space-x-2">
        <input type="checkbox" checked={todo.completed} />
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
