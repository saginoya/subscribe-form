<script setup lang="ts"></script>

<template>
  <ul class="bl_cardUnit">
    <slot></slot>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
$gap: v.$sp_1;
$gap: 8px !default;
$breakpoint-md: v.$wi_breakpoint_md;
$breakpoint-md: 960px !default;
$breakpoint-sm: v.$wi_breakpoint_sm;
$breakpoint-sm: 520px !default;

.bl_cardUnit {
  display: grid;
  gap: $gap;
}
.bl_cardUnitCol2 {
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
.bl_cardUnitCol3 {
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
.bl_cardUnitCol4 {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
</style>
