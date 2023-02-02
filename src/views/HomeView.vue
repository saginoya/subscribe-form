<script setup lang="ts">
import { inject } from "vue";
import type { CustomerInfo, Magazine } from "@/interfaces";

// Layout components
import LyCont from "@/components/LyCont.vue";

// Block components
import BlContsUnit from "@/components/BlContsUnit.vue";
import BlFormItemUnit from "@/components/BlFormItemUnit.vue";
import BlFieldset from "@/components/BlFieldset.vue";
import BlInputGroup from "@/components/BlInputGroup.vue";
import BlHorizBtnList from "@/components/BlHorizBtnList.vue";
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

const magazineList = inject<Magazine[]>("magazineList");
const customerInfo = inject<CustomerInfo>("customerInfo");
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
    <form method="post" @submit.prevent="$router.push('confirm')" action="/">
      <BlFormItemUnit v-if="customerInfo">
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
            v-model="customerInfo.name"
          ></BlInputGroup>
          <BlInputGroup
            label="企業名・団体名"
            id="organization"
            type="text"
            autocomplete="organization"
            placeholder="株式会社日報ビジネス"
            v-model="customerInfo.organization"
          ></BlInputGroup>
          <BlInputGroup
            label="所属部署など"
            id="department"
            type="text"
            placeholder="出版部"
            v-model="customerInfo.department"
          ></BlInputGroup>
          <BlInputGroup label="業種" id="business-type" :required="true">
            <ElSelect
              id="business-type"
              v-model="customerInfo.businessType"
              :required="true"
              aria-placeholder="貴社の業種などを選択してください"
            >
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
            v-model="customerInfo.tel"
          ></BlInputGroup>
          <BlInputGroup
            label="FAX番号"
            id="fax"
            type="tel"
            inputmode="tel"
            placeholder="03-3263-2560"
            v-model="customerInfo.fax"
          ></BlInputGroup>
          <BlInputGroup
            label="メールアドレス"
            id="email"
            :required="true"
            type="email"
            autocomplete="email"
            inputmode="email"
            placeholder="sample@sample.com"
            v-model="customerInfo.email"
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
            v-model="customerInfo.postalCode"
          >
          </BlInputGroup>
          <BlInputGroup
            label="都道府県・市町村"
            id="address-level"
            :required="true"
            type="text"
            autocomplete="address-level1 address-level2"
            placeholder="東京都千代田区神田三崎町"
            v-model="customerInfo.addressLevel"
          ></BlInputGroup>
          <BlInputGroup
            label="番地・丁目・号など"
            id="address-line1"
            :required="true"
            type="text"
            autocomplete="address-line1"
            placeholder="3-1-5"
            v-model="customerInfo.addressLine1"
          ></BlInputGroup>
          <BlInputGroup
            label="建物名・部屋番号など"
            id="address-line2"
            type="text"
            autocomplete="address-line2"
            placeholder="神田三崎町ビル1階"
            v-model="customerInfo.addressLine2"
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
            <BlCardUnit class="bl_cardUnitCol3">
              <BlCard v-for="magazine in magazineList" :key="magazine.id">
                <template v-slot:header>
                  <p>
                    <ElInputCheckbox
                      type="checkbox"
                      :id="magazine.id"
                      value="購入"
                      :aria-describedby="`${magazine.id}-note`"
                      v-model="magazine.buyInfo.buy"
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
                      :disabled="!magazine.buyInfo.buy"
                      :inline="true"
                      :step="magazine.bimonthly ? 2 : 1"
                      v-model="magazine.buyInfo.month"
                    ></ElInput>
                  </label>
                </p>
                <p>
                  <label>
                    部数
                    <ElInput
                      type="number"
                      :id="`${magazine.id}-number`"
                      :disabled="!magazine.buyInfo.buy"
                      inputmode="numeric"
                      :inline="true"
                      min="1"
                      v-model="magazine.buyInfo.number"
                    ></ElInput>
                  </label>
                </p>
              </BlCard>
            </BlCardUnit>
          </BlInputGroup>
          <BlInputGroup label="DM送付について">
            <ElInputRadio id="dm" value="希望する" v-model="customerInfo.dm">
              希望する
            </ElInputRadio>
            <ElInputRadio id="dm" value="希望しない" v-model="customerInfo.dm">
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
              v-model="customerInfo.remarks"
              aria-describedby="aboutRemarks"
            >
            </ElTextarea>
            <ElNote id="aboutRemarks">
              連絡事項があればご記入ください。（請求先・送付先を別途ご指定など）
            </ElNote>
            <p>{{ customerInfo.remarks }}</p>
          </BlInputGroup>
        </BlFieldset>
        <BlHorizBtnList>
          <li>
            <ElBtn type="submit">入力内容の確認</ElBtn>
          </li>
        </BlHorizBtnList>
      </BlFormItemUnit>
    </form>
  </LyCont>
</template>
