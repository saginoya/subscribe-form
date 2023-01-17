<script setup lang="ts"></script>

<template>
  <li class="bl_card">
    <slot></slot>
  </li>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
.bl_card {
  display: flex;
  flex-direction: column;
  gap: v.$sp_1;
  border: 1px solid v.$co_darkGray;
  border-radius: 4px;
  padding: v.$sp_2 v.$sp_1;
  background-color: #fff;
}
</style>
