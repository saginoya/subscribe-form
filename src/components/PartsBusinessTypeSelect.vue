<script setup lang="ts">
interface BusinessType {
  catId: string;
  catName: string;
  choices: string[];
}

const businessTypeChoices: Array<BusinessType> = [
  {
    catId: "hoso",
    catName: "包装関連",
    choices: [
      "食品容器メーカー",
      "非食品容器メーカー",
      "包装機・関連機器メーカー",
      "食品加工機メーカー",
      "プラスチック原料メーカー",
      "フィルムメーカー・シートメーカー",
      "プラスチック加工機メーカー",
      "フィルムコンバーター・製袋業",
      "ラベルシールメーカー",
      "印刷機器・資材メーカー",
      "紙器・段ボールメーカー",
      "紙器・段ボール関連機器メーカー",
      "外装資材メーカー",
      "外装機器メーカー",
      "物流機器・システムメーカー",
      "総合商社・専門商社",
      "軽包装ディーラー",
      "外装ディーラー",
      "包装副資材",
      "委託販売",
      "プラスチック加工メーカー",
      "ラベルシール・紙器段ボールメーカー",
      "総合容器メーカー",
      "総合パッケージメーカー",
      "プラスチック以外の原反メーカー",
      "デザイン会社",
      "製紙メーカー",
      "計数・計測関連",
    ],
  },
  {
    catId: "kankyo",
    catName: "廃棄物処理関連",
    choices: [
      "リサイクル関連企業・団体",
      "環境関連機材メーカー",
      "環境関連機材ディーラー・商社",
      "廃棄物処理業一般",
      "廃棄物処理業収集運搬",
      "廃棄物処理業最終処分",
      "廃棄物処理業中間処理業",
      "環境コンサルティング・調査機関",
    ],
  },
  {
    catId: "others",
    catName: "一般他",
    choices: [
      "一般市民・学生",
      "中央官庁・地方公共団体",
      "各種民間団体",
      "学識者・コンサルティング・情報機関",
      "食品包装ユーザー",
      "非食品包装ユーザー",
      "百貨店・スーパー・小売業",
      "建設・建築事業",
      "コンピュータ(メーカー、商社、開発）関連",
      "電気機械",
      "化学工業",
      "通信事業",
      "不動産関連",
      "物流業",
      "エネルギー事業",
      "病院",
      "薬品・医療器製造",
      "出版・マスコミ",
      "その他製造",
      "その他サービス",
      "その他",
    ],
  },
  {
    catId: "overseas",
    catName: "海外",
    choices: ["海外"],
  },
];
</script>

<template>
  <option disabled>選択してください</option>
  <optgroup
    v-for="category in businessTypeChoices"
    :key="category.catId"
    :label="category.catName"
  >
    <option
      v-for="(item, index) in category.choices"
      :key="`${category.catId}-${index}`"
      :value="item"
    >
      {{ item }}
    </option>
  </optgroup>
</template>
