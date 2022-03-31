import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form'
import formSchema from './validation/FormSchema';
import * as yup from 'yup';

/*
-First setup your form so you know what type of values you need
-setup the App Js and constants for onChange handle and form so we can test it on the window
-setup form schema so we can have validations in the form
-create validation function and setup onSubmit to add the users to an empty array (useState)
-don't forget to set initial values and console.log to check data and errors
*/

// notice FormErrors and FormValues are setup the same, since we want the keys to match for this validation

const initialValues = {
  username:'',
  password:'',
  email:'',
  tos: false
}

const initialFormError = {
  username:'',
  password:'',
  email:'',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialValues); // make sure form is clear thats why we set the constants
  const [formErrors, setFormErrors] = useState(initialFormError); // used to validate, will clear field if there is an error
  const [users, setUsers] = useState([]) // where are we putting the data into? an array
  
  const onChange = (name, value) => {
    validate(name, value); // we made a function that has requirements
    setFormValues({...formValues, [name]:value}); //for each value being input for each key for each pair we made
  }


  const validate = (name, value) => {
    yup.reach(formSchema, name) //for each key
    .validate(value) // check the value put in the key with the given requirements
    .then(() => setFormErrors({...formErrors, [name]:''})) // formErrors will be cleared for that specific value
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) // only one error per value, errors will then be filled what we typed in schema for the specific value
  }

  const onSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues) // posts values we typed to this api link since it will clear after submit
      .then(res => {
        setUsers([res.data, ...users]); // make sure to test and console log to see what response looks like 
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialValues)) //clears blanks
  }

  return (
    <div className="App">
      <Form values= {formValues} change={onChange} errors={formErrors} submit={onSubmit}/>
      {users.map(user => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Created at: {user.createdAt}</p>
          <p>---------</p>
        </div>
      ))}
    </div>
  );
}

export default App;
