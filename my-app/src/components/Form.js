import React from "react";

const Form = (props) => {
    const { change, submit, errors } = props; // props we set
    const {username, email, password, tos} = props.values; // this is values props we set since there will be many, this links to formValues, what is being typed 

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target //
        const newVal = type === 'checkbox' ? checked : value; 
        change(name, newVal); //onChange
    }

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit(); //onSubmit
    }

    return (
        <div>
            <h1>My Form</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label> Userame:
                    <input
                        type="text"
                        name="username"
                        value={username.trim()}
                        onChange={onChange}
                    />
                </label>
                <label> Email:
                    <input
                        type="email"
                        name="email"
                        value={email.trim()}
                        onChange={onChange}
                    />
                </label>
                <label> Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label> Terms of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        
    )
}

export default Form;