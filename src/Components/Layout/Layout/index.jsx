import { Outlet } from 'react-router-dom';
import { Header, Footer } from '~/Components/Layout';
//import ModelLogin from "../Login/ModelLogin/index";
export default function Layout() {
    return (
        <div>
            {/* <ModelLogin/> */}
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
