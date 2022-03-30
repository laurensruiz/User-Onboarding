import React from "react";

const Form = (props) => {
    const { change, submit } = props;
    const {name, email, password, checked} = props.values;

    const onChange =(evt) => {
        const {name, value, checked, type} = evt.target
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>My Form</h1>
            <form onSubmit={onSubmit}>
                <label> Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label> Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
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
                        checked={checked}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        
    )
}

export default Form;