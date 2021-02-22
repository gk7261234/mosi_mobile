<template>
  <Layout class="mosi-layout">
    <Header class="mosi-layout__header header-top">
      <global-header></global-header>
    </Header>
    <Content class="mosi-layout__content">
      <!-- <transition name="fade-transform" mode="out-in"> -->
      <Nuxt class="mosi-layout__content--page" />
      <!-- </transition> -->
    </Content>
    <Footer class="mosi-layout__footer">
      <global-footer></global-footer>
    </Footer>
  </Layout>
</template>
<script lang="ts" src="./layout.ts"></script>
<style lang="scss" src="./layout.scss" scoped></style>
<style lang="scss">
.mosi-layout {
  position: relative;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.3s;
  }
  .fade-transform-enter,
  .fade-transform-leave-to {
    opacity: 0;
  }
}
</style>
