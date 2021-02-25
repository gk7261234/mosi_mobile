<template>
  <div class="home-page">
    <div class="home-page__header">
      <div class="mosi-banner">
        <client-only>
          <swiper
            ref="bannerSwiper"
            :options="swiperOptions"
            class="banner-swiper"
            @click.native="swiperClick"
          >
            <swiper-slide v-for="(item, index) in BannerList" :key="index">
              <video v-show="index === 2" autoplay loop muted>
                <source src="~@/assets/video/banner3.webm" type="video/webm" />
              </video>
              <video v-show="index === 1" autoplay loop muted>
                <source src="~@/assets/video/banner2.webm" type="video/webm" />
              </video>
              <img
                v-show="index === 0"
                class="banner-swiper-img"
                :src="item.fullImg"
                alt="banner"
              />
              <div class="banner-attach">
                <div v-show="index === 0" class="attach-first">
                  <div class="first-content">
                    <div class="first-content--one">魔思科技</div>
                    <div class="first-content--two">
                      全行业智慧<span class="header--plus">+</span> 探索者
                    </div>
                    <div class="first-content--three">
                      提供数据全生命周期管理服务、大数据软件服务、数字孪生服务、可视化管理服务
                    </div>
                  </div>
                  <div class="first-content--background-img">
                    <img
                      :class="
                        currentBannerIndex === index
                          ? 'triangle-down'
                          : 'triangle-down-default'
                      "
                      src="~@/assets/image/homepage/triangle-down.png"
                      alt=""
                    />
                    <img
                      :class="
                        currentBannerIndex === index
                          ? 'triangle-right'
                          : 'triangle-right-default'
                      "
                      src="~@/assets/image/homepage/triangle-left.png"
                      alt=""
                    />
                    <img
                      :class="
                        currentBannerIndex === index
                          ? 'triangle-left'
                          : 'triangle-left-default'
                      "
                      src="~@/assets/image/homepage/triangle-right.png"
                      alt=""
                    />
                    <img
                      :class="
                        currentBannerIndex === index
                          ? 'triangle-up'
                          : 'triangle-up-default'
                      "
                      src="~@/assets/image/homepage/triangle-up.png"
                      alt=""
                    />
                    <img
                      class="dynamic-line"
                      src="~@/assets/image/homepage/line-animate.png"
                      alt=""
                    />
                    <img
                      class="center-animate"
                      src="~@/assets/image/homepage/center-animate.png"
                      alt=""
                    />
                    <img
                      class="shadow"
                      src="~@/assets/image/homepage/shadow.png"
                      alt=""
                    />
                  </div>
                </div>
                <div v-show="index === 1" class="attach-second">
                  <div class="text-content">
                    <div class="attach-header">数字时代业务数据共享</div>
                    <div class="attach-detail">
                      <p>帮助您安全、合规地查看资金、资产流向</p>
                      <p>实现稳定、高效、实时数据流管理</p>
                    </div>
                  </div>
                </div>
                <div v-show="index === 2" class="attach-third">
                  <div class="third-content">
                    <div class="third-content__header">
                      与魔思一同探索 <span class="font-tilt">"</span
                      ><span class="header--wisdom">
                        智慧<span class="header--plus">+</span></span
                      ><span class="font-tilt">"</span> 建设领域
                    </div>
                    <div class="third-content__body">
                      <p>了解各行业如何运用</p>
                      <p>计算机图形、人工智能、大数据分析等技术搭建管理闭环</p>
                    </div>
                    <div class="third-content__footer" data-play="playVideo">
                      观看视频介绍
                      <span>
                        <img
                          src="~@/assets/image/homepage/play-icon.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>
    <div class="home-page__content">
      <!-- 魔思科技 -->
      <!-- <div class="add-background"> -->
      <div class="content__technology--wrap">
        <div class="content__technology">
          <div class="content--title">
            <p class="content--title-top--small content--title-top">魔思科技</p>
            <p class="content--title-bottom">启于思而不止于思</p>
          </div>
          <div class="content__technology--boxs">
            <div
              v-for="(item, index) in homePageTechList"
              :key="index"
              class="boxs--wrap"
            >
              <div
                v-for="(_item, _index) in item"
                :key="_index"
                class="boxs--wrap--single"
                @mouseover="selectTechnology(_item.id)"
                @mouseout="removeTechnology"
              >
                <img
                  :src="_item.id === techId ? _item.activeSrc : _item.imgSrc"
                />
                <div class="single--title">{{ _item.title }}</div>
                <div class="single--descript">{{ _item.subscription }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <!-- 应用方向 -->
      <div class="content__apply--wrap">
        <div class="content__apply">
          <div class="content--title">
            <p
              class="content--title-top--small content--title-top content__apply--title"
            >
              应用方向
            </p>
            <p class="content--title-bottom content__apply--sub-title">
              高效，全面，运用数字能力
            </p>
          </div>
          <div class="content__apply--type">
            <div
              v-for="(item, index) in applyDirectionList"
              :key="index"
              class="type--single"
              @mouseover="mouseOverEvent(index)"
            >
              <img
                :src="item.active ? item.activeImgSrc : item.defaultImgSrc"
                alt=""
              />
              <div
                :class="[
                  item.active
                    ? 'type--single--title--active'
                    : 'type--single--title--default',
                  'type--single--title',
                ]"
              >
                {{ item.title }}
              </div>
              <div v-show="item.active" class="underline"></div>
            </div>
          </div>
        </div>
        <div class="content__apply--selected">
          <div
            v-for="(item, index) in applyDirectionList"
            :key="index"
            :class="index === applyIndex ? 'active-apply' : 'default-apply'"
          >
            <div class="selected__left">
              <div
                v-for="(_item, _index) in item.detail"
                :key="_index"
                class="selected__left--content"
              >
                <img src="~@/assets/image/homepage/pointIcon.png" alt="" />
                <span class="content--text">{{ _item }}</span>
              </div>
            </div>
            <div class="selected__right">
              <video height="340" width="346" autoplay loop muted>
                <source :src="item.video" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <!-- 发展编年史 -->
      <div class="content__develop--wrap">
        <div class="content__develop">
          <div id="function" class="content--title">
            <p class="content--title-top">发展编年史</p>
            <p class="content--title-bottom">
              魔思,每一步都是建造数字世界的一小步
            </p>
          </div>
          <div class="content__develop__message">
            <div
              v-for="(item, index) in developList"
              :key="item.title"
              class="content__develop__message--position message-position"
              :style="styles(item, index)"
            >
              <div class="message-position--vertival">
                <div class="message-position--vertival-title">
                  <img src="~@/assets/image/homepage/point.png" />
                  <p>{{ item.title }}</p>
                </div>
                <div class="message-position--vertival-desc">
                  {{ item.desc }}
                </div>
              </div>
              <img src="~@/assets/image/homepage/connect-line.png" />
              <p class="content__develop__message--position-date">
                {{ item.date }}
              </p>
            </div>
            <img
              class="content__develop--img"
              src="~@/assets/image/homepage/mountain.png"
              alt=""
            />
          </div>
          <div class="content__develop__message--btns">
            <img
              v-for="(item, index) in developCtrlBtn"
              :key="item.key"
              class="content__develop--btns"
              :class="imgClass(index)"
              :status="item.status"
              @click="clickToMove(item, index)"
            />
          </div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="content__partners">
        <div class="content__partners--box">
          <div class="content--title">
            <p class="content--title-top--small content--title-top">合作伙伴</p>
            <p class="content--title-bottom box--sub-title header--sub-title">
              让客户与伙伴，掌握数据联盟时代
            </p>
          </div>
          <div class="box--wrap">
            <div
              v-for="(item, index) in partnersList"
              :key="index"
              class="box--wrap--single"
              @mouseover="mouseOverActive(index)"
              @mouseleave="mouseLeave(index)"
            >
              <img
                :src="item.active ? item.activeImgSrc : item.defaultImgSrc"
                alt=""
              />
            </div>
            <div class="pick"></div>
            <div class="pick"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="videoShow" class="video-mask">
      <Icon type="ios-close" @click="playVideo" />
      <video ref="bannerVideo" loop controls>
        <source src="~@/assets/video/home_banner.mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
<style lang="scss">
.home-page {
  .swiper-slide {
    height: 100vh;
    overflow: hidden;
  }
  .default-bullet {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 3.6vw;
    height: 4px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3.6vw;
      height: 4px;
      opacity: 0.4;
      background-color: #eaecef;
    }
    &:after {
      z-index: 300;
      width: 0;
      height: 4px;
    }
  }
  .active-bullet {
    &:after {
      width: 3.6vw;
      height: 4px;
      transition: width 10s;
      background-color: #ff9c0f;
      opacity: 1;
    }
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 5vh;
    width: 14.1vw;
    display: flex;
    left: 50%;
    margin-left: -7vw;
    justify-content: space-between;
  }
  .video-mask {
    .ivu-icon {
      font-size: 48px;
      display: block;
      color: white;
      position: absolute;
      top: 30px;
      right: 60px;
    }
  }
}
</style>
