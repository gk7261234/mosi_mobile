<template>
  <div class="menu-item-child">
    <Submenu
      v-if="menuItemmessage.children"
      :key="menuItemmessage.id"
      :name="menuItemmessage.name"
    >
      <template slot="title">
        <span>{{ menuItemmessage.title }}</span>
      </template>
      <MenuItem
        v-for="children in menuItemmessage.children"
        :key="children.id"
        :name="children.name"
      >
        <Tooltip
          v-if="children.name === '1-1'"
          :content="children.title"
          theme="light"
          transfer
          placement="right"
          max-width="400"
        >
          <span class="menu-overflow">{{ children.title }}</span>
        </Tooltip>
        <span v-else class="menu-overflow">{{ children.title }}</span>
      </MenuItem>
    </Submenu>
  </div>
</template>
<script lang="ts" src="./menu-item-child.ts"></script>
<style lang="scss" src="./menu-item-child.scss" scoped></style>
