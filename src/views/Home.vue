<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import { httpGet } from "../utils/http";

export default {
  name: "Home",
  created() {
    this.aa();
  },
  methods: {
    aa() {
      httpGet("topic")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {}
};
</script>
