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
        :style="styles(index)"
        class="swiper-container"
      >
        <div class="swiper__item">
          <img :src="item.img" alt="" />
          <div>{{ item.text1 }}</div>
          <div>{{ item.text2 }}</div>
          <div>{{ item.text3 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./ApplicationDirection.ts"></script>
<style lang="scss" src="./ApplicationDirection.scss" scoped></style>
