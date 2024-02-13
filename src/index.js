import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { UserContext } from './context/userContext/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContext>
    <App/>
    </UserContext>

);


