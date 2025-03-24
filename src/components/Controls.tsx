import AddTodoButton from "./AddTodoButton";
import FilterTabs from "./FilterTabs";

export default function Controls() {
  return (
    <header className="flex space-x-2 justify-center">
      <FilterTabs />
      <AddTodoButton />
    </header>
  );
}
