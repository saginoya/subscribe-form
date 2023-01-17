<script setup lang="ts"></script>

<template>
  <fieldset class="bl_fieldset">
    <legend class="bl_fieldset_ttl">
      <slot name="title"></slot>
    </legend>
    <div class="bl_fieldset_body">
      <slot></slot>
    </div>
    <!-- /.bl_fieldset_body -->
  </fieldset>
  <!-- /.bl_formItemUnit -->
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.bl_fieldset_body {
  @include m.bl_LyCol1(v.$sp_3);
}
</style>
