<template>
  <div class="detail-one">
    <breadcrumb-component
      class="detail-one-breadcrumb"
      :breadcrumbs="detailOneBreadcrumbs"
    ></breadcrumb-component>
    <div class="detail-one__header">
      <div class="detail-one__header--logo">
        <img src="~@/assets/image/successStories/police-logo.png" />
        <span>上海市公安局</span>
      </div>
      <div class="detail-one__header--desc">
        <p class="detail-one__header--desc-title">智慧公安可视化分析管理系统</p>
        <p class="detail-one__header--desc-date">时间：2020-10-22</p>
      </div>
    </div>
    <div class="detail-one__content">
      <section>
        <p class="detail-one__section-title">方案概述</p>
        <p class="detail-one__section--desc">
          智慧公安可视化分析管理系统应用于上海市公安局对全市综合治安管理的操作平台。整套系统包括：公安指挥中心态势感知系统、重点目标立体防护系统、警务中台综合指挥系统。
        </p>
      </section>
      <section>
        <p class="detail-one__section-title">项目建设内容</p>
        <div class="detail-one__section--program">
          <div
            class="detail-one__section-content detail-one__section--program-content"
          >
            <div
              v-for="item in detailOneBuild"
              :key="item.title"
              class="detail-one__section-content-each"
            >
              <p class="detail-one__section-content--title">{{ item.title }}</p>
              <p class="detail-one__section-content--desc">{{ item.desc }}</p>
            </div>
          </div>
          <img src="~@/assets/image/successStories/database.png" alt="" />
        </div>
        <img
          class="program-img--top program-img"
          src="~@/assets/image/successStories/img1.png"
        />
        <img
          class="program-img--bottom program-img"
          src="~@/assets/image/successStories/img2.png"
        />
      </section>
      <section>
        <p class="detail-one__section-title">价值体现</p>
        <div class="detail-one__section-content">
          <p class="detail-one__section-content--desc">
            1、实时可视化预警，降低意外发生风险。实现可联动调度，提升应急处置效率。
          </p>
          <p class="detail-one__section-content--desc">
            2、警务中台集基础信息采集，情报信息研判，数据查询，从底层数据采集到高端研判应用，自上至下贯穿整个公安情报信息化业务，实现了情报信息及时处置和研判。
          </p>
          <p class="detail-one__section-content--desc">
            3、以警用地理信息技术为核心，构建重点目标及周边区域警务、应急指挥、情报分析等领域的安防解决方案，为公安智慧建设提供标准规范规定、物联安防、可视化、系统集成等综合信息化服务。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./detail-one.ts"></script>
<style lang="scss" src="./detail-one.scss" scoped></style>
