<template>
  <div class="flex-box">
    <div class="flex-box__title">
      <div class="flex-box__title--main">应用方向</div>
      <div class="flex-box__title--sub">高效,全面,运用数字能力</div>
    </div>
    <div class="flex-box__content">
      <div class="flex-box__content-menu">
        <template v-for="(item, index) in MenuItems">
          <div
            :key="index"
            :class="{
              'flex-box__content-menu_item': true,
              selected: item.isActive,
            }"
            @click="clickToMove(item, index)"
          >
            {{ item.title }}
          </div>
        </template>
      </div>
    </div>
    <div class="swiper">
      <div
        v-for="(item, index) in myList"
        :key="index"
        :style="styles(item, index)"
        class="swiper__item"
      >
        <img :src="item.img" alt="" />
        <div>{{ item.text1 }}</div>
        <div>{{ item.text2 }}</div>
        <div>{{ item.text3 }}</div>
      </div>
      <!-- <template v-for="(item, index) in myList">
        <transition-group
          :key="index"
          tag="div"
          name="list"
          class="scroll"
          @before-enter="leftOrRight($event, index)"
        >
          <div
            v-show="currentIndex === index"
            :key="index"
            class="swiper__item"
          >
            <img :src="item.img" alt="" />
            <div>{{ item.text1 }}</div>
            <div>{{ item.text2 }}</div>
            <div>{{ item.text3 }}</div>
          </div>
        </transition-group>
      </template> -->
    </div>
    <!-- <div class="swiper">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
      >
        <swiper-slide v-for="(item, index) in BannerList" :key="index">
          <div class="swiper__item">
            <img
              src="~@/assets/images/loading.svg"
              :data-src="item"
              class="swiper-lazy"
              alt="banner"
              width="100%"
              height="100%"
            />
            <div>海量数据检索，支撑企业决策制定。</div>
            <div>优化存储成本，提高报表生成性能。</div>
            <div>防止数据泄露，维护用户数据安全。</div>
          </div>
        </swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>
<script lang="ts" src="./ApplicationDirection.ts"></script>
<style lang="scss" src="./ApplicationDirection.scss" scoped></style>
