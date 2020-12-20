import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Travels from '../views/Travels.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsEdit from "../views/PostsEdit.vue";
import PostsShow from "../views/PostsShow.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/travels',
    name: 'travels',
    component: Travels
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/posts',
    name: 'posts-index',
    component: PostsIndex
  },
  {
    path: '/posts/new',
    name: 'posts-new',
    component: PostsNew
  },
  {
    path: '/posts/:id/edit',
    name: 'posts-edit',
    component: PostsEdit
  },
  {
    path: '/posts/:id',
    name: 'posts-show',
    component: PostsShow
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
