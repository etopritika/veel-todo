import { Todo } from "@/lib/types";
import { useToggleTodo } from "@/hooks/useToggleTodo";
import DeleteTodoButton from "./DeleteTodoButton";

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
      <DeleteTodoButton todo={todo} />
    </li>
  );
}
