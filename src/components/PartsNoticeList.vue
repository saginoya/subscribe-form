<script setup lang="ts">
import BlFaq from "@/components/BlFaq.vue";
import BlFaqA from "@/components/BlFaqA.vue";
import BlFaqQ from "@/components/BlFaqQ.vue";

interface Faq {
  questions: string[];
  answers: string[];
}

const faqs: Array<Faq> = [
  {
    questions: ["年間購読のお申し込みの流れについて"],
    answers: [
      "前納制となりますので、先に請求書をお送りし、ご入金確認後の発送となります。",
    ],
  },
  {
    questions: ["購読開始月について"],
    answers: ["ご指定が無ければ、お申し込み月からの開始となります。"],
  },
  {
    questions: ["その他の指定について"],
    answers: [
      "連絡事項などにつきましては、備考欄にご記入をお願いいたします。",
      "例：請求先・送付先を別途ご指定など",
    ],
  },
];
</script>

<template>
  <BlFaq>
    <template v-for="(faq, index) in faqs" :key="index">
      <BlFaqQ
        ><p v-for="(question, qIndex) in faq.questions" :key="index + qIndex">
          {{ question }}
        </p></BlFaqQ
      >
      <BlFaqA>
        <p v-for="(answer, aIndex) in faq.answers" :key="index + aIndex">
          {{ answer }}
        </p>
      </BlFaqA>
    </template>
  </BlFaq>
</template>
