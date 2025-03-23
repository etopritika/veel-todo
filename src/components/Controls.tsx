import AddTodo from "./AddTodo";
import FilterTabs from "./FilterTabs";

export default function Controls() {
  return (
    <header className="flex space-x-2">
      <FilterTabs />
      <AddTodo />
    </header>
  );
}
