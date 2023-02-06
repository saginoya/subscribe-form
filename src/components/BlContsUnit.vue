<script setup lang="ts"></script>

<template>
  <div class="bl_contsUnit">
    <slot></slot>
  </div>
  <!-- /.bl_contsUnit -->
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$gap: v.$sp_4;
$gap: 40px !default;
.bl_contsUnit {
  @include m.bl_LyCol1($gap);
}
</style>
