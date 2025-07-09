// withNavigation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Это функция-обёртка
export function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}
