<script setup lang="ts">
import { ref, computed } from "vue";
type Props = {
  type:
    | "email"
    | "color"
    | "date"
    | "datetime"
    | "datetime-local"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "range"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  id: string;
  name?: string;
  required?: boolean;
  inline?: boolean;
  modelValue?: string | number;
};

const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "update:modelValue", text: string | number): void;
}>();

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
    hp_fullWidth: !props.inline,
    is_error: statusError.value,
  };
});
</script>

<template>
  <input
    :type="props.type"
    :name="props.name || props.id"
    :id="props.id"
    class="el_inputBase"
    :class="classObject"
    :required="props.required"
    :aria-required="props.required"
    :value="modelValue"
    @input="onInputText"
    @blur="onBlurText"
  />
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

.el_inputBase {
  @include m.el_input;
  appearance: none;
  &.hp_fullWidth {
    width: 100%;
  }
  &.is_error {
    $color: v.$co_error;
    $color: red !default;
    box-shadow: 0 0 0 1px $color inset;
  }
}
</style>
