<template>
  <div class="detail-eight common-detail">
    <breadcrumb-component
      class="detail-eight-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-eight__header common-detail__header">
      <div class="detail-eight__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/detail/sdjc.png" />
        <!-- <span>乌鲁木齐铁路局</span> -->
      </div>
      <div class="detail-eight__header--desc common-detail__header--desc">
        <p
          class="detail-eight__header--desc-title common-detail__header--desc--title"
        >
          数据中心数字化运维系统
        </p>
        <p
          class="detail-eight__header--desc-date common-detail__header--desc--date"
        >
          时间：2019年10月
        </p>
      </div>
    </div>
    <div class="detail-eight__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          数据中心数字化运维系统为机场提供了一套集业务数据监管、业务流向可视化以及数据中心机房运维管理与一体的管理方案。系统共有五大功能版块：业务运行监管、物联安防感知、资产管理、设备异常告警、机房全局管理。
        </p>
      </section>
      <section class="second-section">
        <p class="common-detail__section-title">项目建设内容</p>
        <div class="detail-eight__program">
          <div
            v-for="(item, index) in detailEightMessage"
            :key="index"
            class="detail-eight__section--program--each"
          >
            <p class="detail-eight__section--program--each-title">
              {{ item.title }}
            </p>
            <p class="detail-eight__section--program--each-desc">
              {{ item.desc }}
            </p>
          </div>
        </div>
        <img
          class="program-img program-img--first"
          src="~@/assets/image/successStories/detail/img_11.png"
        />
        <img
          class="program-img program-img--second"
          src="~@/assets/image/successStories/detail/img_4.png"
        />
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <value-list-component
          :value-list="detailEightValueList"
        ></value-list-component>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-eight.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-eight.scss" scoped></style>
