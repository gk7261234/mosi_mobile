<template>
  <div class="detail-two common-detail">
    <breadcrumb-component
      class="detail-two-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-two__header common-detail__header">
      <div class="detail-two__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/police-logo.png" />
        <span>上海市公安局崇明分局</span>
      </div>
      <div class="detail-two__header--desc common-detail__header--desc">
        <p
          class="detail-two__header--desc-title common-detail__header--desc--title"
        >
          瀛洲智眼安防系统
        </p>
        <p
          class="detail-two__header--desc-date common-detail__header--desc--date"
        >
          时间：2018年11月
        </p>
      </div>
    </div>
    <div class="detail-two__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          瀛洲智眼安防系统为公安部门提供区域综合治理可视化平台。系统接入六项实有信息进行管理：实有人口管理、实有房屋管理、实有单位管理、实有安防设施管理、实有力量装备管理、实有警情管理。
        </p>
      </section>
      <section class="second-section">
        <p class="common-detail__section-title">项目建设内容</p>
        <div class="detail-two__section--program">
          <div
            v-for="(item, index) in detailTwoMessage"
            :key="index"
            class="detail-two__section--program--each"
          >
            <p class="detail-two__section--program--each-title">
              {{ item.title }}
            </p>
            <p class="detail-two__section--program--each-desc">
              {{ item.desc }}
            </p>
          </div>
        </div>
        <img
          class="program-img"
          src="~@/assets/image/successStories/detail/img_5.png"
        />
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <div class="detail-two__section-content">
          <p class="detail-two__section-content--desc">
            1、系统基于GIS信息地图与多源数据进行可视化结合，辅助公安部门对辖区全域各单位进行可视化监管和治理，大大提升各地派出所等单位的一线民警办公效率。
          </p>
          <p class="detail-two__section-content--desc">
            2、对辖区内警力、物资有效整合，建立多地派出所联动的指挥体系，在应对突发公共事件时具有高效的实战调度能力，提供有序的实时指挥支持，为维护社会公共安全保驾护航。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-two.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-two.scss" scoped></style>
