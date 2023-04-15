import styles from './Content_Explore.module.scss';
import { useNavigate } from 'react-router-dom';
import App from '../TreeSlice';
import classNames from 'classnames/bind';

import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    LikeOutlined,
} from '@ant-design/icons';

import { Statistic } from 'antd';
import Coutdown2 from './Coudown';

import ChartApp from './LineChart';
import AreaChart from './AreaChart';
import Vertical from './VerticalChart';
const cx = classNames.bind(styles);

function Content_Explore() {
    const navigate = useNavigate();
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content_row')}>
                    <div className={cx('content_row_col')}>
                        <Vertical />
                    </div>
                    <div className={cx('content_row_col')}>
                        {' '}
                        <Coutdown2
                            deadline={
                                Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
                            }
                            title="Total Time Calls"
                            format="D 天 H 时 m 分 s 秒"
                        />
                    </div>
                    <div className={cx('content_row_col')}>
                        {' '}
                        <Coutdown2
                            deadline={Date.now() + 15 * 60 * 60 * 5 + 1000 * 30}
                            title="Total Time Calls"
                            format="mm:ss:SSS"
                        />{' '}
                    </div>
                </div>
                <div className={cx('content_row')}>
                    <div className={cx('content_row_col')}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{
                                color: '#3f8600',
                            }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                            style={{
                                margin: '0 auto',
                            }}
                            className={cx('statistic')}
                        />
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{
                                color: '#cf1322',
                            }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                            style={{
                                margin: '0 auto',
                            }}
                        />
                        <Statistic
                            title="Feedback"
                            style={{
                                margin: '0 auto',
                            }}
                            value={1128}
                            prefix={<LikeOutlined />}
                        />
                    </div>
                    <div className={cx('content_row_col')}>
                        {' '}
                        <ChartApp />{' '}
                    </div>
                </div>
                <div className={cx('content_row')}>
                    <div className={cx('content_row_col')}>
                        {' '}
                        <Coutdown2
                            deadline="2025-08-01 00:00:00"
                            title="Total Time Calls"
                        />{' '}
                    </div>
                    <div className={cx('content_row_col')}>
                        {' '}
                        <Coutdown2
                            deadline={
                                Date.now() + 15 * 15 * 60 * 60 * 5 + 1000 * 30
                            }
                            title="Total Time Calls"
                            format="HH:mm"
                        />
                    </div>
                    <div className={cx('content_row_col')}>
                        <AreaChart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content_Explore;
