import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="container">
        <div>teste</div>
        <div>"Marcos"</div>
        <div>testando 123</div>
        <div>
          <Tasks
            name="type complete task"
            button="COMPLETE ALL TASKS"           
            buttonTwo="REMOVE ALL TASKS"
          />
          <h1>teste</h1>
        </div>
      </div>
    </>
  );
}
export default App;
