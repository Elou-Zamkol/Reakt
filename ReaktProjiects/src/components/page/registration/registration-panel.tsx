import "./registration-panel.css"
import React, {Component} from 'react';
import withNavigation from "../../withNavigation";
import { withTranslation } from "react-i18next";


//===============================================================

interface RegistrationPanelProps {
  navigate: (path: string) => void;
  t: any;
}

interface RegistrationPanelState {
  Name: string;
  Email: string;
  Password: string;
  confirmPassword: string;
  Flag: boolean;
  ErrorMessage: string;
}

interface StoredUser {
  Email: string;
  Password: string;
}

//===============================================================

class RegistrationPanel extends Component<RegistrationPanelProps, RegistrationPanelState> {

    state: RegistrationPanelState = {

        Name: '',
        Email: '',
        Password: '',
        confirmPassword: '',

        Flag: true,
        ErrorMessage: '',
    };

    showLogin = () => {
        this.setState({ Flag: false, ErrorMessage: '', Password: '', Email: '', confirmPassword: '', Name: ''  });
    }

    showRegistration = () => {
        this.setState({ Flag: true, ErrorMessage: '', Password: '', Email: '' });
    }
    //-------------------------------------------------------



    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });

    };


    handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.Registration();
    }


    handleEntrance = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.Entrance();
    }




    //--------------------------------------

    async Registration() {
        const { Name, Email, Password, confirmPassword } = this.state;

        const storedUserRaw = localStorage.getItem(this.state.Email);
        const storedUser: StoredUser | null = storedUserRaw ? JSON.parse(storedUserRaw) : null;


        const validations: { value: string; min: number; message: string }[] = [
            { value: Name, min: 4, message: this.props.t("Имя должно быть как минимум из 4 символов") },
            { value: Email, min: 7, message: this.props.t("Email должно быть как минимум из 7 символов") },
            { value: Password, min: 6, message: this.props.t("Пароль должно быть как минимум из 6 символов") },
            { value: confirmPassword, min: 6, message: this.props.t("Подтверждение пароля должно быть как минимум из 6 символов") }
        ];


        for (let check of validations) {
            if (check.value.length < check.min) {
                this.setState({ ErrorMessage: check.message});
                return;
            }
        }


        if (storedUser !== null) {
            this.setState({ ErrorMessage: this.props.t("Пользователь с таким email уже существует")});
            return;
        } else if (Password !== confirmPassword) {
            this.setState({ ErrorMessage: this.props.t("Пароли не совпадают")});
            return;
        }

        this.props.navigate('/welcome');
    }


    async Entrance () {
        const { Email, Password } = this.state;
        this.props.navigate('/welcome');
    }



    render() {
        const { t } = this.props;
        return (
        <div className="auth-container">

            {this.state.ErrorMessage && ( <p className="error-message">{t(this.state.ErrorMessage)}</p> )}


                <div className={`registration-panel ${this.state.Flag ? "visible" : ""}`}>

                    <h1>{t('registration')}</h1>

                    <form id="registerForm" onSubmit={this.handleRegistration}>
                        <label htmlFor="registerUsername">{t('username')}</label>
                        <input type="text" id="registerUsername" name="Name" placeholder={t('enter_name')} value={this.state.Name} onChange={this.handleChange} required />

                        <label htmlFor="registerEmail">{t('email')}</label>
                        <input type="email" id="registerEmail" name="Email" placeholder={t('enter_email')} value={this.state.Email} onChange={this.handleChange} required />

                        <label htmlFor="registerPassword">{t('password')}</label>
                        <input type="password" id="registerPassword" name="Password" placeholder={t('enter_password')} value={this.state.Password} onChange={this.handleChange} required />

                        <label htmlFor="confirmPassword">{t('confirm_password')}</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder={t('confirm_password')} value={this.state.confirmPassword} onChange={this.handleChange} required />

                        <button type="submit" id="buttonRegister">{t('register')}</button>
                    </form>

                    <p className="switch-link">
                        {t('already_have_account')} <a href="#" onClick={this.showLogin}>{t('login')}</a>
                    </p>
                </div>

                <div className={`login-panel ${!this.state.Flag ? "visible" : ""}`}>

                    <h1>{t('login')}</h1>

                    <form id="loginForm" onSubmit={this.handleEntrance}>
                        <label htmlFor="loginEmail">{t('email')}</label>
                        <input type="email" id="loginEmail" name="Email" placeholder={t('enter_email')} value={this.state.Email} onChange={this.handleChange} required />

                        <label htmlFor="loginPassword">{t('password')}</label>
                        <input type="password" id="loginPassword" name="Password" placeholder={t('enter_password')} value={this.state.Password} onChange={this.handleChange} required />

                        <button type="submit" id="buttonEntrance">{t('login')}</button>
                    </form>

                    <p className="switch-link">
                        {t('no_account')} <a href="#" onClick={this.showRegistration}>{t('register')}</a>
                    </p>

                </div>
        </div>
        )
    }
}

export default withNavigation(withTranslation()(RegistrationPanel));