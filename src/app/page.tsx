import AddTodoButton from "@/components/AddTodoButton";
import Controls from "@/components/Controls";
import FilterTabs from "@/components/FilterTabs";
import TodoList from "@/components/TodoList";

export default async function Home() {
  return (
    <main>
      <section className="w-full max-w-md mx-auto">
        <Controls>
          <FilterTabs />
          <AddTodoButton />
        </Controls>
        <TodoList />
      </section>
    </main>
  );
}
