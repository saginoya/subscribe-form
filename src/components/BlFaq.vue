<script setup lang="ts">
import BlFaqA from "@/components/BlFaqA.vue";
import BlFaqQ from "@/components/BlFaqQ.vue";
</script>

<template>
  <dl class="bl_faq">
    <slot>
      <BlFaqQ>Question</BlFaqQ>
      <BlFaqA>
        <p>Answer</p>
      </BlFaqA>
    </slot>
  </dl>
</template>

<style scoped lang="scss">
.bl_faq {
  & > *:last-child {
    margin-bottom: 0;
  }
}
</style>
