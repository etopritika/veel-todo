"use client";
import Button from "@/components/ui/Button";
import { ListPlus } from "lucide-react";
import Tooltip from "./ui/Tooltip";
import ModalContainer from "./ui/ModalContainer";
import AddTodoModal from "./AddTodoModal";
import { useModal } from "../lib/providers/ModalProvider";

export default function AddTodoButton() {
  const { setOpen } = useModal();

  const handleOpenModal = () => {
    setOpen(
      <ModalContainer title="Add Todo Modal">
        <AddTodoModal />
      </ModalContainer>
    );
  };

  return (
    <Tooltip content="Add Todo" position="top">
      <Button
        onClick={handleOpenModal}
        variant="primary"
        size="sm"
        aria-label="Add Todo"
      >
        <ListPlus size={20} />
      </Button>
    </Tooltip>
  );
}
