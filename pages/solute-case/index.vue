<template>
  <div class="solute-case">
    <div class="content__header solute-case__header">
      <video autoplay loop muted>
        <source
          src="~@/assets/image/solution/project-banner.webm"
          type="video/webm"
        />
      </video>
      <p class="content__header--largestfont">魔思科技行业解决方案</p>
      <div class="content__header--largefont">
        <p>魔思科技运用前沿图形、算法技术</p>
        <p>助力落实传统行业数字化转型，重塑核心竞争力</p>
      </div>
    </div>
    <div class="content">
      <div class="solute-case__content">
        <div class="content--box">
          <ul class="box--list">
            <li
              v-for="(item, index) in SloutCaseList"
              :key="index"
              class="box--item"
              :class="item.active ? 'active--item' : 'default--item'"
              @mouseover="mouseOverEvent(index)"
            >
              <div
                :class="[
                  item.active ? 'item--active-icon' : 'item--default-icon',
                  'item-icon',
                ]"
              >
                <img
                  :src="item.active ? item.activeIcon : item.defalutIcon"
                  alt=""
                />
              </div>
              <div
                :class="[
                  item.active ? 'item--active-title' : 'item--default-title',
                  'item-title',
                ]"
              >
                {{ item.title }}
              </div>
              <div
                v-show="item.active"
                :class="[
                  index === 3 ? 'item--line-large' : 'item--line-small',
                  'item--line',
                ]"
              ></div>
              <div v-show="!item.active" class="item--img">
                <img :src="item.maskImg" alt="" />
                <img src="~@/assets/image/solution/granient.png" alt="" />
                <img src="~@/assets/image/solution/solution-mark.png" alt="" />
              </div>
              <div v-show="item.active" class="item--text">
                <div
                  v-for="(_item, _index) in item.text"
                  v-show="item.active"
                  :key="_index"
                  class="item--text--single"
                  @click="toPage(_item.route, _item.query)"
                >
                  <span class="item--text-count">{{ CountRoma[_index] }}</span
                  >{{ _item.content }}
                </div>
              </div>
              <div v-show="item.active" class="item--bg-text">
                {{ item.bgText }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
