<script setup lang="ts">
const props = defineProps<{
  id: string;
  name?: string;
  required?: boolean;
  modelValue?: string;
}>();

const emits = defineEmits<{ (e: "update:modelValue", text: string): void }>();

const onInputText = (e: Event) => {
  const target = e.target as HTMLInputElement;
  console.log(target);
  emits("update:modelValue", target.value);
};
</script>

<template>
  <textarea
    :id="props.id"
    :name="props.name || props.id"
    class="el_textareaBase"
    :required="props.required"
    :aria-required="props.required"
    :value="modelValue"
    @input="onInputText"
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
