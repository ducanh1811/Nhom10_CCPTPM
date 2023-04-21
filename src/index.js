import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import { Login, Layout, CheckLogin, Header } from '~/Components/Layout';
import { Home, Explore } from '~/pages';
import Admin from '~/pages/Admin/index';
import GlobalStyle from '~/Components/GlobalStyles/GlobalStyle';
import {
    Navigate,
    Outlet,
    BrowserRouter as Router,
    RouterProvider as RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <CheckLogin>
                <Layout />
            </CheckLogin>
        ),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'explore/',
                element: <Explore />,
            },
            {
                path: 'admin/',
                element: <Admin />,
            },
        ],
    },
    {
        path: '/login',
        element: (
            <>
                <Login />
            </>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={myRouter} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
