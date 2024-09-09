import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const addTodo = () => {
    setTodo([...todo, { id: Date.now(), text: inputVal }]);
    setInputVal("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const FindTodo = todo.find((item) => item.id === id);
    setInputVal(FindTodo.text);
    setTodo(todo.filter((el) => el.id !== id));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <input
          style={{
            borderRadius: "5px",
            padding: "8px",
            border: "2px solid grey",
          }}
          type="text"
          placeholder="Add Task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          style={{
            marginLeft: "10px",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "orange",
            color: "white",
          }}
          onClick={addTodo}
        >
          Add Todo
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ul style={{ listStyle: "none" }}>
            {todo.map((item, index) => {
              return (
                <>
                  <li
                    style={{
                      padding: "10px",
                      backgroundColor: "lightgray",
                      borderRadius: "10px",
                      margin: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {item.text}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        style={{
                          marginLeft: "10px",
                          border: "none",
                          borderRadius: "10px",
                          padding: "10px",
                          backgroundColor: "green",
                          color: "white",
                        }}
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          marginLeft: "10px",
                          border: "none",
                          borderRadius: "10px",
                          padding: "10px",
                          backgroundColor: "red",
                          color: "white",
                        }}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
