<template>
  <div class="left-menu left-position">
    <p class="left-menu--title left-position--title">
      {{ title }}
    </p>
    <common-menus
      class="left-menu__content"
      v-bind="$attrs"
      v-on="$listeners"
    ></common-menus>
  </div>
</template>

<script lang="ts" src="./left-menu.ts"></script>
<style lang="scss" src="./left-menu.scss" scoped></style>
