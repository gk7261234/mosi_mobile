<template>
  <div class="content__header--anchor">
    <div
      v-for="item in anchors"
      :key="item.title"
      :class="activeClass(item.link)"
      @click="jumpAnchor(item.link)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts" src="./anchor-component.ts"></script>
