import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
                    <img src={images.logo} alt="TikTok" />
                </div>

                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>Ketqua</PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck="false"
                        />
                        {/* <button className={cx('clear')}>
                        <FontAwesomeIcon icon={close} />
                    </button> */}
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={loading}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={search} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <div className="container--right">
                        <a
                            href="https://account.talkdeskid.com/select/cc"
                            className="profile__open"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Talkdesk Enterprise Platform Login page"
                        >
                            <i className="icon-ui-profile -size-24"></i>
                        </a>
                        <button
                            className="text globalsearch__open"
                            title="Search"
                            type="button"
                        >
                            <i className="icon-ui-search -size-24"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
