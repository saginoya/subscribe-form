<script setup lang="ts">
import ElChip from "@/components/ElChip.vue";

const props = defineProps<{
  title: string;
  id?: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="bl_inputGroup">
    <p>
      <label v-if="props.id" class="bl_inputGroup_ttl" :for="props.id">
        {{ props.title }}
      </label>
      <span v-else class="bl_inputGroup_ttl">
        {{ props.title }}
      </span>
      <ElChip v-if="props.required">必須</ElChip>
    </p>
    <!-- /.bl_inputGroup_ttl -->
    <div class="bl_inputGroup_conts">
      <slot> </slot>
    </div>
    <!-- /.bl_inputGroup_conts -->
  </div>
  <!-- /.bl_inputGroup -->
</template>

<style scoped lang="scss">
.bl_inputGroup {
  &_ttl {
    font-weight: bold;
  }
}
</style>
