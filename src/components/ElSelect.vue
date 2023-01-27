<script setup lang="ts">
type Props = {
  id: string;
  required?: boolean;
  inline?: boolean;
  modelValue?: string;
};

const props = defineProps<Props>();
const emits = defineEmits<{ (e: "update:modelValue", text: string): void }>();

const onInputText = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<template>
  <select
    :name="props.id"
    :id="props.id"
    :class="props.inline ? 'el_selectInline' : 'el_select'"
    :required="props.required"
    :aria-required="props.required"
    :value="modelValue"
    @input="onInputText"
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
