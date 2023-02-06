<script setup lang="ts">
import { computed } from "vue";

type Props = {
  label?: string;
  labelColor?: string;
};
const props = defineProps<Props>();

const labelColorClass = computed(() => {
  switch (props.labelColor) {
    case "green":
      return "bl_cardLabel_childGreen";
    case "blue":
      return "bl_cardLabel_childBlue";
    default:
      return "";
  }
});
</script>

<template>
  <div class="bl_card" :class="{ bl_cardLabel: props.label }">
    <span
      v-if="props.label"
      class="bl_cardLabel_child"
      :class="labelColorClass"
      >{{ props.label }}</span
    >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;

$gap: v.$sp_1;
$gap: 8px !default;
$border-color: v.$co_darkGray;
$border-color: gray !default;
$padding: v.$sp_2 v.$sp_1;
$padding: 16px 8px !default;
$label-color-blue: v.$co_themeHoso;
$label-color-blue: blue !default;
$label-color-green: v.$co_themekankyo;
$label-color-green: green !default;
.bl_card {
  display: flex;
  flex-direction: column;
  gap: $gap;
  border: 1px solid v.$co_darkGray;
  border-radius: 4px;
  background-color: #fff;
  &Label {
    position: relative;
    padding-top: 16px;
    &_child {
      position: absolute;
      top: -1px;
      left: 6px;
      color: white;
      background-color: red;
      padding: 0px 6px;
      border-radius: 0 0 4px 4px;
      &Blue {
        background-color: $label-color-blue;
      }
      &Green {
        background-color: $label-color-green;
      }
    }
  }
}
</style>
