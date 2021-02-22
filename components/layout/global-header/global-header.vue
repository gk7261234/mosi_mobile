<template>
  <div class="global-header">
    <img class="logo" src="~@/assets/images/layout/logo.png" />
    <img
      class="menu"
      src="~@/assets/images/layout/menu.png"
      @click="onSwitchMenu"
    />
    <MenuTab v-show="isShowMenu" />
  </div>
</template>
<script lang="ts" src="./global-header.ts"></script>
<style lang="scss" src="./global-header.scss" scoped></style>
