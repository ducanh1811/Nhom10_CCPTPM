import logo from './logo.svg';
import './App.css';
import {
    createContext,
    Fragment,
    useState,
    Context,
    PureComponent,
} from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/index';
import { DefaultLayout } from '~/Components/Layout';
import {
    PieChartWithNeedle,
    SimpleTreemap,
    LegendEffectOpacity,
} from '~/Components/chart';
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
                <PieChartWithNeedle />
                <SimpleTreemap />
                <LegendEffectOpacity />
            </div>
        </Router>
    );
}

export default App;
export { Context };
