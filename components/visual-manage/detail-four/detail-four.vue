<template>
  <div class="detail-four common-detail">
    <breadcrumb-component
      class="detail-four-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-four__header common-detail__header">
      <div class="detail-four__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/detail/wlmqtlj.png" />
        <span>乌鲁木齐铁路局</span>
      </div>
      <div class="detail-four__header--desc common-detail__header--desc">
        <p
          class="detail-four__header--desc-title common-detail__header--desc--title"
        >
          铁路信息综合管理平台
        </p>
        <p
          class="detail-four__header--desc-date common-detail__header--desc--date"
        >
          时间：2020年1月
        </p>
      </div>
    </div>
    <div class="detail-four__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          铁路信息综合管理平台应用于铁路交通部门对轨道及轨道周边的管理，是一套涵盖设备管理、周边管理、应急管理的全面解决方案。
        </p>
      </section>
      <section class="second-section">
        <p class="common-detail__section-title">项目建设内容</p>
        <div class="detail-four__program">
          <div class="detail-four__program--top">
            <div class="detail-four__program--top-left">
              <div
                v-for="(item, index) in detailFourMessage"
                :key="index"
                class="detail-four__section--program--each"
              >
                <p class="detail-four__section--program--each-title">
                  {{ item.title }}
                </p>
                <p class="detail-four__section--program--each-desc">
                  {{ item.desc }}
                </p>
              </div>
            </div>
            <div class="detail-four__program--top-right">
              <img
                src="~@/assets/image/successStories/detail/img_13.png"
                alt=""
              />
            </div>
          </div>
          <img
            class="program-img"
            src="~@/assets/image/successStories/detail/img_8.png"
          />
        </div>
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <value-list-component
          :value-list="detailFourValueList"
        ></value-list-component>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-four.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-four.scss" scoped></style>
