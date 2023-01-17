<script setup lang="ts"></script>

<template>
  <section class="ly_cont">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.ly_cont {
  @include m.ly_centered;
  padding-top: v.$sp_7;
  padding-bottom: v.$sp_7;
}
</style>
