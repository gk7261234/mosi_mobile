<template>
  <i-menu
    ref="menus"
    accordion
    style="width: 100%"
    :active-name="activeName"
    :open-names="openNames"
    class="common-menus"
    @on-select="selectMenuItem"
    @on-open-change="openChange"
  >
    <menu-item-child
      v-for="item in menus"
      :key="item.id"
      :menu-itemmessage="item"
    ></menu-item-child>
  </i-menu>
</template>

<script lang="ts" src="./common-menus.ts"></script>
