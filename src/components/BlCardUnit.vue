<script setup lang="ts"></script>

<template>
  <ul class="bl_cardUnit">
    <slot></slot>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
.bl_cardUnit {
  display: flex;
  flex-wrap: wrap;
  gap: v.$sp_1;
  &:deep(> li) {
    width: (v.$wi_blockMax / 3) - (v.$sp_1 * 2);
  }
}
</style>
