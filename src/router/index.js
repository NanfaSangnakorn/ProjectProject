import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Data from '../components/Data.vue';
import AddData from '../components/AddData.vue';
import Login from '../components/Login.vue';
import Logout from '../components/Logout.vue';
import Signup from '../components/Signup.vue';
import Photo from '../components/Photo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Data',
    name: 'Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Data,
  },

  {
    path: '/',
    name: 'Login',
    component: Login,
  },

  {
    path: '/Logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/Photo',
    name: 'Photo',
    component: Photo,
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },

  {
    path: '/AddData',
    name: 'AddData',
    component: AddData,
  },
  {
    path: '/zoneA',
    name: 'zoneA',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneA.vue'),
  },
  {
    path: '/zoneB',
    name: 'zoneB',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneB.vue'),
  },
  {
    path: '/zoneC',
    name: 'zoneC',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneC.vue'),
  },
  {
    path: '/zoneD',
    name: 'zoneD',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneD.vue'),
  },
  {
    path: '/zoneE',
    name: 'zoneE',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneE.vue'),
  },
  {
    path: '/zoneF',
    name: 'zoneF',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneF.vue'),
  },
  {
    path: '/zoneG',
    name: 'zoneG',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneG.vue'),
  },
  {
    path: '/zoneH',
    name: 'zoneH',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneH.vue'),
  },
  {
    path: '/zoneI',
    name: 'zoneI',
    component: () => import(/* webpackChunkName: "about" */ '../views/zoneI.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
