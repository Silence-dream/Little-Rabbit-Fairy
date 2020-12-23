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
            /* webpackChunkName: "PrimaryGoods" */ "@/components/HomeMain/HomeMain.vue"
          )
      },
      // 商品一级分类路由
      {
        path: "Primary",
        name: "Primary",
        component: () =>
          import(
            /* webpackChunkName: "PrimaryGoods" */
            "@/components/PrimaryCategories/Primary.vue"
          ),
        children: [
          // 重定向到一级分类
          {
            path: "",
            name: "PrimaryCategories",
            component: () =>
              import(
                /* webpackChunkName: "PrimaryGoods" */
                "@/components/PrimaryCategories/Categories.vue"
              )
          },
          // 商品二级分类路由
          {
            path: "Secondary",
            name: "Secondary",
            component: () =>
              import(
                /* webpackChunkName: "Secondary" */
                "@/components/SecondaryCategories/SecondaryCategories.vue"
              )
          }
        ]
      },
      //  注册功能
      {
        path: "register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "Register" */ "@/components/Register/Register.vue"
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
