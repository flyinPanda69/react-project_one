import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message : 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: 'Invalid Age',
            message : 'Please enter a valid age (> 0).'
          })
      return;
    }
    props.getUserListData(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
    {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      
      <Card className={styles.input}>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="Age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
