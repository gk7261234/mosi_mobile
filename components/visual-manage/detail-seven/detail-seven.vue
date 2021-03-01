<template>
  <div class="detail-seven common-detail">
    <breadcrumb-component
      class="detail-seven-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-seven__header common-detail__header">
      <div class="detail-seven__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/detail/zgyz.png" />
      </div>
      <div class="detail-seven__header--desc common-detail__header--desc">
        <p
          class="detail-seven__header--desc-title common-detail__header--desc--title"
        >
          智慧数据中心3D可视化系统
        </p>
        <p
          class="detail-seven__header--desc-date common-detail__header--desc--date"
        >
          时间：2018年7月
        </p>
      </div>
    </div>
    <div class="detail-seven__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          银行内部数据中心良好运行支撑着银行业务的开展，然而难以避免的机房故障对此产生了极高的威胁，魔思研发数据中心建设及数字化管理系统帮助我们的客户轻松对数字中心机房进行维护。
        </p>
      </section>
      <section class="second-section">
        <p class="common-detail__section-title">项目建设内容</p>
        <div class="detail-seven__program">
          <div class="detail-seven__program--top">
            <div class="detail-seven__program--top-left">
              <div
                v-for="(item, index) in detailSevenMessage"
                :key="index"
                class="detail-seven__section--program--each"
              >
                <p class="detail-seven__section--program--each-title">
                  {{ item.title }}
                </p>
                <p class="detail-seven__section--program--each-desc">
                  {{ item.desc }}
                </p>
              </div>
            </div>
            <div class="detail-seven__program--top-right">
              <img
                src="~@/assets/image/successStories/detail/img_14.png"
                alt=""
              />
            </div>
          </div>
          <img
            class="program-img"
            src="~@/assets/image/successStories/detail/img_3.png"
          />
        </div>
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <value-list-component
          :value-list="detailSevenValueList"
        ></value-list-component>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-seven.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-seven.scss" scoped></style>
