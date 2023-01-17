<script setup lang="ts"></script>

<template>
  <p class="el_note">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;

$font-size: v.$fo_sizeSm;
$font-size: 0.8rem !default;
.el_note {
  font-size: $font-size;
}
</style>
