import AddTodoButton from "@/components/AddTodoButton";
import Controls from "@/components/Controls";
import FilterTabs from "@/components/FilterTabs";
import TodoList from "@/components/TodoList";

export default async function Home() {
  return (
    <main className="flex-1 flex">
      <section className="w-full max-w-md mx-auto flex-1 flex flex-col">
        <Controls>
          <FilterTabs />
          <AddTodoButton />
        </Controls>
        <TodoList />
      </section>
    </main>
  );
}
