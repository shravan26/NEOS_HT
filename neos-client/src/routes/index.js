import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/Register';
import Login from '../components/Login';

Vue.use(Router);

const router = new Router({
    mode : 'history',
    base : process.env.BASE_URL,
    routes : [{
        path : '/login',
        name : 'login',
        component : Login
    },
    {
        path : '/signup',
        name : 'signup',
        component : Register
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component : () => import('@/pages/Dashboard')
    }
]
});

export default router
