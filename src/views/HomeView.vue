<script setup lang="ts">
import { ref } from "vue";

// Layout components
import LyCont from "@/components/LyCont.vue";

// Block components
import BlContsUnit from "@/components/BlContsUnit.vue";
import BlFormItemUnit from "@/components/BlFormItemUnit.vue";
import BlFieldset from "@/components/BlFieldset.vue";
import BlInputGroup from "@/components/BlInputGroup.vue";
import BlHorizBtnList from "@/components/BlHorizBtnList.vue";
import BlDialog from "@/components/BlDialog.vue";
import BlCardUnit from "@/components/BlCardUnit.vue";
import BlCard from "@/components/BlCard.vue";

// Elemnt components
import ElNote from "@/components/ElNote.vue";
import ElBtn from "@/components/ElBtn.vue";
import ElInput from "@/components/ElInput.vue";
import ElInputRadio from "@/components/ElInputRadio.vue";
import ElInputCheckbox from "@/components/ElInputCheckbox.vue";
import ElSelect from "@/components/ElSelect.vue";
import ElTextarea from "@/components/ElTextarea.vue";

// Parts components
import PartsNoticeList from "@/components/PartsNoticeList.vue";
import PartsContacts from "@/components/PartsContacts.vue";
import PartsBusinessTypeSelect from "@/components/PartsBusinessTypeSelect.vue";

const confirmationDialog = ref();
const submit = (): void => {
  confirmationDialog.value.openDialog();
};

// Inputs item
const name = ref<string>();
const organization = ref<string>();
const department = ref<string>();
const businessType = ref<string>("選択してください");
const tel = ref<string>();
const fax = ref<string>();
const email = ref<string>();
const postalCode = ref<string>();
const addressLevel = ref<string>();
const addressLine1 = ref<string>();
const addressLine2 = ref<string>();
const magazines = ref<string[]>([]);
const dm = ref<string>("希望する");
const remarks = ref<string>();

interface Magazine {
  cat: "hoso" | "kankyo";
  id: string;
  name: string;
  explanation: string;
}

const magazinesChoices: Array<Magazine> = [
  {
    id: "ht",
    name: "週刊　包装タイムス",
    explanation: "包装タイムスは1966年創刊の包装専門新聞です",
    cat: "hoso",
  },
  {
    id: "fp",
    name: "月刊　食品包装",
    explanation: "食品包装の専門情報誌",
    cat: "hoso",
  },
  {
    id: "cb",
    name: "月刊　カートンボックス",
    explanation: "「箱創り」を応援するビジネスマッチングマガジン",
    cat: "hoso",
  },
  {
    id: "jk",
    name: "週刊　循環経済新聞",
    explanation: "処理・処分から資源循環、環境保全まで幅広く紹介した新聞",
    cat: "kankyo",
  },
  {
    id: "rd",
    name: "月刊　廃棄物",
    explanation:
      "ごみ処理・リサイクルの実際的な解決方法を具体的に紹介する廃棄物問題の総合誌",
    cat: "kankyo",
  },
  {
    id: "econ",
    name: "隔月刊 イーコンテクチャー",
    explanation: "建廃・解体・エコ施工の専門誌",
    cat: "kankyo",
  },
  {
    id: "gw",
    name: "隔月刊 地球温暖化",
    explanation: "「脱炭素社会実現」を目指す提言誌",
    cat: "kankyo",
  },
];
</script>

