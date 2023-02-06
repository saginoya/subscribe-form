<script setup lang="ts"></script>

<template>
  <main class="bl_card_body">
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/sass/mixin" as m;

.bl_card_body {
  @include m.bl_CardChaild;
}
</style>
