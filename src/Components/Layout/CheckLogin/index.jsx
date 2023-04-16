import { Navigate, useParams } from 'react-router-dom';

export default function CheckLogin(props) {
    var isLogin = localStorage.getItem('isLogin');

    return isLogin ? props.children : <Navigate to="/login" />;
}
