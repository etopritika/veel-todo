import Button from "@/components/ui/Button";
import { ListPlus } from "lucide-react";
import Tooltip from "./ui/Tooltip";

export default function AddTodoButton() {
  return (
    <Tooltip content="Add Todo" position="top">
      <Button
        // onClick={onClick}
        variant="primary"
        size="sm"
        aria-label="Add Todo"
      >
        <ListPlus size={20} />
      </Button>
    </Tooltip>
  );
}
