<script setup lang="ts">
import ElChip from "@/components/ElChip.vue";
import ElInput from "@/components/ElInput.vue";

const props = defineProps<{
  label: string;
  id?: string;
  required?: boolean;
  type?:
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
  autocomplete?: string;
  placeholder?: string;
  title?: string;
  inputmode?: string;
  modelValue?: string;
  readonly?: boolean;
}>();

const emits = defineEmits<{ (e: "update:modelValue", text: string): void }>();

const onInputText = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<template>
  <div class="bl_inputGroup">
    <p>
      <label v-if="props.id" class="bl_inputGroup_ttl" :for="props.id">
        {{ props.label }}
      </label>
      <span v-else class="bl_inputGroup_ttl">
        {{ props.label }}
      </span>
      <ElChip v-if="props.required">必須</ElChip>
    </p>
    <!-- /.bl_inputGroup_ttl -->
    <div class="bl_inputGroup_conts">
      <slot>
        <ElInput
          v-if="props.type && props.id"
          :type="props.type"
          :inputmode="props.inputmode"
          :id="props.id"
          :autocomplete="props.autocomplete"
          :placeholder="props.placeholder"
          :required="props.required"
          :readonly="props.readonly"
          :title="props.title"
          :value="modelValue"
          @input="onInputText"
        ></ElInput>
      </slot>
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
