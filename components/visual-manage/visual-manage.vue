<template>
  <div class="visual-manage">
    <Card
      v-for="(item, index) in visualArr"
      :key="item.id"
      class="visual-manage--card"
      @click.native="showDetail(item.name, index)"
    >
      <div slot="title" class="visual-manage--card__header">
        <img :src="item.titleImg" />
      </div>
      <div class="visual-manage--card__content" :style="styles(item.contentBg)">
        <div class="visual-manage--card__content--mask">
          <p class="visual-manage--card__content--mask-title">
            {{ item.contentTitle }}
          </p>
          <p class="visual-manage--card__content--mask--desc">
            {{ item.contentDesc }}
          </p>
          <Button
            class="visual-manage--card__content--mask-btn"
            @click="showDetail(item.name)"
            >{{ item.btnDesc }}</Button
          >
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" src="./visual-manage.ts"></script>
<style lang="scss" src="./visual-manage.scss" scoped></style>
