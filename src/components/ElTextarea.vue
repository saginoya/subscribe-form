<script setup lang="ts">
const props = defineProps<{
  id: string;
  required?: boolean;
}>();
</script>

<template>
  <textarea
    :name="props.id"
    :id="props.id"
    class="el_textareaBase"
    :required="props.required"
    :aria-required="props.required"
  ></textarea>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.el_textareaBase {
  @include m.el_input;
  width: 100%;
  appearance: none;
}
</style>
