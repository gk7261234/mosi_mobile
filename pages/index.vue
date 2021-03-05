<template>
  <div class="container">
    <!-- banner start -->
    <div class="mosi-banner">
      <client-only>
        <swiper
          ref="bannerSwiper"
          :options="swiperOptions"
          class="banner-swiper"
          @click.native="swiperClick"
        >
          <swiper-slide v-for="(item, index) in BannerList" :key="index">
            <img class="banner-swiper-img" :src="item.fullImg" alt="banner" />
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
    <!-- banner end -->

    <!-- 魔思科技 start -->
    <CompanyProfile class="mosi-company-profile" />
    <ApplicationDirection class="mosi-application-direction" />
    <Chronicles class="mosi-chronicles" />
    <CooperativePartner class="mosi-cooperative-partner" />
    <!-- 魔思科技 start -->
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped>
.container {
  .mosi-banner {
    height: 70.164918vh;
    width: 100vw;
    background-color: #000;
    .banner-swiper {
      .banner-swiper-img {
        height: 70.164918vh;
        width: 100vw;
      }
    }
  }
  .mosi-company-profile {
    width: 100vw;
    height: 139.430285vh;
    background: url('~@/assets/images/homePage/mosi-bg.png') no-repeat center;
    background-size: cover;
    background-color: #fff;
    padding: 5.097451vh 5.333333vw 9.445277vh 5.333333vw;
  }
  .mosi-cooperative-partner {
    width: 100vw;
    height: 72.713643vh;
    padding: 7.946027vh 5.333333vw 10.944528vh 5.333333vw;
    background: #f9f9f9 url('~@/assets/images/homePage/world-map.png') no-repeat
      center;
    background-size: contain;
  }
  .mosi-chronicles {
    width: 100vw;
    height: 72.713643vh;
    background-color: #fff;
    padding: 3.598201vh 5.333333vw;
  }
  .mosi-application-direction {
    width: 100vw;
    height: 72.713643vh;
    background-color: #fff;
  }
}
</style>
