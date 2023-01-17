<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true, default: "Call To Action" },
});
</script>

<template>
  <address class="bl_cta">
    <h2 class="bl_cta_ttl">{{ props.title }}</h2>
    <slot></slot>
  </address>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
$color: v.$co_warning;
$color: orange !default;
.bl_cta {
  padding: v.$sp_3;
  background-color: rgba($color, 0.05);
  border: 1px solid $color;
  text-align: center;
  &_ttl {
    padding-bottom: v.$sp_1;
    margin-bottom: v.$sp_2;
    border-bottom: 1px solid currentColor;
    color: $color;
    font-size: 1.4rem;
    font-weight: bold;
  }
  &:deep(> *) {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
