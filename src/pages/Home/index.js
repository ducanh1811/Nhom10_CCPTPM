import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import {
    Login,
    CheckLogin,
    Header,
    Footer,
    Top,
    Content_Home,
} from '~/Components/Layout';
function Home() {
    const cx = classNames.bind(styles);
    return (
        <>
            <Top />
            <Content_Home />
        </>
    );
}

export default Home;
