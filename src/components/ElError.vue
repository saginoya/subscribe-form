<script setup lang="ts"></script>

<template>
  <p class="el_error">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;

$color: v.$co_error;
$color: red !default;

.el_error {
  color: $color;
}
</style>
