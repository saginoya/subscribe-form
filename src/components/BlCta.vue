<script setup lang="ts"></script>

<template>
  <address class="bl_cta">
    <h2 class="bl_cta_ttl">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </address>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
$color: v.$co_success;
$color: orange !default;
$padding: v.$sp_3;
$padding: 24px !default;
.bl_cta {
  padding: $padding;
  background-color: rgba($color, 0.05);
  border: 1px solid $color;
  border-radius: 10px;
  &_ttl {
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid currentColor;
    color: $color;
    font-size: 1.4rem;
    font-weight: bold;
  }
  &:deep(> *) {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
