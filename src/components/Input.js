import React, { useState } from 'react';
import axios from 'axios';

const Input = ({ addCard }) => {
    const [value, setValue] = useState('');

    const onInputChange = e => {
        setValue(e.target.value);
    };
    const onHandleSubmit = async e => {
        e.preventDefault();
        const { data } = await axios.get(`https://api.github.com/users/${value}`);
        addCard(data);
        setValue('');
    };
    return (
        <div className="username-input">
            <form onSubmit={e => onHandleSubmit(e)}>
                <div className="ui input labeled">
                    <pre className="ui label">https//:github.com/</pre>
                    <input type="text" name="userName" value={value} onChange={e => onInputChange(e)} />
                </div>
            </form>
        </div>
    );
};
export default Input;
