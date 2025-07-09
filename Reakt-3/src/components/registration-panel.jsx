import "./registration-panel.css"
import React, {Component} from 'react';
import bcrypt from 'bcryptjs';
import { withNavigation } from './withNavigation.jsx';


class RegistrationPanel extends Component{
    state = {
        Name: '',
        Email: '',
        Password: '',
        confirmPassword: '',
        Flag: true,
        ErrorMessage: '',

    };


    showLogin = () => {
        this.setState({ Flag: false, ErrorMessage: '', Password: '', Email: '', ConfirmPassword: '', Name: ''  });
    }

    showRegistration = () => {
        this.setState({ Flag: true, ErrorMessage: '', Password: '', Email: '' });
    }
    //-------------------------------------------------------

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleRegistration = (event) => {
        event.preventDefault();  // отменяем перезагрузку страницы
        this.Registration();
    }
    handleEntrance = (event) => {
        event.preventDefault();
        this.Entrance();
    }

    //--------------------------------------


    async Registration() {
        const { Name, Email, Password, confirmPassword } = this.state;

        const storedUser = JSON.parse(localStorage.getItem(this.state.Email));

        //-----------------------------------------------------------------------------------------------

        const validations = [
            { value: Name, min: 4, message: "Имя должно быть как минимум из 4 символов" },
            { value: Email, min: 7, message: "Email должно быть как минимум из 7 символов" },
            { value: Password, min: 6, message: "Пароль должно быть как минимум из 6 символов" },
            { value: confirmPassword, min: 6, message: "Подтверждение пароля должно быть как минимум из 6 символов" }
        ];

        for (let check of validations) {
            if (check.value.length < check.min) {
                this.setState({ ErrorMessage: check.message});
                return;
            }
        }

        if (storedUser !== null) {
            this.setState({ ErrorMessage: "Пользователь с таким email уже существует"});
            return;
        } else if (Password !== confirmPassword) {
            this.setState({ ErrorMessage: "Пароли не совпадают"});
            return;
        }

        //-----------------------------------------------------------------------------------------------

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);

        let user = {
            Name: Name,
            Password: hashedPassword,
        };
        localStorage.setItem(Email, JSON.stringify(user));
        sessionStorage.setItem("UserEmail", Email);
        this.props.navigate('/welcome');

    }

    async Entrance () {

        const { Email, Password } = this.state;

        const storedUserStr = localStorage.getItem(Email);

        //-----------------------------------------------------------------------------------------------
        if (storedUserStr === null) { this.setState({ ErrorMessage: "Такого пользователя нет" }); return; }

        const storedUser = JSON.parse(storedUserStr);


        const isMatch = await bcrypt.compare(Password, storedUser.Password);

        if (!isMatch) {this.setState({ ErrorMessage: "Пароль не верный" }); return; }

        //-----------------------------------------------------------------------------------------------
        sessionStorage.setItem("UserEmail", Email);
        this.props.navigate('/welcome');

    }


    render() {
        return (

        <div className="auth-container">
            {this.state.ErrorMessage && (
                <p className="error-message">{this.state.ErrorMessage}</p>
            )}
                <div className={`registration-panel ${this.state.Flag ? "visible" : ""}`}>
                    <h1>Регистрация</h1>
                    <form id="registerForm" onSubmit={this.handleRegistration}>
                        <label htmlFor="registerUsername">Имя пользователя</label>
                        <input type="text" id="registerUsername" name="Name" placeholder="Введите имя" value={this.state.Name} onChange={this.handleChange} required />

                        <label htmlFor="registerEmail">Email</label>
                        <input type="email" id="registerEmail" name="Email" placeholder="Введите email" value={this.state.Email} onChange={this.handleChange} required />

                        <label htmlFor="registerPassword">Пароль</label>
                        <input type="password" id="registerPassword" name="Password" placeholder="Введите пароль" value={this.state.Password} onChange={this.handleChange} required />

                        <label htmlFor="confirmPassword">Подтвердите пароль</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Подтвердите пароль" value={this.state.confirmPassword} onChange={this.handleChange} required />

                        <button type="submit" id="buttonRegister">Зарегистрироваться</button>
                    </form>
                    <p className="switch-link">
                        Уже есть аккаунт? <a href="#" onClick={this.showLogin}>Войти</a>
                    </p>
                </div>




                <div className={`login-panel ${!this.state.Flag ? "visible" : ""}`}>

                    <h1>Вход</h1>
                    <form id="loginForm" onSubmit={this.handleEntrance}>
                        <label htmlFor="loginEmail">Email</label>
                        <input type="email" id="loginEmail" name="Email" placeholder="Введите email" value={this.state.Email} onChange={this.handleChange} required />

                        <label htmlFor="loginPassword">Пароль</label>
                        <input type="password" id="loginPassword" name="Password" placeholder="Введите пароль" value={this.state.Password} onChange={this.handleChange} required />

                        <button type="submit" id="buttonEntrance">Войти</button>

                    </form>

                    <p className="switch-link">
                        Нет аккаунта? <a href="#" onClick={this.showRegistration}>Зарегистрироваться</a>
                    </p>
                </div>
        </div>
        )
    }
}

export default withNavigation(RegistrationPanel);