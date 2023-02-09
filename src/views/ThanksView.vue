<script setup lang="ts">
import LyCont from "@/components/LyCont.vue";
import BlContsUnit from "@/components/BlContsUnit.vue";
import BlHorizBtnList from "@/components/BlHorizBtnList.vue";
import ElBtn from "@/components/ElBtn.vue";

const backToSite = (): void => {
  location.href = "https://www.nippo.co.jp/";
};
</script>

<template>
  <LyCont>
    <BlContsUnit>
      <section>
        <h2 class="el_lv2heading">お申し込みありがとうございました</h2>
        <p>お申し込みが完了いたしました。</p>
        <p>
          自動返信メールをご入力いただいたメールアドレス宛に送信しておりますのでご確認ください。
        </p>
      </section>
      <BlHorizBtnList>
        <li>
          <ElBtn type="button" @click="backToSite"
            >日報インターネットにもどる</ElBtn
          >
        </li>
      </BlHorizBtnList>
    </BlContsUnit>
  </LyCont>
</template>
