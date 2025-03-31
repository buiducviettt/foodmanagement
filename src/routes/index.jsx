import Homepage from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Setting from '../pages/Settings';
import Discount from '../pages/Discount';
export const publicRoutes = [
  {
    path: '/discount',
    component: Discount,
  },
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