<template>
  <LyCont>
    <BlContsUnit>
      <h2 class="el_warningHeading">お申し込みについてご注意</h2>
      <PartsNoticeList></PartsNoticeList>
      <PartsContacts></PartsContacts>
    </BlContsUnit>
  </LyCont>
  <LyCont class="hp_bgcBase">
    <form method="post" @submit.prevent="submit()" action="/">
      <BlFormItemUnit>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">お客様情報</h2>
          </template>
          <BlInputGroup
            label="個人氏名・ご担当者様氏名"
            id="name"
            :required="true"
            type="text"
            autocomplete="name"
            placeholder="日報太郎"
            v-model="name"
          ></BlInputGroup>
          <BlInputGroup
            label="企業名・団体名"
            id="organization"
            type="text"
            autocomplete="organization"
            placeholder="株式会社日報ビジネス"
            v-model="organization"
          ></BlInputGroup>
          <BlInputGroup
            label="所属部署など"
            id="department"
            type="text"
            placeholder="出版部"
            v-model="department"
          ></BlInputGroup>
          <BlInputGroup label="業種" id="business-type" :required="true">
            <ElSelect id="business-type" v-model="businessType">
              <PartsBusinessTypeSelect></PartsBusinessTypeSelect>
            </ElSelect>
          </BlInputGroup>
          <BlInputGroup
            label="電話番号"
            id="tel"
            :required="true"
            type="tel"
            autocomplete="tel-national"
            inputmode="tel"
            placeholder="03-3262-3465"
            v-model="tel"
          ></BlInputGroup>
          <BlInputGroup
            label="FAX番号"
            id="fax"
            type="tel"
            inputmode="tel"
            placeholder="03-3263-2560"
            v-model="fax"
          ></BlInputGroup>
          <BlInputGroup
            label="メールアドレス"
            id="email"
            :required="true"
            type="email"
            autocomplete="email"
            inputmode="email"
            placeholder="sample@sample.com"
            v-model="email"
          ></BlInputGroup>
        </BlFieldset>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">発送先ご住所</h2>
          </template>
          <BlInputGroup
            label="郵便番号"
            id="postal-code"
            :required="true"
            type="text"
            autocomplete="postal-code"
            inputmode="numeric"
            placeholder="101-0061"
            pattern="^[0-9]{3}-[0-9]{4}$"
            title="半角数字とハイフン（-）で入力してください"
            v-model="postalCode"
          >
          </BlInputGroup>
          <BlInputGroup
            label="都道府県・市町村"
            id="address-level"
            :required="true"
            type="text"
            autocomplete="address-level1 address-level2"
            placeholder="東京都千代田区神田三崎町"
            v-model="addressLevel"
          ></BlInputGroup>
          <BlInputGroup
            label="番地・丁目・号など"
            id="address-line1"
            :required="true"
            type="text"
            autocomplete="address-line1"
            placeholder="3-1-5"
            v-model="addressLine1"
          ></BlInputGroup>
          <BlInputGroup
            label="建物名・部屋番号など"
            id="address-line2"
            type="text"
            autocomplete="address-line2"
            placeholder="神田三崎町ビル1階"
            v-model="addressLine2"
          ></BlInputGroup>
        </BlFieldset>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">ご希望について</h2>
          </template>
          <BlInputGroup
            label="ご希望の誌・紙をチェックして下さい"
            :required="true"
          >
            <BlCardUnit>
              <BlCard
                v-for="(magazine, index) in magazinesChoices"
                :key="magazine.id"
              >
                <template v-slot:header>
                  <p>
                    <ElInputCheckbox
                      type="checkbox"
                      :id="`${magazine.id}`"
                      :value="magazine.name"
                      v-model="magazines[index]"
                      :aria-describedby="`${magazine.id}-note`"
                    >
                      {{ magazine.name }}
                    </ElInputCheckbox>
                  </p>
                  <ElNote class="hp_bgcBase" :id="`${magazine.id}-note`">
                    {{ magazine.explanation }}
                  </ElNote>
                </template>
                <p>
                  <label>
                    購読開始月
                    <ElInput
                      type="month"
                      :id="`${magazine.id}-month`"
                      :inline="true"
                      :disabled="!magazines.includes(magazine.name)"
                    ></ElInput>
                  </label>
                </p>
                <p>
                  <label>
                    部数
                    <ElInput
                      type="number"
                      :id="`${magazine.id}-number`"
                      inputmode="numeric"
                      :inline="true"
                      min="1"
                      :disabled="!magazines.includes(magazine.name)"
                    ></ElInput>
                  </label>
                </p>
              </BlCard>
            </BlCardUnit>
          </BlInputGroup>
          <BlInputGroup label="DM送付について">
            <ElInputRadio id="dm" value="希望する" v-model="dm">
              希望する
            </ElInputRadio>
            <ElInputRadio id="dm" value="希望しない" v-model="dm">
              希望しない
            </ElInputRadio>
            <ElNote>
              日報グループの業務のご案内をさせていただくことがあります。
            </ElNote>
          </BlInputGroup>
          <BlInputGroup label="備考欄" id="remarks">
            <ElTextarea
              id="remarks"
              rows="5"
              v-model="remarks"
              aria-describedby="aboutRemarks"
            >
            </ElTextarea>
            <ElNote id="aboutRemarks">
              連絡事項があればご記入ください。（請求先・送付先を別途ご指定など）
            </ElNote>
            <p>{{ remarks }}</p>
          </BlInputGroup>
        </BlFieldset>
        <BlHorizBtnList>
          <li>
            <ElBtn type="submit"> 入力内容の確認 </ElBtn>
          </li>
        </BlHorizBtnList>
      </BlFormItemUnit>
    </form>
  </LyCont>
  <BlDialog ref="confirmationDialog">
    <template v-slot:header>
      <h1>入力内容のご確認</h1>
    </template>
  </BlDialog>
</template>
