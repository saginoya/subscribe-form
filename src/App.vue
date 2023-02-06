<script setup lang="ts">
import { RouterView } from "vue-router";
import { reactive, computed, provide } from "vue";
import type { CustomerInfo, Magazine } from "@/interfaces";

// 販売している媒体の一覧
const magazineList: Magazine[] = reactive([
  {
    id: "ht",
    name: "週刊 包装タイムス",
    explanation: "包装タイムスは1966年創刊の包装専門新聞です",
    cat: "hoso",
    buyInfo: { buy: "", month: "", number: 1 },
  },
  {
    id: "fp",
    name: "月刊 食品包装",
    explanation: "食品包装の専門情報誌",
    cat: "hoso",
    buyInfo: { buy: "", month: "", number: 1 },
  },
  {
    id: "cb",
    name: "月刊 カートンボックス",
    explanation: "「箱創り」を応援するビジネスマッチングマガジン",
    cat: "hoso",
    buyInfo: { buy: "", month: "", number: 1 },
  },
  {
    id: "jk",
    name: "週刊 循環経済新聞",
    explanation: "処理・処分から資源循環、環境保全まで幅広く紹介した新聞",
    cat: "kankyo",
    buyInfo: { buy: "", month: "", number: 1 },
  },
  {
    id: "rd",
    name: "月刊 廃棄物",
    explanation:
      "ごみ処理・リサイクルの実際的な解決方法を具体的に紹介する廃棄物問題の総合誌",
    cat: "kankyo",
    buyInfo: { buy: "", month: "", number: 1 },
  },
  {
    id: "ec",
    name: "隔月刊 イーコンテクチャー",
    explanation: "建廃・解体・エコ施工の専門誌",
    cat: "kankyo",
    buyInfo: { buy: "", month: "", number: 1 },
    bimonthly: true,
  },
  {
    id: "gw",
    name: "隔月刊 地球温暖化",
    explanation: "「脱炭素社会実現」を目指す提言誌",
    cat: "kankyo",
    buyInfo: { buy: "", month: "", number: 1 },
    bimonthly: true,
  },
]);
provide("magazineList", magazineList);

// フォームから入力してもらう値の初期設定
const customerInfo = reactive<CustomerInfo>({
  name: "",
  organization: "",
  department: "",
  businessType: "",
  tel: "",
  fax: "",
  email: "",
  postalCode: "",
  addressLevel: "",
  addressLine1: "",
  addressLine2: "",
  dm: "希望する",
  remarks: "",
});
provide("customerInfo", customerInfo);

// フォームから入力された値から算出される値
const postName = computed((): string => {
  const organization = customerInfo.organization;
  const name = customerInfo.name;
  return organization || name || "";
});
const postDepartment = computed((): string => {
  const organization = customerInfo.organization;
  const department = customerInfo.department;
  const name = customerInfo.name;
  return organization ? [department, name].join(" ") : department;
});
const postAddress = computed((): string => {
  const { addressLevel, addressLine1, addressLine2 } = customerInfo;
  const building = addressLine2 && ` ${addressLine2}`;
  return addressLevel + addressLine1 + building;
});
const postMagazines = computed((): string[] => {
  let itemList: string[] = [];
  magazineList.forEach((item) => {
    if (item.buyInfo.buy === "購入") {
      const name = item.name;
      const month = item.buyInfo.month
        ? `購読開始月：${item.buyInfo.month}`
        : "";
      const number = `部数：${item.buyInfo.number}`;
      const buyInfo = month
        ? `（${[month, number].join("・")}）`
        : `（${number}）`;
      const text = name + buyInfo;
      itemList.push(text);
    }
  });
  return itemList;
});
provide("postData", {
  postName: postName,
  postDepartment: postDepartment,
  postAddress: postAddress,
  postMagazines: postMagazines,
});
</script>

<template>
  <header class="ly_header">
    <div class="ly_header_inner">
      <h1 class="el_lv1Heading">
        <span>購読申し込みフォーム</span>
      </h1>
      <nav></nav>
    </div>
    <!-- /.ly_header_inner-->
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="ly_footer">
    <div class="ly_footer_inner">
      <small class="el_footerCopyright">@ Nippo co., ltd.</small>
    </div>
    <!-- /.ly_footer_inner -->
  </footer>
</template>
