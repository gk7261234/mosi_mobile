<template>
  <div class="value-list-component">
    <div
      v-for="(item, index) in valueList"
      :key="index"
      class="value-list-component--box"
    >
      <img
        class="value-list-component--box-img"
        :src="getNumber(index)"
        alt="1"
      />
      <p class="value-list-component--box-desc">{{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./value-list-component.ts"></script>
<style lang="scss" src="./value-list-component.scss" scoped></style>
