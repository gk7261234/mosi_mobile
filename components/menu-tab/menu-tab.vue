<template>
  <div class="dropdown-content">
    <Menu width="auto">
      <template v-for="(menuItem, index) in MenuJson">
        <ChildMenu
          v-if="menuItem.children && menuItem.children.length !== 0"
          :key="index"
          :parent-item="menuItem"
        />
        <MenuItem
          v-else
          :key="index"
          :name="menuItem.name"
          :class="[menuItem.level || 'none']"
        >
          <i v-if="menuItem.icon" :class="[menuItem.icon]" />
          <span>{{ menuItem.name }}</span>
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>
<script lang="ts" src="./menu-tab.ts"></script>
<style lang="scss" src="./menu-tab.scss" scoped></style>
