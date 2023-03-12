import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }

    if (+enteredUserAge < 1) {
      return;
    }

    setEnteredUserAge("");
    setEnteredUserName("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          value={enteredUserName}
          id="username"
          type="text"
          onChange={userNameChangeHandler}
        />

        <label htmlFor="age">Age (years)</label>
        <input
          value={enteredUserAge}
          id="age"
          type="number"
          onChange={userAgeChangeHandler}
        />

        <Button onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
