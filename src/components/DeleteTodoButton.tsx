import { Trash2 } from "lucide-react";
import Button from "./ui/Button";
import Tooltip from "./ui/Tooltip";
import { useModal } from "@/lib/providers/ModalProvider";
import ModalContainer from "./ui/Modal/ModalContainer";
import { Todo } from "@/lib/types";
import DeleteTodoModal from "./DeleteTodoModal";

type DeleteTodoButtonProps = {
  todo: Todo;
};

export default function DeleteTodoButton({ todo }: DeleteTodoButtonProps) {
  const { setOpen } = useModal();

  const handleOpenModal = () => {
    setOpen(
      <ModalContainer
        title={
          <>
            Are you sure you want to delete task?
            <br />
            <span className="italic">&quot;{todo.title}&quot;</span>
          </>
        }
      >
        <DeleteTodoModal todoId={todo.id} />
      </ModalContainer>
    );
  };
  return (
    <Tooltip content="Delete Todo" position="top">
      <Button
        variant="danger"
        size="sm"
        aria-label="Delete Todo"
        onClick={handleOpenModal}
      >
        <Trash2 size={20} />
      </Button>
    </Tooltip>
  );
}
