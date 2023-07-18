import { useState } from "react";

const Todo = () => {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {list.length ? (
          list.map((item, index) => {
            return (
              <li>
                {item} <button onClick={() => removeItem(index)}>Remove</button>{" "}
              </li>
            );
          })
        ) : (
          <p>No Item</p>
        )}
      </ul>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Enter a new task..."
      />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default Todo;