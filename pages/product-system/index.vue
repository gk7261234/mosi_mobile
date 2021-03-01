<template>
  <div class="product-system">
    <div class="content__header product-system__header">
      <video
        preload
        autoplay
        loop
        muted
        poster="~@/assets/image/productSystem/product-banner.png"
      >
        <source
          src="~@/assets/image/productSystem/product-banner.webm"
          type="video/webm"
        />
      </video>
      <p class="content__header--largestfont">用数字应变状况</p>
      <div class="content__header--largefont">
        <p>我们建立——产品</p>
        <p>您没有找到的，魔思帮您建立</p>
      </div>
    </div>
    <div class="product-system__content content">
      <div class="content--title product-system--data">
        <p class="content--title-top">大数据平台</p>
        <p class="content--title-bottom">BIGDATA PLATFORM</p>
      </div>
      <div class="product-system__content--tab">
        <Card class="ivu-tabs-bar">
          <div
            v-for="item in dataPlatfromArr"
            :key="item.title"
            class="ivu-tabs-tab"
            :class="tabsClass(item.title)"
            @click="selectPlatform(item.title)"
          >
            <div class="product-system__content--tab-title">
              <img class="product-system--img" :src="imgByActive(item)" />
              <p :class="titleClass(item.title)">{{ item.title }}</p>
            </div>
          </div>
        </Card>
        <div class="tabs-content">
          <template v-for="(child, index) in showlist">
            <div
              v-if="showBySingular(index)"
              :key="child.name + index"
              class="tabs-content--each"
              @click="jumpRouter(child.path)"
            >
              <div class="tabs-content--each-left">
                <img class="tabs-content--each-left--img" :src="child.img" />
              </div>
              <div
                class="tabs-content--each-message tabs-content--each-message-right"
              >
                <div class="tabs-content--each-message-card">
                  <p class="tabs-content--each-message-title">
                    {{ child.name }}
                  </p>
                  <div class="tabs-content--each-message-desc">
                    {{ child.desc }}
                  </div>
                </div>
                <div class="tabs-content--each-left--icon">
                  <img :src="child.icon" />
                </div>
              </div>
            </div>
            <div
              v-if="!showBySingular(index)"
              :key="child.name"
              class="tabs-content--each"
              @click="jumpRouter(child.path)"
            >
              <div
                class="tabs-content--each-message tabs-content--each-message-left"
              >
                <div class="tabs-content--each-message-card">
                  <p class="tabs-content--each-message-title">
                    {{ child.name }}
                  </p>
                  <div class="tabs-content--each-message-desc">
                    {{ child.desc }}
                  </div>
                </div>
                <div class="tabs-content--each-right--icon">
                  <img :src="child.icon" />
                </div>
              </div>
              <div class="tabs-content--each-right">
                <img class="tabs-content--each-right--img" :src="child.img" />
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="content--title product-system-tools--title">
        <p class="content--title-top">可视化工具</p>
        <p class="content--title-bottom">VISUALIZATION TOOLS</p>
      </div>
      <div class="product-system__content--tools">
        <div
          v-for="item in visualizationTools"
          :key="item.title"
          class="product-system__content--tools-card"
        >
          <div>
            <img :src="item.img" />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
