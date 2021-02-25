<template>
  <div class="menu-system--wrap">
    <!-- 大数据平台 -->
    <div class="menu--big-data-platform">
      <div class="big-data-platform__title">
        <img src="~@/assets/image/productSystem/pltform-icon.png" alt="" />
        <span>大数据平台</span>
      </div>
      <div class="big-data-platform__content">
        <div class="content--photo photo-left">
          <img
            src="~@/assets/image/productSystem/bigdata-platform-image.png"
            alt=""
          />
        </div>
        <div
          v-for="(item, index) in bigDataPlatForm"
          :key="index"
          class="content--links"
        >
          <div class="content-links--title content--links--header">
            {{ item.title }}
          </div>
          <div class="content-links--route">
            <MenuGroup
              v-for="(_item, indey) in item.list"
              :key="indey"
              title=""
            >
              <MenuItem
                :key="_item.name"
                :name="_item.name"
                :to="_item.path"
                :class="[
                  _item.name === '自主采集汇总平台' ? 'hoverLight' : '',
                  'content-links--route--single',
                ]"
                >{{ _item.name }}</MenuItem
              >
            </MenuGroup>
          </div>
        </div>
      </div>
    </div>
    <!-- 可视化工具 是否要做循环-->
    <div class="menu--visualization-tools">
      <div class="visualization-tools__title">
        <img src="~@/assets/image/productSystem/tool-icon.png" alt="" />
        <span>可视化工具</span>
      </div>
      <div class="visualization-tools__content">
        <div class="content--photo photo-left">
          <img
            src="~@/assets/image/productSystem/visualization-tool-image.png"
            alt=""
          />
        </div>
        <div
          v-for="(item, index) in VisualizationTools"
          :key="index"
          class="content--links"
        >
          <div class="content-links--title">
            <div>{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./big-data-platform.ts"></script>
<style lang="scss" src=".././menu-tab.scss"></style>
<style lang="scss" src="./big-data-platform.scss" scoped></style>
