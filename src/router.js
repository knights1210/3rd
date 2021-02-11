import Vue from "vue";
import Router from "vue-router";
const Home = () => import( /* webpackChunkName: "Home" */"./views/Home.vue");
const Users = () => import(/* webpackChunkName: "Users" */"./views/Users.vue");
const UsersPosts = () => import(/* webpackChunkName: "UsersPosts" */"./views/UsersPosts.vue");
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */"./views/UsersProfile.vue");
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */"./views/HeaderHome.vue");
const HeaderUser = () => import(/* webpackChunkName: "HeaderUser" */"./views/HeaderUser.vue");


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome,
      },
      beforeEnter(to, from, next) {
        next()
      },
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUser,
      },
      props: {
        default: true,
        header: false,
      },
      children: [
        {
          path: "posts",
          component: UsersPosts,
        },
        { path: "profile", component: UsersProfile, name: "users-id-profile" },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
  scrollBehavior(to, savedPosition) {
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash,
          };
        }
        resolve(position);
      });
    });
  },
});
