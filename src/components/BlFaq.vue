<script setup lang="ts"></script>

<template>
  <dl class="bl_faq">
    <slot></slot>
  </dl>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
.bl_faq {
  & > *:last-child {
    margin-bottom: 0;
  }
}
</style>
