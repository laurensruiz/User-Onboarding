import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import formSchema from './validation/FormSchema';

const initialValues = {
  username:'',
  password:'',
  email:'',
  tos: false
}

function App() {
  const [formValues, setFormValues] =useState(initialValues);
  
  const onChange = (name, value) => {
    setFormValues({...formValues, [name]:value});
  }

  const onSubmit = () => {

  }
  return (
    <div className="App">
      <Form values= {formValues} change={onChange}/>
    </div>
  );
}

export default App;
