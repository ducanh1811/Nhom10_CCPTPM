import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPersonRifle as user,
    faCircleXmark as close,
    faSpinner as loading,
    faMagnifyingGlass as search,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/Components/Popper';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    className={cx('logo')}
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    <img src={images.logo} alt="talkdesk" />
                </div>
                <div
                    className={cx('menu')}
                    onMouseEnter={() => {
                        console.log('Enter');
                    }}
                >
                    <ul>PRODUCTS</ul>
                    <ul>SOLUTIONS</ul>
                    <ul>CUSTOMERS</ul>
                    <ul>SUPPORT</ul>
                    <ul>RESOURCES</ul>
                    <ul>ABOUT</ul>
                </div>
                <div className={cx('actions')}>
                    <a
                        href="https://www.talkdesk.com/login"
                        className={cx('login')}
                        title="Talkdesk Enterprise Platform Login page"
                    >
                        {' '}
                        <FontAwesomeIcon
                            style={{
                                fontSize: '20px',
                                color: '#5405bd',
                                margin: '10px',
                            }}
                            icon={user}
                        />{' '}
                    </a>
                    <button className={cx('search')} title="Search">
                        {' '}
                        <FontAwesomeIcon
                            style={{
                                fontSize: '20px',
                                color: '#5405bd',
                                margin: '10px',
                            }}
                            icon={search}
                        />{' '}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
