<template>
  <div class="detail-five common-detail">
    <breadcrumb-component
      class="detail-five-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-five__header common-detail__header">
      <div class="detail-five__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/detail/zgyz.png" />
      </div>
      <div class="detail-five__header--desc common-detail__header--desc">
        <p
          class="detail-five__header--desc-title common-detail__header--desc--title"
        >
          数据中心数字化运维系统
        </p>
        <p
          class="detail-five__header--desc-date common-detail__header--desc--date"
        >
          时间：2019年9月
        </p>
      </div>
    </div>
    <div class="detail-five__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          数据中心数字化运维系统集成了两大子系统：数据中心系统、运维管理系统。
        </p>
      </section>
      <section class="second-section">
        <p class="common-detail__section-title">项目建设内容</p>
        <div class="detail-five__program">
          <div
            v-for="(item, index) in detailFiveMessage"
            :key="index"
            class="detail-five__section--program--each"
          >
            <p class="detail-five__section--program--each-title">
              {{ item.title }}
            </p>
            <p class="detail-five__section--program--each-desc">
              {{ item.desc }}
            </p>
          </div>
        </div>
        <img
          class="program-img program-img--first"
          src="~@/assets/image/successStories/detail/img_10.png"
        />
        <img
          class="program-img program-img--second"
          src="~@/assets/image/successStories/detail/img_6.png"
        />
        <img
          class="program-img program-img--third"
          src="~@/assets/image/successStories/detail/img_7.png"
        />
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <value-list-component
          :value-list="detailFiveValueList"
        ></value-list-component>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-five.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-five.scss" scoped></style>
