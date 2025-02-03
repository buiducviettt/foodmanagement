import Homepage from '../pages/Home';
import Dashboard from '../pages/Dashboard';
export const publicRoutes = [
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
