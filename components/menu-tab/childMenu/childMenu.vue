<template>
  <Submenu :name="parentItem.name" :class="[parentItem.level || 'none']">
    <template slot="title">
      <i v-if="parentItem.icon" :class="[parentItem.icon]" />
      <span>{{ parentItem.name }}</span>
    </template>
    <template v-for="(item, index) in parentItem.children">
      <ChildMenu
        v-if="item.children && item.children.length !== 0"
        :key="index"
        :parent-item="item"
      >
      </ChildMenu>
      <MenuItem
        v-else
        :key="index"
        :name="item.name"
        :class="[item.level || 'none']"
      >
        <i v-if="item.icon" :class="[item.icon]" />
        <span>{{ item.name }}</span>
      </MenuItem>
    </template>
  </Submenu>
</template>
<script lang="ts" src="./childMenu.ts"></script>
<style lang="scss" src="./childMenu.scss" scoped></style>
