<script setup lang="ts"></script>

<template>
  <footer class="bl_card_footer"><slot></slot></footer>
</template>

<style scoped lang="scss">
@use "@/assets/sass/mixin" as m;

.bl_card_footer {
  border-top: rgba(238, 238, 238, 0.952) solid 1px;
  @include m.bl_CardChaild;
}
</style>
