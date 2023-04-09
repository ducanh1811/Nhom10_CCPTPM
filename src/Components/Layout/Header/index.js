import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGridRound as faAppleWhole,
    faGraduationCap as graduationCap,
    faCaretDown as caretDown,
    faPersonRifle as user,
    faCircleXmark as close,
    faSpinner as loading,
    faMagnifyingGlass as search,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import iconapp from '~/assets/images';
import logo from '~/assets/images/logo.jpeg';
import avatar from '~/assets/images/newcv.jpg';
import { Wrapper as PopperWrapper } from '~/Components/Popper';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    className={cx('logo')}
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    <img src={logo} alt="talkdaesk" />
                </div>
                <div
                    className={cx('menu')}
                    onMouseEnter={() => {
                        console.log('Enter');
                    }}
                >
                    <ul>Calls</ul>
                    <ul>Contacts</ul>
                    <ul>Voicemail</ul>
                    <ul>Teams</ul>
                    <ul>Reporting</ul>
                    <ul>Admin</ul>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('app')}>
                        <img src={iconapp.icon_app} alt="icon_app" />
                        <div className={cx('text_app')}>Apps</div>
                        <FontAwesomeIcon
                            icon={caretDown}
                            style={{
                                color: '#ffffff',
                                fontSize: '12px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                        />
                    </div>
                    <div className={cx('browser')}>
                        <div className={cx('text_app')}>Browser mode</div>
                        <FontAwesomeIcon
                            icon={caretDown}
                            style={{
                                color: '#ffffff',
                                fontSize: '12px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                        />
                    </div>
                    <div className={cx('avatar')}>
                        <div className={cx('image_avatar')}>
                            <img src={avatar} alt="icon_avatar" />
                        </div>
                        <div className={cx('text_app')}>Avallable</div>
                        <FontAwesomeIcon
                            icon={caretDown}
                            style={{
                                color: '#ffffff',
                                fontSize: '12px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                        />
                    </div>

                    <div className={cx('avatar')}>
                        <div
                            className={cx('logout')}
                            onClick={() => {
                                console.log('Logout');
                                localStorage.removeItem('isLogin');
                                window.location.href = '/login';
                            }}
                        >
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
