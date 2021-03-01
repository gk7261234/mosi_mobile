<template>
  <div class="digital-one-stop-service">
    <!-- 面包屑 -->
    <breadcrumb-component
      :breadcrumbs="solutionBreadcrumbs"
    ></breadcrumb-component>
    <!-- 产品现状 -->
    <div class="service--product-architecture">
      <div class="product-architecture__header content--title">
        <p id="general" class="content--title-top--small content--title-top">
          现状分析
        </p>
        <!-- <p class="content--title-bottom">S I T U A T I O N A N A L Y S I S</p> -->
        <p class="content--title-bottom">SITUATION ANALYSIS</p>
      </div>
      <div class="product-architecture__content">
        <Card
          v-for="(item, index) in situationAnalysisList"
          :key="index"
          class="content--single"
        >
          <img :src="item.imgSrc" />
          <p>{{ item.desOne }}</p>
          <p>{{ item.desTwo }}</p>
        </Card>
      </div>
    </div>
    <!-- 方案概述 -->
    <div class="service--solution-overview">
      <div id="summarize" class="solution-overview__header content--title">
        <p class="content--title-top content--title-top--small">方案概述</p>
        <p class="content--title-bottom">PROGRAM OVERVIEW</p>
      </div>
      <div class="solution-overview__content">
        <div class="solution-overview__content--text">
          <span class="text-first">魔</span
          >思大数据中台服务是包括从数据采集，数据接入，数据处理和数据分析，能打通数据生命周期各个环节的一站式大数据分析平台。平台拥有泛包容性采集渠道，利用“自定义API”对接各种系统接口，快速整合多种海量数据，提供高精度分析、高效自助式多维可视化分析引擎，实现数据汇聚、处理、分析的一体化功能整合，为用户提供一站式的数据服务。
        </div>
        <img src="~@/assets/image/solution/general/plan-image.png" alt="" />
      </div>
    </div>
    <!-- 应用价值 -->
    <div class="service--application-value">
      <div id="value" class="service--application-value__header content--title">
        <p class="content--title-top content--title-top--small">应用价值</p>
        <p class="content--title-bottom">APPLICATION VALUE</p>
      </div>
      <div class="service--application-value__content">
        <Card
          v-for="(item, index) in applyValueList"
          :key="index"
          :class="[
            index === 4 ? 'full-row' : 'half-row',
            'service--application-value__content--single',
          ]"
        >
          <div class="single-wrap">
            <img class="single--img" :src="item.imgSrc" />
            <div class="single__right">
              <p class="single__right--title">{{ item.title }}</p>
              <p class="single__right--text">{{ item.text }}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
<style lang="scss">
.ivu-card-bordered {
  border: 1px solid #eeeeee;
}
.ivu-card:hover {
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
}
</style>
