import logo from './logo.svg';
import './App.css';
import { createContext, Fragment, useState } from 'react';
import { Context } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/index';
import { DefaultLayout } from '~/Components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Layout>{route.element}</Layout>}
                            />
                        );
                    })}
                </Routes>
                <p
                    style={{
                        font: 'normal normal bold 15px/30px Helvetica',
                    }}
                >
                    CHAO DUC ANH
                </p>
            </div>
        </Router>
    );
}

export default App;
export { Context };
