<script setup lang="ts">
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
  required?: boolean;
  inline?: boolean;
};

const props = defineProps<Props>();
</script>

<template>
  <input
    :type="props.type"
    :name="props.id"
    :id="props.id"
    :class="props.inline ? 'el_inputInline' : 'el_inputBase'"
    :required="props.required"
    :aria-required="props.required"
  />
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;
.el_inputBase {
  @include m.el_input;
  width: 100%;
  appearance: none;
}
.el_inputInline {
  @include m.el_input;
  appearance: none;
}
</style>
