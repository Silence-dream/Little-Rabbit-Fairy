<template>
  <div class="container">demo 这里自己开发组件的时候用</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Demo",
  setup() {
    const Store = useStore();
    /* 获取Demo自己的专用数据 */
    console.log(Store.state.Demo.useName);
  }
};
</script>

<style scoped></style>
