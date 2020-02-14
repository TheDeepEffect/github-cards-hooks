import React, { useState } from 'react';

const Input = ({ addCard }) => {
    const [value, setValue] = useState('');

    const onInputChange = (e) => {
        setValue(e.target.value)
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        addCard(value);
        setValue('');

    };



    return (
        <div className="username-input">
            <form onSubmit={e => onHandleSubmit(e)} >
                <div className="ui input labeled" >
                    <pre className="ui label" >
                        https//:github.com/
            </pre>
                    <input type="text"
                        name="userName"
                        value={value}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

            </form>
        </div>
    );
}
export default Input;