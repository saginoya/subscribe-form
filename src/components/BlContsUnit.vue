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
.bl_contsUnit {
  @include m.bl_LyCol1(v.$sp_4);
}
</style>
