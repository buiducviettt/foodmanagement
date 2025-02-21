import Homepage from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Setting from '../pages/Settings';
export const publicRoutes = [
  {
    path: '/setting',
    component: Setting,
  },
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
];

export const privateRoutes = [];
