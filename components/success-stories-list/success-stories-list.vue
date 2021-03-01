<template>
  <div class="success-stories-list">
    <div class="left-position">
      <p class="left-position--title">成功案例</p>
      <div class="success-stories__content--left">
        <div
          v-for="item in successStoriesArr"
          :key="item.title"
          class="success-stories-list__content--left-each ssl--left-each"
          :active="isActive(item.title)"
          @click="clickStory(item.title)"
        >
          <span>{{ item.title }}</span>
          <img
            class="ssl--left-each--img"
            src="~@/assets/image/common/leftNav-arrow-normal.png"
            alt="箭头"
          />
        </div>
      </div>
    </div>
    <div class="success-stories-list__content--right-content">
      <component :is="componentName" v-if="show"></component>
    </div>
  </div>
</template>

<script lang="ts" src="./success-stories-list.ts"></script>
<style lang="scss" src="./success-stories-list.scss" scoped></style>
