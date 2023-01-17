<script setup lang="ts"></script>

<template>
  <span class="el_chip">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$color: v.$co_success;
$color: green !default;
$font-size: v.$fo_sizeXs;
$font-size: 0.8rem !default;
.el_chip {
  display: inline-block;
  padding: 0.2em 0.9em;
  background-color: $color;
  color: #fff;
  font-size: $font-size;
  font-weight: bold;
  border-radius: 1em;
  vertical-align: middle;
}
</style>
