import styles from './Content_Home.module.scss';
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
import {
    PieChartWithNeedle,
    SimpleTreemap,
    PieChartWithPaddingAngle,
    PieChartWithCustomizedLabel,
    BarChartNoPadding,
    LegendEffectOpacity,
} from '~/Components/chart';
const cx = classNames.bind(styles);

function Content_Home() {
    return (
        <div className={cx('content')}>
            <div className={cx('content_1_top')}>
                <div className={cx('content_2')}>
                    <div className={cx('content_3')}>
                        <div className={cx('content_4')}>
                            <div className={cx('content_5')}>
                                Agents total contacts
                            </div>
                            <div className={cx('content_5')}>a Today</div>
                        </div>
                        <div className={cx('content_4_right')}>
                            <div className={cx('icon-search')}>a</div>
                            <div className={cx('icon-menu')}>b</div>
                        </div>
                    </div>
                    <div className={cx('content3-bot')}>541</div>
                </div>
                <div className={cx('content_2')}>
                    <div className={cx('content_3')}>
                        <div className={cx('content_4')}>
                            <div className={cx('content_5')}>Service level</div>
                            <div className={cx('content_5')}>a Today</div>
                        </div>
                        <div className={cx('content_4_right')}>
                            <div className={cx('icon-search')}>a</div>
                            <div className={cx('icon-menu')}>b</div>
                        </div>
                    </div>
                    <div className={cx('content3-bot')}>
                        <PieChartWithNeedle />
                    </div>
                </div>
                <div className={cx('content_2')}>
                    <div className={cx('content_3')}>
                        <div className={cx('content_4')}>
                            <div className={cx('content_5')}>
                                Average wait time
                            </div>
                            <div className={cx('content_5')}>a Today</div>
                        </div>
                        <div className={cx('content_4_right')}>
                            <div className={cx('icon-search')}>a</div>
                            <div className={cx('icon-menu')}>b</div>
                        </div>
                    </div>
                    <div className={cx('content3-bot')}>
                        <PieChartWithCustomizedLabel />
                    </div>
                </div>
                <div className={cx('content_2')}>
                    <div className={cx('content_3')}>
                        <div className={cx('content_4')}>
                            <div className={cx('content_5')}>
                                Longest wait time
                            </div>
                            <div className={cx('content_5')}>a Today</div>
                        </div>
                        <div className={cx('content_4_right')}>
                            <div className={cx('icon-search')}>a</div>
                            <div className={cx('icon-menu')}>b</div>
                        </div>
                    </div>
                    <div className={cx('content3-bot')}>
                        <PieChartWithPaddingAngle />
                    </div>
                </div>
            </div>
            <div className={cx('content_1_bot')}>
                <div className={cx('content_2')}>
                    <div className={cx('content_3')}>
                        <div className={cx('content_4')}>
                            <div className={cx('content_5')}>
                                Agents total contacts
                            </div>
                            <div className={cx('content_5')}>a Today</div>
                        </div>
                        <div className={cx('content_4_right')}>
                            <div className={cx('icon-search')}>a</div>
                            <div className={cx('icon-menu')}>b</div>
                        </div>
                    </div>
                    <div className={cx('.content3-bot-content')}>
                        <LegendEffectOpacity />
                    </div>
                </div>
                <div className={cx('content_2')}>
                    <div className={cx('content_3')}>
                        <div className={cx('content_4')}>
                            <div className={cx('content_5')}>
                                Agents total contacts
                            </div>
                            <div className={cx('content_5')}>a Today</div>
                        </div>
                        <div className={cx('content_4_right')}>
                            <div className={cx('icon-search')}>a</div>
                            <div className={cx('icon-menu')}>b</div>
                        </div>
                    </div>
                    <div className={cx('.content3-bot-content')}>
                        <SimpleTreemap />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content_Home;
