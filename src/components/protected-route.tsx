//로그인한 사용자만 protected route를 볼수 있다.

import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

//로그인 하지 않은경우 로그인 또는 계정생성 페이지로 리디렉션 한다.
export default function ProtectedRoute({ children }:{ children: React.ReactNode}) {
    const user = auth.currentUser;
    if (!user) {
    return <Navigate to="/login" replace />;
    }
    return children;
}