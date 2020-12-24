<template>
  <el-row class="carousel">
    <div class="container carousel-bgc">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{ delay: 3000 }"
      >
        <swiper-slide v-for="item in getCarouselImg" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </el-row>
</template>

<script>
import { httpGet } from "@/utils/http.js";
import { onMounted, ref } from "vue";
// 轮播图使用
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
export default {
  name: "Carousel",
  setup() {
    //#region 2.轮播图方法
    const getCarouselImg = ref([]);
    let getCarouselData = httpGet("/home/banner")
      .then(res => {
        // console.log(res);
        let { result } = res;
        getCarouselImg.value = result;
      })
      .catch(error => {
        console.log(error);
      });
    //#endregion

    onMounted(() => {
      getCarouselData;
    });

    return {
      getCarouselImg
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style></style>
