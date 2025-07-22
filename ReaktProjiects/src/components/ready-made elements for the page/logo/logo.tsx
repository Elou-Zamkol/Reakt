import "./logo.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Logo() {
    //==============Falg==================

    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    //========================Язык=======================================

    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.toUpperCase();

    //===============================================================

    const [avatar, setAvatar] = useState(() => localStorage.getItem("userAvatar") || "/public/avatar-default-svgrepo-com.svg");


    //===============================================================


    const toggleMenu = () => setMenuOpen(!isMenuOpen);


    const handleLogout = (e: any) => {
        e.preventDefault();
        navigate("/");
    };

    const goToHome = (e: any) => {
        e.preventDefault();
        navigate("/welcome");
    };


    //===============================================================


    // Функция для обработки изменения аватара я взял с GPT я не знаю как это делать
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result as string);
            localStorage.setItem("userAvatar", reader.result as string);
        };
        reader.readAsDataURL(file);
    };


    useEffect(() => {
        const handleClickOutside = (e: any) => {

            if (menuRef.current && !(menuRef.current as any).contains(e.target)) setMenuOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);


    return (
        <div className="Menu-and-search">

            <svg className="logo" onClick={goToHome} xmlns="http://www.w3.org/2000/svg" width="380" height="70">
                <rect x="0" y="0" width="60" height="60" rx="14" fill="#1a1a1a" stroke="#f1c40f"
                      strokeWidth="2"/>

                <ellipse cx="30" cy="50" rx="26" ry="7" fill="#fff7cc" opacity="0.09"/>

                <rect x="9" y="27" width="8" height="25" fill="#222" stroke="#f1c40f" strokeWidth="1"/>
                <rect x="11" y="32" width="2" height="3" fill="#f1c40f"/>
                <rect x="11" y="36" width="2" height="3" fill="#f1c40f"/>
                <rect x="11" y="40" width="2" height="3" fill="#f1c40f"/>

                <rect x="21" y="12" width="13" height="40" fill="#f1c40f" stroke="#e1b000" strokeWidth="1.5"/>
                <rect x="25" y="17" width="2" height="4" fill="#1a1a1a"/>
                <rect x="25" y="24" width="2" height="4" fill="#1a1a1a"/>
                <rect x="25" y="31" width="2" height="4" fill="#1a1a1a"/>
                <rect x="29" y="17" width="2" height="4" fill="#1a1a1a"/>
                <rect x="29" y="24" width="2" height="4" fill="#1a1a1a"/>
                <rect x="29" y="31" width="2" height="4" fill="#1a1a1a"/>
                <rect x="25" y="38" width="6" height="4" fill="#1a1a1a" opacity="0.2"/>

                <rect x="27.5" y="5" width="2" height="9" fill="#f1c40f"/>
                <circle cx="28.5" cy="4.5" r="1.2" fill="#fff7cc" stroke="#f1c40f" strokeWidth="0.6"/>

                <rect x="39" y="23" width="6" height="29" fill="#232323" stroke="#f1c40f" strokeWidth="1"/>
                <rect x="41" y="28" width="2" height="3" fill="#f1c40f"/>
                <rect x="41" y="33" width="2" height="3" fill="#f1c40f"/>
                <rect x="41" y="38" width="2" height="3" fill="#f1c40f"/>
                <rect x="41" y="43" width="2" height="3" fill="#f1c40f"/>

                <rect x="48" y="37" width="4" height="15" fill="#f1c40f" opacity="0.7" stroke="#e1b000"
                      strokeWidth="0.8"/>
                <rect x="49" y="42" width="2" height="3" fill="#1a1a1a"/>

                <text x="75" y="42" fontFamily="Montserrat, Arial, sans-serif" fontWeight="800"
                      fontSize="28" fill="#f1c40f" letterSpacing="1.5">The golden
                    <tspan fill="#fff7cc"> house</tspan>
                </text>
            </svg>



            <div className="user-profile" onClick={toggleMenu} ref={menuRef}>

                <img className="avatar" src={avatar} alt={t('avatar')}/>

                <div className="user-info">
                    <div className="user-name">{t('raul')}</div>
                    <div className="user-email">raul@example.com</div>
                </div>

                {isMenuOpen && (
                    <div className="account-dropdown">

                        <label className="dropdown-btn" onClick={e => e.stopPropagation()}>
                            🖼 {t('change_avatar')}
                            <input type="file" accept="image/*" onChange={handleAvatarChange} hidden />
                        </label>

                        <div className="language-selector">
                            <span>🌐 {t('language')} ( {currentLang} )</span>
                            <div className="language-dropdown">
                                <div onClick={() => i18n.changeLanguage('ru')}>Русский</div>
                                <div onClick={() => i18n.changeLanguage('en')}>English</div>
                                <div onClick={() => i18n.changeLanguage('az')}>Azərbaycan</div>
                            </div>
                        </div>

                        <button onClick={handleLogout}>{t('logout')}</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Logo;
