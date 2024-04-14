import React, { useState } from 'react';
import '../styles/signIn.css';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //TODO: Реализовать запрос
        console.log({ email, password });
    };

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <input
                className="email"
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="password"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-sign" type="submit">Войти</button>
        </form>
    );
}

export default SignInForm;
