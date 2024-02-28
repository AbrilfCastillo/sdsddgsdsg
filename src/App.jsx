import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <main className="bg-zinc-900 h-full">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
