<script setup lang="ts"></script>

<template>
  <li class="bl_card">
    <div class="header"><slot name="header"></slot></div>
    <slot></slot>
    <slot name="footer"></slot>
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
  & .header {
    padding: 0.25rem;
    border-bottom: rgba(238, 238, 238, 0.952) solid 1px;
  }
}
</style>
