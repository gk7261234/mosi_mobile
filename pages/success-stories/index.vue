<template>
  <div class="success-stories">
    <div class="content__header success-stories__header">
      <video autoplay loop muted>
        <source
          src="~@/assets/image/successStories/case-banner.webm"
          type="video/webm"
        />
      </video>
      <p class="content__header--largestfont">我们的客户成功案例</p>
      <div class="content__header--largefont">
        <p>应用于各行业</p>
        <p>提供丰富的业务场景技术解决方案</p>
      </div>
    </div>
    <div class="success-stories__content content">
      <component :is="component"></component>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
