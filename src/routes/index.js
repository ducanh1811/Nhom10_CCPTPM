// Description: This file contains all the routes of the application
import Home from '~/pages/Home/home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// publicRoutes: Routes that are accessible to all users
const publicRoutes = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/following',
        element: <Following />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/upload',
        element: <Upload />,
    },
    {
        path: '/search',
        element: <Search />,
        layout: null,
    },
];

// privateRoutes: Routes that are only accessible to authenticated users
const privateRoutes = [];

export { publicRoutes, privateRoutes };
