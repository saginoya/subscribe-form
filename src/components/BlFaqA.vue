<script setup lang="ts">
import BlFaqIcon from "@/components/BlFaqIcon.vue";
</script>

<template>
  <dd class="bl_faq_a">
    <BlFaqIcon>A</BlFaqIcon>
    <div class="bl_faq_a_body">
      <slot></slot>
    </div>
    <!-- /.bl_faq_a_body -->
  </dd>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.bl_faq_a {
  position: relative;
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  min-height: v.$sp_5;
  padding-left: v.$sp_7;
  padding-bottom: v.$sp_2;
  margin-bottom: v.$sp_2;
  border-bottom: v.$li_base;
  &_body {
    padding-top: v.$sp_1;
    &:deep(*) {
      margin-bottom: v.$sp_1;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &:deep(> .bl_faq_icon) {
    background-color: #efefef;
    color: v.$co_warning;
  }
}
</style>
