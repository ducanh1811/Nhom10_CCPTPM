import styles from './content.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { PlusCircleOutlined } from '@ant-design/icons';

import { ListUser } from './components';
function Content() {
    const navigate = useNavigate();
    const cx = classNames.bind(styles);
    return (
        <div className={cx('content')}>
            <ListUser />
        </div>
    );
}

export default Content;
