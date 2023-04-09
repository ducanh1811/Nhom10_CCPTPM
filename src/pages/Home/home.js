import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import {
    Login,
    CheckLogin,
    Header,
    Top,
    Content_Home,
} from '~/Components/Layout';
function Home() {
    const cx = classNames.bind(styles);
    return (
        <>
            <Header />
            <Top />
            <Content_Home />
        </>
    );
}

export default Home;
