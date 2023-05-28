import { createBrowserRouter } from 'react-router-dom'
import Auth from '../components/Auth'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
            errorElement: <PageNotFound />
        },
        {
            path: '/auth',
            element: <Auth />
        },
        {
            path: '/home',
            element: <Home />
        }
    ]
)


export default router;