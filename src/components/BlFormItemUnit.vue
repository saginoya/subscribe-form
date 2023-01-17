<script setup lang="ts"></script>

<template>
  <div class="bl_formItemUnit">
    <slot></slot>
  </div>
  <!-- /.bl_formItemUnit -->
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.bl_formItemUnit {
  @include m.bl_LyCol1(v.$sp_8);
}
</style>
