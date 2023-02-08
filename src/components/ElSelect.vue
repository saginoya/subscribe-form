<script setup lang="ts">
import { ref, computed } from "vue";

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

const statusError = ref(false);
const onBlurText = (e: Event) => {
  if (props.required) {
    const target = e.target as HTMLInputElement;
    if (!target.value) {
      statusError.value = true;
    } else {
      statusError.value = false;
    }
  }
};

const classObject = computed(() => {
  return {
    el_select: !props.inline,
    el_selectInline: props.inline,
    is_error: statusError.value,
  };
});
</script>

<template>
  <select
    :name="props.id"
    :id="props.id"
    :class="classObject"
    :required="props.required"
    :aria-required="props.required"
    :value="modelValue"
    @input="onInputText"
    @blur="onBlurText"
  >
    <slot></slot>
  </select>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

$color-error: v.$co_error;
$color-error: red !default;
.el_select {
  @include m.el_input;
  width: 100%;
}
.el_selectInline {
  @include m.el_input;
}
.is_error {
  box-shadow: 0 0 0 1px $color-error inset;
}
</style>
