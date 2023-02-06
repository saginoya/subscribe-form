<script setup lang="ts"></script>

<template>
  <section class="ly_cont">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$padding: v.$sp_7;
$padding: 32px !default;
.ly_cont {
  @include m.ly_centered;
  padding-top: $padding;
  padding-bottom: $padding;
}
</style>
