<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true, default: "cog" },
  spin: { type: Boolean, default: false },
});
</script>

<template>
  <mdicon :name="props.name" :spin="props.spin" />
</template>
