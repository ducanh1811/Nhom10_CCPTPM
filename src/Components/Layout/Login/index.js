import { Navigate } from 'react-router-dom';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
export default function Login() {
    const cx = classNames.bind(styles);
    var isLogin = localStorage.getItem('isLogin');

    // var username = JSON.stringify(localStorage.getItem('username'));
    // var password = JSON.stringify(localStorage.getItem('password'));
    if (isLogin == 'true') {
        return <Navigate to="/home" />;
    }

    function login(username_input, password_input) {
        if ('ducanh' == username_input && 'anh181102' == password_input) {
            localStorage.setItem('isLogin', true);
            window.location.href = '/home';
        } else alert('Username or Password is incorrect');
    }
    return (
        <div className={cx('body')}>
            <div className={cx('wrapper')}>
                <h1>Login</h1>
                <span></span>
                <div className={cx('form')}>
                    <div className={cx('inputs')}>
                        <div className={cx('input')}>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        {/* <div className={cx("input">
                        <input type="email" placeholder="Email" />
                        <div className={cx("error-input"></div>
                        <span></span>
                    </div> */}
                        <div className={cx('input')}>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <div className={cx('error-input')}></div>
                            <span></span>
                        </div>
                        {/* <div className={cx("input">
                        <input type="password" placeholder="Confirm Password" />
                        <div className={cx("error-input"></div>
                        <span></span>
                    </div> */}
                    </div>
                    <button
                        onClick={() => {
                            var username_input =
                                document.getElementsByName('username')[0].value;
                            var password_input =
                                document.getElementsByName('password')[0].value;
                            login(username_input, password_input);
                        }}
                    >
                        Login
                    </button>
                    {/* <div className={cx('signup')}>
                        Already have an account?
                        <a href="#"> Signup</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
