<script setup lang="ts"></script>

<template>
  <span class="bl_faq_icon"><slot></slot></span>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$size: 45px;
.bl_faq_icon {
  position: absolute;
  top: 0;
  left: 0;
  width: $size;
  height: $size;
  border-radius: 50%;
  font-weight: normal;
  line-height: $size;
  text-align: center;
}
</style>
