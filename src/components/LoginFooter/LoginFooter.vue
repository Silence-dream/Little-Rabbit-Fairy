<template>
  <footer ref="footerRef">
    <div class="container">
      <!-- 关于 -->
      <div class="about" ref="aboutRef">
        <router-link to="/">关于我们</router-link>
        <router-link to="/">帮助中心</router-link>
        <router-link to="/">售后服务</router-link>
        <router-link to="/">配送与验收</router-link>
        <router-link to="/">商务合作</router-link>
        <router-link to="/">搜索推荐</router-link>
        <router-link to="/">友情链接</router-link>
      </div>
      <!-- 版权 -->
      <div class="copyright" ref="copyrightRef">
        CopyRight @ 小兔鲜儿
      </div>
    </div>
  </footer>
</template>

<script>
/**
 * 组件可以设置的属性
 * @params {string} backgroundColor default:"#fff"
 * @params {string} width           default: "100%"
 * @params {string} height          default: "115px"
 * @params {string} color           default: "#666"
 */
import { ref, onMounted } from "vue";
export default {
  name: "LoginFooter",
  props: {
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "115px"
    },
    color: {
      type: String,
      default: "#666"
    }
  },
  setup(props) {
    /* 得到 */
    // console.log(props);
    // console.log(props.backgroundColor);

    /* 获取元素 */
    const footerRef = ref(null);
    const aboutRef = ref(null);
    const copyrightRef = ref(null);

    onMounted(() => {
      // console.dir(footerRef);
      // 设置样式
      footerRef.value.style.backgroundColor = props.backgroundColor;
      footerRef.value.style.width = props.width;
      footerRef.value.style.height = props.height;
      // 获取元素 修改 字体颜色
      let aRef = aboutRef.value.childNodes;
      aRef.forEach(item => {
        item.style.color = props.color;
      });
      copyrightRef.value.style.color = props.color;
    });
    return {
      footerRef,
      aboutRef,
      copyrightRef
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  height: 115px;
  color: #666666;
  font-size: 14px;
  a {
    color: #666666;
    font-size: 14px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about {
    a:nth-child(-n + 6) {
      &:after {
        content: "|";
        padding: 0 10px;
      }
    }
    margin-bottom: 15px;
  }
}
</style>
