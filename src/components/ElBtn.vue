<script setup lang="ts"></script>

<template>
  <button class="el_roundedBtn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;

$color: v.$co_secondary;
$color: green !default;

@mixin el_btn_base($color: #e25c00) {
  display: inline-block;
  width: v.$wi_btnBase;
  max-width: 100%;
  padding: v.$sp_2 v.$sp_1;
  background-color: $color;
  border: 2px solid transparent;
  box-shadow: v.$sh_base;
  color: v.$co_fontBaseDark;
  font-size: v.$fo_sizeLg;
  text-align: center;
  text-decoration: none;
  transition: v.$tr_speed;
  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: $color;
    outline: 2px currentColor;
  }
}
.el_btn {
  @include el_btn_base($color);
}
.el_roundedBtn {
  @include el_btn_base($color);
  border-radius: 10px;
}
</style>
