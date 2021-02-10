<template>
  <div class="global-header">
    <div class="global-header__content">
      <img class="logo" src="~@/assets/images/logo.png" />
      <transition name="slide-fade">
        <menu-tab
          class="menu global-header--menu menu-horizontal"
          :menu="Menu"
          :active-name="ActiveName"
        ></menu-tab>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" src="./global-header.ts"></script>
<style lang="scss" src="./global-header.scss" scoped></style>
<style lang="scss">
.ivu-layout-header {
  height: 72px;
  line-height: 72px;
}
.global-header {
  .ivu-menu-light {
    background-color: transparent;
    &:after {
      height: 0px !important;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  // opacity: 0;
}
.global-header {
  .logo {
    width: calc(199 / 1920 * 100vw);
    cursor: pointer;
  }
}
.global-header .ivu-menu-light {
  height: 72px;
  line-height: 72px;
}
</style>
