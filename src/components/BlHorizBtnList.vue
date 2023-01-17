<script setup lang="ts"></script>

<template>
  <ul class="bl_horizBtnList">
    <slot></slot>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
.bl_horizBtnList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: v.$sp_2;
}
</style>
