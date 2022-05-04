// import {AppRouteRecordRaw} from "@/router/types";

export const RootRoute = [
    {
      path: '/',
      redirect: '/app',
      props: true,
      component: () => import('../views/Dashboard.vue'),
      name: 'Dashboard',
        view:'Dashboard',
      alias: '/dashboard'
    }
]
