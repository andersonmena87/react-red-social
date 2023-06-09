import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Feed } from '../components/publication/Feed';
import { Login } from '../components/user/Login';
import { Logout } from '../components/user/Logout';
import { People } from '../components/user/People';
import { Update } from '../components/user/Update';
import { Register } from '../components/user/Register';
import { AuthProvider } from '../context/AuthProvider';
import { Following } from '../components/follow/Following';
import { Followers } from '../components/follow/Followers';
import { Profile } from '../components/user/Profile';

export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<PublicLayout />} >
                        {/* Index indica la ruta por defecto */}
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='registro' element={<Register />} />
                    </Route>

                    <Route path='/social' element={<PrivateLayout />}>
                        <Route index element={<Feed />} />
                        <Route path='feed' element={<Feed />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path='people' element={<People />} />
                        <Route path='update' element={<Update />} />
                        <Route path='siguiendo/:userId' element={<Following />} />
                        <Route path='seguidores/:userId' element={<Followers />} />
                        <Route path='perfil/:userId' element={<Profile />} />
                    </Route>

                    <Route path="*" element={
                        <>
                            <div>
                                <h1>Error 404</h1>
                                <Link to="/">Volver al inicio</Link>
                            </div>
                        </>
                    } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
