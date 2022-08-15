import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";


const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Since we are using refs we can get rid of these useState
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(nameInputRef.current.value);

    const enteredName = nameInputRef.current.value;
    const entereredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || entereredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message : 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+entereredUserAge < 1) {
        setError({
            title: 'Invalid Age',
            message : 'Please enter a valid age (> 0).'
          })
      return;
    }
    props.getUserListData(enteredName, entereredUserAge);
    // setEnteredAge("");
    // setEnteredUserName("");
    enteredName.current.value='';
    entereredUserAge.current.value='';
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

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
            ref={nameInputRef}
          />
          <label htmlFor="Age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
