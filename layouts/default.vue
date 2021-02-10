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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
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
