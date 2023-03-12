import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />

        <Button>Add User</Button>
        
      </form>
    </Card>
  );
};

export default AddUser;
