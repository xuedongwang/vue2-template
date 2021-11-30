const routes = [
  {
    path: '/',
    component: () => import('@/pages/home')
  },
  {
    path: '/login',
    component: () => import('@/pages/login')
  }
];

export default routes;