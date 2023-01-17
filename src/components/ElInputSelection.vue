<script setup lang="ts">
type Props = {
  type: "checkbox" | "radio";
  id: string;
  value: string;
  required?: boolean;
  checked?: boolean;
};

const props = defineProps<Props>();
</script>

<template>
  <label class="el_inputSelection_label">
    <input
      :type="props.type"
      :name="props.id"
      class="el_inputSelection"
      :value="props.value"
      :required="props.required"
      :aria-required="props.required"
      :checked="props.checked"
    />
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

.el_inputSelection {
  opacity: 0;
  position: absolute;
  &_label {
    cursor: pointer;
    border: 1px dashed transparent;
    display: inline-block;
    position: relative;
    padding-left: 32px;
    padding-right: 10px;
    border-radius: 10px;
    &::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 6px;
      box-sizing: border-box;
      width: 20px;
      height: 20px;
      border: 2px solid;
      border-radius: 4px;
      border-color: gray;
      background-color: #fff;
    }
    &:has(.el_inputSelection:focus-visible),
    &:focus,
    &:hover {
      color: v.$co_info;
      border-color: v.$co_info;
      transition: 0.1s;
    }
    &:has(.el_inputSelection:checked):after {
      content: "";
      position: absolute;
      display: block;
      background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M18.9 35.1q-.3 0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8 18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95 34.65q-.25.25-.5.35-.25.1-.55.1Z"/></svg>');
      width: 20px;
      height: 20px;
      font-size: 20px;
      top: 2px;
      left: 6px;
      background-size: contain;
    }
  }
}
</style>
