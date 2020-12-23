import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";

// 非主页引入都是使用这种方法引入  记得修改 webpackChunkName 名称
// import(/* webpackChunkName: "about" */ "../views/About.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      // 首页主要内容
      {
        path: "/",
        name: "HomeMain",
        component: () =>
          import(
            /* webpackChunkName: "HomeMain" */ "@/components/HomeMain/HomeMain.vue"
          )
      },
      // 商品一级分类路由
      {
        path: "PrimaryCategories",
        name: "PrimaryCategories",
        component: () =>
          import(
            /* webpackChunkName: "PrimaryCategories" */
            "@/components/PrimaryCategories/PrimaryCategories.vue"
          )
      },
      //  注册功能
      {
        path: "register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "Register" */ "@/components/Register/Register.vue"
          ),
        /* 注册功能二级路由 */
        children: [
          {
            path: "",
            name: "RegisterForm",
            component: () =>
              import(
                /* webpackChunkName: "RegisterForm" */ "@/components/RegisterForm/RegisterForm.vue"
              )
          },
          {
            path: "Success",
            name: "RegisterSuccess",
            component: () =>
              import(
                /* webpackChunkName: "RegisterSuccess" */ "@/components/RegisterSuccess/RegisterSuccess.vue"
              )
          }
        ]
      },
      // 商品一级分类路由
      {
        path: "SecondaryCategories",
        name: "SecondaryCategories",
        component: () =>
          import(
            /* webpackChunkName: "SecondaryCategories" */
            "@/components/SecondaryCategories/SecondaryCategories.vue"
          )
      },
      // 任务中心路由
      {
        path: "TaskCenter",
        name: "TaskCenter",
        component: () =>
          import(
            /* webpackChunkName: "TaskCenter" */
            "@/views/TaskCenter/TaskCenter.vue"
          )
      },
      // 会员中心路由
      {
        path: "MemberCenter",
        name: "MemberCenter",
        component: () =>
          import(
            /* webpackChunkName: "MemberCenter" */
            "@/views/MemberCenter/MemberCenter.vue"
          )
      }
    ]
  },
  {
    path: "/demo",
    name: "Demo",
    component: () =>
      import(/* webpackChunkName: "Demo" */ "@/components/Demo/Demo.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Login/Login.vue")
  },
  {
    path: "/OnlineServer",
    name: "OnlineServer",
    component: () =>
      import(
        /* webpackChunkName: "OnlineServer" */
        "@/views/OnlineServer/OnlineServer.vue"
      )
  },
  // 问题反馈
  {
    path: "/FeedBack",
    name: "FeedBack",
    component: () =>
      import(
        /* webpackChunkName: "FeedBack" */
        "@/views/FeedBack/FeedBack.vue"
      )
  },
  // 问题反馈成功
  {
    path: "/FeedBackSuc",
    name: "FeedBackSuc",
    component: () =>
      import(
        /* webpackChunkName: "FeedBackSuc" */
        "@/views/FeedBackSuc/FeedBackSuc.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
