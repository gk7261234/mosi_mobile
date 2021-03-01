<template>
  <div class="join-us">
    <div class="content__header join-us__header">
      <video autoplay loop muted>
        <source
          src="~@/assets/image/joinUs/joinus-banner.webm"
          type="video/webm"
        />
      </video>
      <p class="content__header--largestfont">我们期待你的加入</p>
      <div class="content__header--largefont">
        <p>揽一程清风，唯愿你扶摇直上</p>
      </div>
    </div>
    <div class="join-us__content content">
      <div class="join-us__content--work-type">
        <div
          v-for="item in workTypeList"
          :key="item.category"
          class="work-type--single"
        >
          <div>{{ item.category }}</div>
          <div class="single--name single-all job-type--selected">全部</div>
          <div
            v-for="_item in item.detail"
            :key="_item.id"
            class="single--name"
          >
            {{ _item.name }}
          </div>
        </div>
      </div>
      <div class="join-us__content--work-detail">
        <div
          v-for="(item, index) in workDeatil"
          :key="item.jobName"
          class="work-detail--single"
        >
          <div class="single__header">
            <div class="single__header--name">{{ item.jobName }}</div>
            <div class="single__header--button" @click="changeButton(index)">
              <img :src="item.open ? upArrow : downArrow" alt="" />
            </div>
          </div>
          <!-- 显示start -->
          <collapse-transition>
            <div v-show="item.open" class="single__content">
              <div class="single__content--duty">
                <div>工作职责：</div>
                <div v-for="(_item, index) in item.jobDuty" :key="index">
                  {{ _item }}
                </div>
              </div>
              <div class="single__content--qualifications">
                <div>任职资格：</div>
                <div
                  v-for="(_item_, index) in item.qualifications"
                  :key="index"
                >
                  {{ _item_ }}
                </div>
              </div>
              <div class="single__content__footer">
                如果您对该职位感兴趣，请直接给我们投递简历：<span
                  class="footer--email"
                  >zhaopin@magic-mind.com</span
                >
              </div>
            </div>
          </collapse-transition>
          <!-- 显示 end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
