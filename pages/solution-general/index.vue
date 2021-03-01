<template>
  <div class="solution-general">
    <div class="content__header solution-general__header">
      <video autoplay loop muted>
        <source
          src="~@/assets/image/solution/general/digtal-service-banner.webm"
          type="video/webm"
        />
      </video>
      <p class="content__header--largestfont">数字一站式服务</p>
      <div class="content__header--largefont">
        <p>体验高效数字化管理</p>
      </div>
    </div>
    <div class="tabs">
      <anchor-component
        :anchors="solutionAchor"
        :jump-router="true"
      ></anchor-component>
    </div>
    <div class="solution-general__content content">
      <left-menu
        title="解决方案"
        :menus="leftMenu"
        :active-name="activeName"
        :open-names="openNames"
        @updateComponent="updateComponent"
        @updateOpenNames="updateOpenNames"
      ></left-menu>
      <digital-service></digital-service>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
