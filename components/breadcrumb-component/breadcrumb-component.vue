<template>
  <Breadcrumb class="breadcrumb-component" separator=">">
    <BreadcrumbItem
      v-for="item in breadcrumbs"
      :key="item.key"
      :to="item.route"
      >{{ item.title }}</BreadcrumbItem
    >
  </Breadcrumb>
</template>

<script lang="ts" src="./breadcrumb-component.ts"></script>
<style lang="scss" src="./breadcrumb-component.scss" scoped></style>
<style lang="scss">
// .breadcrumb-component {
.ivu-breadcrumb a {
  color: $normalColor;
  &:hover {
    color: #ff9c0f;
  }
}
.ivu-breadcrumb-item-separator {
  color: $normalColor;
}
.ivu-breadcrumb > span:last-child {
  font-weight: 400;
}
// }
</style>
