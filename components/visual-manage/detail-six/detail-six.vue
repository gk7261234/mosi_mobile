<template>
  <div class="detail-six common-detail">
    <breadcrumb-component
      class="detail-six-breadcrumb common-detail-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-six__header common-detail__header">
      <div class="detail-six__header--logo common-detail__header--logo">
        <img src="~@/assets/image/successStories/detail/zgyz.png" />
        <!-- <span>乌鲁木齐铁路局</span> -->
      </div>
      <div class="detail-six__header--desc common-detail__header--desc">
        <p
          class="detail-six__header--desc-title common-detail__header--desc--title"
        >
          数据中心建设及数字化管理系统
        </p>
        <p
          class="detail-six__header--desc-date common-detail__header--desc--date"
        >
          时间：2018年9月
        </p>
      </div>
    </div>
    <div class="detail-six__content">
      <section class="first-section">
        <p class="common-detail__section-title">方案概述</p>
        <p class="common-detail__section-desc">
          数据中心建设及数字化管理系统基于BIM+GIS数据，构建银行数据中心三维仿真模型，帮助银行建立一体化的数据中心三维运行监管平台。
        </p>
      </section>
      <section class="second-section">
        <p class="common-detail__section-title">项目建设内容</p>
        <div class="detail-six__program">
          <div class="detail-six__program--top">
            <div class="detail-six__program--top-left">
              <div
                v-for="(item, index) in detailSixMessage"
                :key="index"
                class="detail-six__section--program--each"
              >
                <p class="detail-six__section--program--each-title">
                  {{ item.title }}
                </p>
                <p class="detail-six__section--program--each-desc">
                  {{ item.desc }}
                </p>
              </div>
            </div>
            <div class="detail-six__program--top-right">
              <img
                src="~@/assets/image/successStories/detail/img_9.png"
                alt=""
              />
            </div>
          </div>
          <img
            class="program-img"
            src="~@/assets/image/successStories/detail/img_2.png"
          />
        </div>
      </section>
      <section class="third-section">
        <p class="common-detail__section-title">价值体现</p>
        <div class="value-list-component">
          <div
            v-for="(item, index) in detailSixValueList"
            :key="index"
            class="value-list-component--box"
          >
            <img
              class="value-list-component--box-img"
              :src="getNumber(index)"
              alt="1"
            />
            <p class="value-list-component--box-desc">{{ item }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-six.ts"></script>
<style lang="scss" src=".././common.scss" scoped></style>
<style lang="scss" src="./detail-six.scss" scoped></style>
