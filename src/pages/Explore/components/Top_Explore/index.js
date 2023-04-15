import styles from './Top_Explore.module.scss';
import { useNavigate } from 'react-router-dom';
import App from '../TreeSlice';
import classNames from 'classnames/bind';
import { ShareAltOutlined, DeleteOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

function Top_Explore() {
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
            <div className={cx('title')}> Explore </div>
            <div className={cx('action')}>
                {' '}
                <ShareAltOutlined
                    style={{
                        marginRight: '10px',
                    }}
                />{' '}
                <DeleteOutlined
                    style={{
                        marginLeft: '10px',
                    }}
                />
            </div>
            <div className={cx('treeselect')}>
                <App />
            </div>
        </header>
    );
}

export default Top_Explore;
