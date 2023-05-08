import {
    MailOutlined,
    SettingOutlined,
    UserAddOutlined,
    AppstoreAddOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import styles from './navbarleft.module.scss';
import classNames from 'classnames/bind';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('App', 'sub2', <AppstoreOutlined />, [
        getItem('List User', '1', <UserAddOutlined />),
        getItem('Option 6', '2'),
        getItem('Submenu', 'sub3', null, [
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),
    ]),
    {
        type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9', <UserAddOutlined />),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem(
        'Group',
        'grp',
        null,
        [getItem('Option 13', '13'), getItem('Option 14', '14')],
        'group',
    ),
];
const NavBarLeft = () => {
    const cx = classNames.bind(styles);
    const [flag, setFlag] = useState(0);
    const onClick = (e) => {
        if (e.key === '1') {
            setFlag(1);
            console.log(flag);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Menu
                onClick={onClick}
                className={cx('menu')}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                mode="inline"
                items={items}
            />
        </div>
    );
};
export default NavBarLeft;
