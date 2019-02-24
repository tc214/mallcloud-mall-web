<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.title">
        <img class="banner-img" :src="slide.src">

      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="banner-arrow prev">
      <i class="swiper-button-prev"></i>
    </div>
    <div class="banner-arrow next">
      <i class="swiper-button-next"></i>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'banner-swiper',
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3500,
          initialSlide: 1,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: false,
          observeParents: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          loop: true,
          loopAdditionalSlides: 1
        },
        swiperSlides: [
          {
            src: require('../../assets/images/banner/banner1.jpg'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../../assets/images/banner/banner2.jpg'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../../assets/images/banner/banner3.jpg'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../../assets/images/banner/banner4.jpg'),
            title: 'xxx4',
            href: 'detail/forecast'
          },
          {
            src: require('../../assets/images/banner/banner5.jpg'),
            title: 'xxx5',
            href: 'detail/forecast'
          }
        ]
      };
    },
    components: {
      swiper,
      swiperSlide
    }
  };
</script>
<style>
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 2px;
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 2px;
  }

  .banner-con .banner-arrow {
    z-index: 2;
  }
</style>

