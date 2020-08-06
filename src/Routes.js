import { Home, AccountCircle } from '@material-ui/icons';
import {Overview} from "./app/content/Overview";
import {Account} from "./app/content/Account";

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        navbarName: 'Home',
        icon: Home,
        component: Overview
    },
    {
        path: '/account',
        sidebarName: 'Profile',
        navbarName: 'Profile',
        icon: AccountCircle,
        component: Account
    }
];

export default Routes;