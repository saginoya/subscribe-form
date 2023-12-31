<script setup lang="ts">
import { inject } from "vue";
import { searchAddress } from "@/functions/searchAddress";
import type { CustomerInfo } from "@/types";

// Layout components
import LyCont from "@/components/LyCont.vue";

// Block components
import BlContsUnit from "@/components/BlContsUnit.vue";
import BlFormItemUnit from "@/components/BlFormItemUnit.vue";
import BlFieldset from "@/components/BlFieldset.vue";
import BlInputGroup from "@/components/BlInputGroup.vue";
import BlHorizBtnList from "@/components/BlHorizBtnList.vue";

// Elemnt components
import ElNote from "@/components/ElNote.vue";
import ElBtn from "@/components/ElBtn.vue";
import ElInput from "@/components/ElInput.vue";
import ElInputRadio from "@/components/ElInputRadio.vue";
import ElSelect from "@/components/ElSelect.vue";
import ElTextarea from "@/components/ElTextarea.vue";

// Parts components
import PartsNoticeList from "@/components/PartsNoticeList.vue";
import PartsContacts from "@/components/PartsContacts.vue";
import PartsBusinessTypeSelect from "@/components/PartsBusinessTypeSelect.vue";
import PartsMagazineCard from "@/components/PartsMagazineCard.vue";

const customerInfo = inject<CustomerInfo>("customerInfo");

const autoAddressInput = () => {
  if (customerInfo) {
    searchAddress(customerInfo.postalCode)
      .then((address) => {
        customerInfo.addressLevel = String(address);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<template>
  <LyCont>
    <BlContsUnit>
      <h2 class="el_warningHeading">お申し込みについてご注意</h2>
      <PartsNoticeList></PartsNoticeList>
      <PartsContacts></PartsContacts>
    </BlContsUnit>
  </LyCont>
  <LyCont v-if="customerInfo" class="hp_bgcBase" data-testid="form-body">
    <form method="post" @submit.prevent="$router.push('confirm')" action="/">
      <BlFormItemUnit>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">お客様情報</h2>
          </template>
          <BlInputGroup
            label="個人氏名・ご担当者様氏名"
            :required="true"
            for="name"
          >
            <ElInput
              type="text"
              id="name"
              :required="true"
              autocomplete="name"
              placeholder="日報太郎"
              v-model.trim="customerInfo.name"
            ></ElInput>
          </BlInputGroup>
          <BlInputGroup label="企業名・団体名" for="organization">
            <ElInput
              id="organization"
              type="text"
              autocomplete="organization"
              placeholder="株式会社日報ビジネス"
              v-model.trim="customerInfo.organization"
            ></ElInput>
          </BlInputGroup>
          <BlInputGroup label="所属部署など" for="department"
            ><ElInput
              id="department"
              type="text"
              placeholder="出版部"
              v-model.trim="customerInfo.department"
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="業種" :required="true" for="business-type">
            <ElSelect
              id="business-type"
              v-model="customerInfo.businessType"
              :required="true"
              aria-placeholder="貴社の業種などを選択してください"
            >
              <PartsBusinessTypeSelect></PartsBusinessTypeSelect>
            </ElSelect>
          </BlInputGroup>
          <BlInputGroup label="電話番号" :required="true" for="tel"
            ><ElInput
              id="tel"
              :required="true"
              type="tel"
              autocomplete="tel-national"
              inputmode="tel"
              placeholder="03-3262-3465"
              pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
              v-model.trim="customerInfo.tel"
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="FAX番号" for="fax"
            ><ElInput
              id="fax"
              type="tel"
              inputmode="tel"
              placeholder="03-3263-2560"
              pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
              v-model.trim="customerInfo.fax"
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="メールアドレス" :required="true" for="email"
            ><ElInput
              id="email"
              :required="true"
              type="email"
              autocomplete="email"
              inputmode="email"
              placeholder="sample@sample.com"
              v-model.trim="customerInfo.email"
            ></ElInput
          ></BlInputGroup>
        </BlFieldset>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">発送先ご住所</h2>
          </template>
          <BlInputGroup label="郵便番号" :required="true" for="postal-code">
            <ElInput
              id="postal-code"
              data-testid="postal-code"
              :required="true"
              type="text"
              autocomplete="postal-code"
              inputmode="numeric"
              placeholder="101-0061"
              pattern="\d{3}-?\d{4}"
              title="半角数字とハイフン（-）で入力してください"
              v-model.trim="customerInfo.postalCode"
              @blur="autoAddressInput()"
            ></ElInput>
          </BlInputGroup>
          <BlInputGroup
            label="都道府県・区市町村"
            :required="true"
            for="address-level"
            ><ElInput
              id="address-level"
              data-testid="address-level"
              :required="true"
              type="text"
              autocomplete="address-level1 address-level2"
              placeholder="東京都千代田区神田三崎町"
              v-model.trim="customerInfo.addressLevel"
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup
            label="番地・丁目・号など"
            :required="true"
            for="address-line1"
            ><ElInput
              id="address-line1"
              :required="true"
              type="text"
              autocomplete="address-line1"
              placeholder="3-1-5"
              v-model.trim="customerInfo.addressLine1"
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="建物名・部屋番号など" for="address-line2"
            ><ElInput
              id="address-line2"
              type="text"
              autocomplete="address-line2"
              placeholder="神田三崎町ビル1階"
              v-model.trim="customerInfo.addressLine2"
            ></ElInput
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
            <PartsMagazineCard></PartsMagazineCard>
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
          <BlInputGroup label="備考欄" for="remarks">
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
  <LyCont v-else data-testid="form-body-error">
    <p>エラー：入力フォームが正しく読み込まれませんでした。</p>
  </LyCont>
</template>
