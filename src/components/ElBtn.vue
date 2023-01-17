<script setup lang="ts"></script>

<template>
  <button class="el_roundedBtn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$color: v.$co_secondary;
$color: green !default;
.el_btn {
  @include m.el_btn_base($color);
}
.el_roundedBtn {
  @include m.el_btn_base($color);
  border-radius: 10px;
}
</style>
