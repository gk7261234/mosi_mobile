<template>
  <div class="detail-three common-detail">
    <breadcrumb-component
      class="detail-three-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-three__header common-detail__header">
      <div class="detail-three__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/police-logo.png" />
        <span>上海市公安局静安分局</span>
      </div>
      <div class="detail-three__header--desc common-detail__header--desc">
        <p
          class="detail-three__header--desc-title common-detail__header--desc--title"
        >
          重点目标立体防护平台
        </p>
        <p
          class="detail-three__header--desc-date common-detail__header--desc--date"
        >
          时间：2018年9月
        </p>
      </div>
    </div>
    <div class="detail-three__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          重点目标立体防护平台服务于公安部门管理层，主要应用于指挥作战与管控。是集警务信息的收集、呈现、分析与一体的综合安全防控系统。系统分为三大应用版块：数据可视化管理模块、警情警力管理模块、安防管理模块。
        </p>
      </section>
      <section class="second-section">
        <div class="detail-three__program">
          <div class="detail-three__program--top">
            <div class="detail-three__program--top-left">
              <p class="common-detail__section-title">项目建设内容</p>
              <div
                v-for="(item, index) in detailThreeMessage"
                :key="index"
                class="detail-three__section--program--each"
              >
                <p class="detail-three__section--program--each-title">
                  {{ item.title }}
                </p>
                <p class="detail-three__section--program--each-desc">
                  {{ item.desc }}
                </p>
              </div>
            </div>
            <div class="detail-three__program--top-right">
              <img
                src="~@/assets/image/successStories/detail/img_12.png"
                alt=""
              />
            </div>
          </div>
          <img
            class="program-img"
            src="~@/assets/image/successStories/detail/img_1.png"
          />
        </div>
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <value-list-component
          :value-list="detailThreeValueList"
        ></value-list-component>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-three.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-three.scss" scoped></style>
