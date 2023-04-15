import styles from './Explore.module.scss';
import classNames from 'classnames/bind';
import {
    Login,
    CheckLogin,
    Header,
    Top,
    Content_Home,
} from '~/Components/Layout';

import App from './components/TreeSlice';
import { Top_Explore, Content_Explore } from './components';

function Explore() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Top />
            <Top_Explore />
            <Content_Explore />
        </div>
    );
}

export default Explore;
