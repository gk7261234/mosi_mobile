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
            <div class="slogan">
              <div class="slogan__company-name">魔思科技</div>
              <div class="slogan__position">全行业智慧<span>+</span>探索者</div>
              <div class="slogan__content">
                提供数据全生命周期管理服务、大数据软件服务、
                数字孪生服务、可视化管理服务
              </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
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
      .slogan {
        position: absolute;
        width: 76.266667vw;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        line-height: 3.598201vh;
        .slogan__company-name {
          font-size: 3.733333vw;
          font-weight: 400;
          color: #ffffff;
        }
        .slogan__position {
          font-size: 4.8vw;
          font-weight: bold;
          color: #ffffff;
          span {
            display: inline-block;
            position: relative;
            width: 6.4vw;
            top: -1vh;
            font-size: 4.266667vw;
            font-weight: bold;
            color: #ff9c0f;
          }
        }
        .slogan__content {
          font-size: 3.2vw;
          font-weight: 400;
          color: #cccccc;
          text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.5);
        }
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
::v-deep .swiper-pagination-bullets {
  bottom: 2.998501vh;
}
::v-deep .swiper-pagination-bullet {
  width: 4.8vw;
  height: 0.29985vh;
  background: #eaecef;
  border-radius: initial;
  opacity: 0.4;
}
::v-deep .swiper-pagination-bullet-active {
  background-color: #ff9c0f;
  opacity: 1;
}
</style>
