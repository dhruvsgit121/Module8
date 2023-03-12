import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const usersList = [
    { name: "Dhruv Gupta", age: "32", id: "1" },
    { name: "Tarang Gupta", age: "23", id: "2" },
    { name: "Namam Gupta", age: "10", id: "3" },
  ];

  const [enteredUsersList, setEnteredUsersList] = useState(usersList);

  const saveUserHandler = (userData) => {
    setEnteredUsersList((prevUsersList) => {
      return [...prevUsersList, userData];
    });
  };

  return (
    <div>
      <AddUser onSaveUserHandler={saveUserHandler} />
      <UsersList users={enteredUsersList} />
    </div>
  );
}

export default App;
