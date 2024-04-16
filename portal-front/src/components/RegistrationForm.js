import React, {useState} from 'react';
import '../styles/registration.css';
import axios from "axios";

//TODO: Использовать для локального обращения к бэкенду
const BASE_URL = "http://localhost:8080";

function RegistrationForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //TODO: Использовать base_url. Обработать ответы и ошибки
            const response = await axios.post(`http://localhost:8080/api/v1/registry`,
                {
                name: userName,
                email,
                password
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            console.log('Registration successful');
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    };

    return (
        <form className="registration" onSubmit={handleSubmit}>
            <input
                className="login"
                type="text"
                placeholder="Имя пользователя"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
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
            <button className="btn-sign" type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default RegistrationForm;
