import Navbar from "./components/Navbar";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="title">TODO LIST</div>
        <div className="todoList">
          <AddTodo />
        </div>
      </div>
    </>
  );
}

export default App;
