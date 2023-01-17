<script setup lang="ts">
import BlFaqIcon from "@/components/BlFaqIcon.vue";
</script>

<template>
  <dt class="bl_faq_q">
    <BlFaqIcon>Q</BlFaqIcon>
    <div class="bl_faq_q_body">
      <slot></slot>
    </div>
    <!-- /.bl_faq_q_txt -->
  </dt>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$color: v.$co_warning;
$color: orange !default;
.bl_faq_q {
  position: relative;
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  min-height: v.$sp_5;
  padding-left: v.$sp_7;
  margin-bottom: v.$sp_2;
  font-size: 1.125rem;
  font-weight: bold;
  &_body {
    padding-top: v.$sp_1;
  }
  &:deep(> .bl_faq_icon) {
    background-color: $color;
    color: #fff;
  }
}
</style>
