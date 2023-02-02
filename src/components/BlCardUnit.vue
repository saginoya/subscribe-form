<script setup lang="ts"></script>

<template>
  <ul class="bl_cardUnit">
    <slot></slot>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
.bl_cardUnit {
  display: grid;
  gap: v.$sp_1;
}
.bl_cardUnitCol2 {
  grid-template-columns: 1fr 1fr;
}
.bl_cardUnitCol3 {
  grid-template-columns: 1fr 1fr 1fr;
}
.bl_cardUnitCol4 {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
