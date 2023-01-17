<script setup lang="ts">
type Props = {
  id: string;
  required?: boolean;
  inline?: boolean;
};

const props = defineProps<Props>();
</script>

<template>
  <select
    :name="props.id"
    :id="props.id"
    :class="props.inline ? 'el_selectInline' : 'el_select'"
    :required="props.required"
    :aria-required="props.required"
  >
    <slot></slot>
  </select>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.el_select {
  @include m.el_input;
  width: 100%;
}
.el_selectInline {
  @include m.el_input;
}
</style>
