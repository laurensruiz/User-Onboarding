import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form'
import formSchema from './validation/FormSchema';
import * as yup from 'yup';

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
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormError)
  
  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value});
  }

  const onSubmit = () => {
    axios.post('https://reqres.in/api/users')
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormValues({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
      <Form values= {formValues} change={onChange} errors={formErrors}/>
    </div>
  );
}

export default App;
