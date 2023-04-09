import styles from './Top.module.scss';
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

function Top() {
    var context = [
        'Live',
        'Inbound',
        'Service Level',
        'Outbound',
        'Agents',
        'Numbers',
        'Calls',
        'Dispositions',
        'Sentiment',
        'Scheduled',
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {context.map((item, index) => {
                    return (
                        <span className={cx('font-text')} key={index}>
                            {item}
                        </span>
                    );
                })}
            </div>
        </header>
    );
}

export default Top;
