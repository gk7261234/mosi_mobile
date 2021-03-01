<template>
  <div class="data-acquisition">
    <div class="content__header data-acquisition__header">
      <video preload autoplay loop muted>
        <source
          src="~@/assets/image/productSystem/product-detail-banner.webm"
          type="video/webm"
        />
      </video>
      <p class="content__header--largestfont">自主采集汇总平台</p>
      <p class="content__header--largetitle-top">全流程数据ETL操作</p>
      <div
        class="content__header--largetitle-bottom content__header--largefont"
      >
        <p>针对不同情况，定制个性化方案</p>
        <p>采集、整理是稳定的第一步</p>
      </div>
    </div>
    <div class="tabs">
      <anchor-component :anchors="dataAcquisitionArr"></anchor-component>
    </div>
    <div class="data-acquisition__content content">
      <div id="architecture" class="content--title">
        <p class="content--title-top content--title-top--small">产品架构</p>
        <p class="content--title-bottom">PRODUCT ARCHITECTURE</p>
      </div>
      <img
        class="data-acquisition-architrcture-img"
        src="~@/assets/image/productSystem/dataAcquisition/product-frame.png"
        alt=""
      />
      <div id="function" class="content--title">
        <p class="content--title-top content--title-top--small">产品功能</p>
        <p class="content--title-bottom">PRODUCT DESCRIPTION</p>
      </div>
      <div class="data-acquisition__content--function">
        <Card
          v-for="item in featuresArr"
          :key="item.title"
          class="data-acquisition__content--function-card function-card"
        >
          <img class="function-card--img" :src="item.img" />
          <p class="function-card--title">{{ item.title }}</p>
          <div class="function-card--desc">
            {{ item.desc }}
          </div>
        </Card>
      </div>

      <div id="advantages" class="content--title">
        <p
          class="content--title-top content--title-top--small data-acquisition__content-title"
        >
          产品优势
        </p>
        <p class="content--title-bottom">PRODUCT ADVANTAGES</p>
      </div>
      <Card
        v-for="item in advantagesArr"
        :key="item.title"
        class="data-acquisition__content--advantages-card advantages-card"
      >
        <img :src="item.img" />
        <div class="advantages-card__right">
          <p class="advantages-card__right--title">{{ item.title }}</p>
          <p class="advantages-card__right--desc">{{ item.desc }}</p>
        </div>
      </Card>
      <div id="scene" class="content--title">
        <p
          class="content--title-top content--title-top--small data-acquisition__content-title"
        >
          应用场景
        </p>
        <p class="content--title-bottom">APPLICATION SCENARIO</p>
      </div>
      <div class="data-acquisition__content--scene-card scene-card">
        <Card
          v-for="(item, index) in applicationScenarioList"
          :key="index"
          class="scene-card-each"
          @mouseover.native="mouseOver(index)"
          @mouseout.native="mouseOut"
        >
          <img
            class="scene-card-each--img"
            :src="hoverIndex === index ? item.activeImg : item.defaultImg"
          />
          <Button class="scene-card-each--button">
            <span class="scene-card-each--button--span">{{ item.text }}</span>
            <img
              class="scene-card-each--button--img"
              src="~@/assets/image/common/arrow.png"
            />
          </Button>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
