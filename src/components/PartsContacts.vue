<script setup lang="ts">
import BlCta from "@/components/BlCta.vue";

const title: string = "お問い合わせ";
const text: string =
  "その他、不明な点などあれば以下のメールアドレスまでご連絡ください。";
const email: string = "hambai@create-nippo.co.jp";
</script>

<template>
  <BlCta :title="title">
    <p>
      {{ text }}
    </p>
    <p>
      <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
  </BlCta>
</template>
