import React,{useRef, useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error,setError]=useState();

    const addUserHandler = event => {
        event.preventDefault();
        const enterredUsername=nameInputRef.current.value;
        const enterredAge=ageInputRef.current.value
        if (enterredUsername.trim().length===0 || 
        enterredAge.trim().length===0)
        {
            setError({
                title:'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if(+enterredAge<1)
        {
            setError({
                title:'Invalid Age',
                message: 'Please enter a valid age (greater than 0)'
            })    
            return;
        }
        props.onAddUser(enterredUsername,enterredAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    }

    const errorHandler = () =>
    {
        setError(null);
    }

    return(
        <Wrapper>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    type='text' id='username' 
                    ref={nameInputRef}
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                    type='number' id='age' 
                    ref={ageInputRef}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </Wrapper>
    )
};

export default AddUser;