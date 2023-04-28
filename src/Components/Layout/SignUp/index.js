import { Navigate } from 'react-router-dom';
import styles from './Signup.module.scss';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
    });
    const cx = classNames.bind(styles);
    var isLogin = localStorage.getItem('isLogin');

    console.log(info);
    // var username = JSON.stringify(localStorage.getItem('username'));
    // var password = JSON.stringify(localStorage.getItem('password'));
    if (isLogin === 'true') {
        return <Navigate to="/" />;
    }

    function login(username_input, password_input) {
        if ('ducanh' === username_input && 'anh181102' === password_input) {
            localStorage.setItem('isLogin', true);
            window.location.href = '/';
        } else alert('Username or Password is incorrect');
    }
    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <h1>Register</h1>
                <span></span>
                <div className={cx('form')}>
                    <div className={cx('inputs')}>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                placeholder="Username"
                                onChange={(e) =>
                                    setInfo(() => {
                                        // lấy ra các giá trị cũ
                                        const newInfo = { ...info };

                                        // thay đổi giá trị mới
                                        newInfo.username = e.target.value;
                                        // trả về giá trị mới
                                        return newInfo;
                                    })
                                }
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        <div className={cx('input')}>
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) =>
                                    setInfo(() => {
                                        // lấy ra các giá trị cũ
                                        const newInfo = { ...info };

                                        // thay đổi giá trị mới
                                        newInfo.email = e.target.value;
                                        // trả về giá trị mới
                                        return newInfo;
                                    })
                                }
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        <div className={cx('input')}>
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    setInfo(() => {
                                        // lấy ra các giá trị cũ
                                        const newInfo = { ...info };

                                        // thay đổi giá trị mới
                                        newInfo.password = e.target.value;
                                        // trả về giá trị mới
                                        return newInfo;
                                    })
                                }
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        <div className={cx('input')}>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(e) =>
                                    setInfo(() => {
                                        // lấy ra các giá trị cũ
                                        const newInfo = { ...info };

                                        // thay đổi giá trị mới
                                        newInfo.confirmPassword =
                                            e.target.value;
                                        // trả về giá trị mới
                                        return newInfo;
                                    })
                                }
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div
                    className={cx('button')}
                    onClick={() => {
                        var data =
                            JSON.parse(localStorage.getItem('listUser_CCPM')) ||
                            [];
                        if (
                            info.password === info.confirmPassword &&
                            info.password !== '' &&
                            info.username !== ''
                        ) {
                            data.push({
                                key: data.length + 1,
                                username: info.username,
                                name: 'User ' + data.length + 1,
                                age: 20,
                                address: 'Ho Chi Minh',
                                email: info.email,
                                password: info.password,
                                role: 'user',
                            });
                            localStorage.setItem(
                                'listUser_CCPM',
                                JSON.stringify(data),
                            );
                            alert('Register success');
                            window.location.href = '/login';
                        } else {
                            alert('Register fail');
                        }
                    }}
                >
                    Register
                </div>
            </div>
        </div>
    );
}
