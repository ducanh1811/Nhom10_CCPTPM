import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import { Login, CheckLogin } from '~/Components/Layout';
import GlobalStyle from '~/Components/GlobalStyles/GlobalStyle';
import {
    Navigate,
    Outlet,
    BrowserRouter as Router,
    RouterProvider as RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import Home from '~/pages/Home/home';

const myRouter = createBrowserRouter([
    {
        path: '/home',
        element: (
            <>
                <CheckLogin>
                    <Home />
                </CheckLogin>
                {/* <Outlet />
                <Button type="primary" ghost>
                    Primary
                </Button>
                <Button icon={<SearchOutlined />}>Search</Button> */}
            </>
        ),
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
