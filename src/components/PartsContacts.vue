<script setup lang="ts">
import BlCta from "@/components/BlCta.vue";
import ElIcon from "@/components/ElIcon.vue";

const title: string = "お問い合わせ";
const text: string =
  "その他、不明な点などあれば以下のメールアドレスまでご連絡ください。";
const email: string = "hambai@create-nippo.co.jp";
</script>

<template>
  <BlCta :title="title">
    <template v-slot:title>
      <ElIcon name="email-outline" />
      {{ title }}
    </template>
    <p>
      {{ text }}
    </p>
    <p>
      <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
  </BlCta>
</template>
