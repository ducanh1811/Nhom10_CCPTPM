import {
    PieChartWithNeedle,
    SimpleTreemap,
    PieChartWithPaddingAngle,
    PieChartWithCustomizedLabel,
    BarChartNoPadding,
    LegendEffectOpacity,
} from '~/Components/chart';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
function Home() {
    const cx = classNames.bind(styles);
    return (
        <>
            <div className={cx('content')}>
                <div className={cx('inarow')}>
                    <PieChartWithNeedle />
                    <SimpleTreemap />
                    <LegendEffectOpacity />
                </div>
                <div className={cx('inarow')}>
                    <PieChartWithCustomizedLabel />
                    <PieChartWithPaddingAngle />
                    <BarChartNoPadding />
                </div>
            </div>
        </>
    );
}

export default Home;
