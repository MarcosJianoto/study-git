import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Tasks
            name="type the new task"
            button="NEW TASK"
            buttonTwo={"NEW TASK COMPLETE"}
          />
        </div>
        <div>teste</div>
        <div>"Marcos"</div>
        <div>testando 123</div>
        <div>
          <Tasks
            name="type complete task"
            button="COMPLETE ALL TASKS"
            buttonTwo="REMOVE ALL TASKS"
          />
        </div>
      </div>
    </>
  );
}

export default App;
