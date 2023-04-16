import styles from './Top.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Top() {
    const navigate = useNavigate();
    var context = [
        'Explore',
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
                        <span
                            onClick={() => {
                                navigate(`/${item.toLowerCase()}`);
                            }}
                            className={cx('font-text')}
                            key={index}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
        </header>
    );
}

export default Top;
