import styles from './admin.module.scss';
import classNames from 'classnames/bind';
import { NavBarLeft } from './components';
import Content from './components/Content';
import { useState } from 'react';
function Admin() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <NavBarLeft />
            </div>
            <div className={cx('content')}>
                <Content />
            </div>
        </div>
    );
}

export default Admin;
