<template>
  <div class="global-footer">
    <div class="global-footer--top">
      <div class="global-footer--top--text">
        <div class="text__left">
          <Row type="flex" justify="center">
            <i-col span="6" order="1">
              <div class="text__left--product">
                <div class="text__left--title">
                  {{ ProductSystemList.title }}
                </div>
                <div v-for="item in ProductSystemList.list" :key="item.id">
                  {{ item.name }}
                </div>
              </div>
            </i-col>
            <i-col span="6" order="2">
              <div class="text__left--case">
                <div class="text__left--title">{{ SuccessCaseList.title }}</div>
                <div class="text__left--case--wrap">
                  <div v-for="item in SuccessCaseList.list" :key="item.id">
                    <div v-for="(_item, index) in item" :key="index">
                      {{ _item }}
                    </div>
                  </div>
                </div>
              </div>
            </i-col>
            <i-col span="12" order="3">
              <div class="text__left--contact">
                <div class="text__left--title">{{ contactUsList.title }}</div>
                <div v-for="item in contactUsList.list" :key="item">
                  {{ item }}
                </div>
              </div>
            </i-col>
          </Row>
        </div>
        <div class="text__right">
          <div class="text__right--title">微信扫一扫</div>
          <div class="text__right--qrcode">
            <img src="~@/assets/image/homepage/qrcode.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <copyright></copyright>
  </div>
</template>

<script lang="ts" src="./global-footer.ts"></script>
<style lang="scss" src="./global-footer.scss" scoped></style>
