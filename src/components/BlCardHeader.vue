<script setup lang="ts"></script>

<template>
  <header class="bl_card_header"><slot></slot></header>
</template>

<style scoped lang="scss">
@use "@/assets/sass/mixin" as m;

.bl_card_header {
  border-bottom: rgba(238, 238, 238, 0.952) solid 1px;
  @include m.bl_CardChaild;
}
</style>
