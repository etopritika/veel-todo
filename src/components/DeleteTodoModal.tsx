"use client";

import Button from "./ui/Button";
import { useModal } from "@/lib/providers/ModalProvider";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";

type Props = {
  todoId: number;
};

export default function DeleteTodoModal({ todoId }: Props) {
  const { setClose } = useModal();
  const { mutate, isPending } = useDeleteTodo();

  const handleDelete = () => {
    mutate(todoId, {
      onSuccess: () => {
        setClose();
      },
    });
  };

  return (
    <div className="flex justify-between space-x-2">
      <Button
        variant="secondary"
        size="sm"
        onClick={setClose}
        disabled={isPending}
      >
        Cancel
      </Button>
      <Button
        variant="danger"
        size="sm"
        onClick={handleDelete}
        isLoading={isPending}
      >
        Delete
      </Button>
    </div>
  );
}
