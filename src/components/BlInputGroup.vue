<script setup lang="ts">
import ElChip from "@/components/ElChip.vue";

const props = defineProps<{
  label: string;
  required?: boolean;
  for?: string;
}>();
</script>

<template>
  <div class="bl_inputGroup">
    <p class="bl_inputGroup_header">
      <label class="bl_inputGroup_ttl" :for="props.for">
        {{ props.label }}
      </label>
      <ElChip v-if="props.required">必須</ElChip>
    </p>
    <!-- /.bl_inputGroup_ttl -->
    <div class="bl_inputGroup_conts" id="inputsArea">
      <slot> </slot>
    </div>
    <!-- /.bl_inputGroup_conts -->
  </div>
  <!-- /.bl_inputGroup -->
</template>

<style scoped lang="scss">
@use "@/assets/sass/mixin" as m;
.bl_inputGroup {
  @include m.bl_LyCol1(4px);
  &_header {
    display: flex;
    gap: 4px;
  }
  &_ttl {
    font-weight: bold;
  }
}
</style>
