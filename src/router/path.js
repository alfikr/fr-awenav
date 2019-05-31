import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Login from '@/views/Login'
import Topup from '@/views/Topup'
import Widraw from '@/views/Widraw'
import Dashboard from '@/component/Dashboard'
export default[{
    path: '/Home',
    component: Home
},{
    path:'/profile',
    component: Profile
},{
    path:'/login',
    component: Login
},{
    path:'/Home/dasboard',
    component:Dashboard
}]