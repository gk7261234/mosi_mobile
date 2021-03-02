<template>
  <!-- :open-names="['产品体系']" -->
  <i-menu mode="horizontal" :active-name="ActiveName" class="menu-component">
    <!-- 产品体系 -->
    <Submenu
      name="产品体系"
      :class="[
        ActiveName === 'product-system' ? 'menu-item-active' : '',
        'propduct-system--menu',
      ]"
    >
      <template slot="title">
        <span @click="toPage('/product-system')">产品体系</span>
      </template>
      <system-submenu></system-submenu>
    </Submenu>
    <!-- 解决方案 -->
    <Submenu
      name="解决方案"
      :class="[
        ActiveName === 'solute-case' ? 'menu-item-active' : '',
        'solute-case',
      ]"
    >
      <template slot="title">
        <span @click="toPage('/solute-case')">解决方案</span>
      </template>
      <div class="solute-case--wrap">
        <MenuGroup v-for="(item, index) in SlouteSubMenu" :key="index" title="">
          <MenuItem
            :key="item.name"
            :name="item.name"
            :to="item.path"
            class="case--single"
            @mouseover.native="hoverCase(index)"
            @mouseleave.native="leaveCase(index)"
          >
            <div>
              <img
                :src="
                  item.active && index === 0 ? item.activeImg : item.defaultImg
                "
                alt=""
              />
            </div>
            <div class="case--single--title">{{ item.name }}</div></MenuItem
          >
        </MenuGroup>
      </div>
    </Submenu>

    <!-- 成功案例 关于我们 加入我们 -->
    <MenuItem
      v-for="item in MenuInfo.MenuItemList"
      :key="item.name"
      :name="item.title"
      :to="item.path"
      >{{ item.name }}
    </MenuItem>
  </i-menu>
</template>

<script lang="ts" src="./menu-tab.ts"></script>
<style lang="scss" src="./menu-tab.scss" scoped></style>
<style lang="scss">
.ivu-menu-horizontal .ivu-menu-submenu,
.ivu-menu {
  position: static;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown {
  width: 100vw;
  padding: calc(30 / 1080 * 100vh) 18.7vw;
  box-shadow: 0px 0px 20px 0px rgba(75, 77, 84, 0.15);
  opacity: 0.97;
  left: 0 !important;
  border-radius: 0;
}
.solute-case .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown {
  padding: calc(40 / 1080 * 100vh) clac(360 / 1920 * 100vw);
}
.propduct-system--menu .ivu-menu-drop-list {
  min-width: 1000px;
}
.ivu-menu-item-group-title {
  display: none;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
  padding: 0;
  cursor: default;
  &:hover {
    // color: $hoverColor;
    background-color: transparent;
  }
}

.ivu-menu-horizontal
  .ivu-menu-submenu
  .ivu-select-dropdown
  .ivu-menu-item-selected {
  color: #666666;
}

.ivu-menu-horizontal
  .ivu-menu-submenu
  .ivu-select-dropdown
  .ivu-menu-item-selected:hover {
  color: #515a6e;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  border-bottom: 2px solid #ff9c0f;
  color: #ff9c0f;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-group .ivu-menu-item:hover {
  color: #515a6e;
}
.ivu-menu-light.ivu-menu-horizontal .solute-case--wrap .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .solute-case--wrap .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .solute-case--wrap .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .solute-case--wrap .ivu-menu-submenu:hover {
  border: none;
  color: #515a6e;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
  color: $headerColor;
  font-size: $normalSize;
}
.content-links--route--single
  .ivu-menu-horizontal
  .ivu-menu-submenu
  .ivu-select-dropdown
  .ivu-menu-item {
  font-size: $smallSize !important;
}
.ivu-menu-horizontal .ivu-menu-item,
.ivu-menu-horizontal .ivu-menu-submenu {
  padding: 0;
  margin: 0 20px;
}
.ivu-menu-submenu-title span > i,
.ivu-menu-submenu-title > i {
  margin: 0;
}
.ivu-menu-horizontal .ivu-menu-submenu {
  cursor: default;
}
.ivu-select-dropdown {
  margin: 0;
}
</style>
