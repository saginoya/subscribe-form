<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  color?: "gray";
}>();

const className = ref("el_roundedBtn");
switch (props.color) {
  case "gray":
    className.value = "el_roundeBtnGray";
    break;
  default:
    break;
}
</script>

<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;

$color: v.$co_secondary;
$color: green !default;
$width: v.$wi_btnBase;
$width: 300px !default;
$padding: v.$sp_2 v.$sp_1;
$padding: 16px 8px !default;
$box-shadow: v.$sh_base;
$box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !default;
$font-size: v.$fo_sizeLg;
$font-size: 1.125rem !default;
$font-color: v.$co_fontBaseDark;
$font-color: white !default;
$transition-speed: v.$tr_speed;
$transition-speed: 0.25s;

@mixin el_btn_base($color: #e25c00) {
  display: inline-block;
  width: $width;
  max-width: 100%;
  padding: $padding;
  background-color: $color;
  border: 2px solid transparent;
  box-shadow: $box-shadow;
  color: $font-color;
  font-size: $font-size;
  text-align: center;
  text-decoration: none;
  transition: $transition-speed;
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
.el_roundeBtnGray {
  @include el_btn_base(#aaa);
  border-radius: 10px;
}
</style>
