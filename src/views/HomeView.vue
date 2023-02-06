<script setup lang="ts">
import { inject } from "vue";
import { Core as YubinBangoCore } from "yubinbango-core2";
import type { CustomerInfo } from "@/interfaces";

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
import ElInputRadio from "@/components/ElInputRadio.vue";
import ElSelect from "@/components/ElSelect.vue";
import ElTextarea from "@/components/ElTextarea.vue";

// Parts components
import PartsNoticeList from "@/components/PartsNoticeList.vue";
import PartsContacts from "@/components/PartsContacts.vue";
import PartsBusinessTypeSelect from "@/components/PartsBusinessTypeSelect.vue";
import PartsMagazineCard from "@/components/PartsMagazineCard.vue";

const customerInfo = inject<CustomerInfo>("customerInfo");

const fetchAddress = (): void => {
  if (customerInfo) {
    new YubinBangoCore(customerInfo.postalCode, (value: any) => {
      // region=都道府県, locality=市区町村, street=町域
      const address = value.region + value.locality + value.street;

      customerInfo.addressLevel = address;
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
  <LyCont class="hp_bgcBase" v-if="customerInfo">
    <form method="post" @submit.prevent="$router.push('confirm')" action="/">
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
            v-model.trim="customerInfo.name"
          ></BlInputGroup>
          <BlInputGroup
            label="企業名・団体名"
            id="organization"
            type="text"
            autocomplete="organization"
            placeholder="株式会社日報ビジネス"
            v-model.trim="customerInfo.organization"
          ></BlInputGroup>
          <BlInputGroup
            label="所属部署など"
            id="department"
            type="text"
            placeholder="出版部"
            v-model.trim="customerInfo.department"
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
            v-model.trim="customerInfo.tel"
          ></BlInputGroup>
          <BlInputGroup
            label="FAX番号"
            id="fax"
            type="tel"
            inputmode="tel"
            placeholder="03-3263-2560"
            v-model.trim="customerInfo.fax"
          ></BlInputGroup>
          <BlInputGroup
            label="メールアドレス"
            id="email"
            :required="true"
            type="email"
            autocomplete="email"
            inputmode="email"
            placeholder="sample@sample.com"
            v-model.trim="customerInfo.email"
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
            v-model.trim="customerInfo.postalCode"
            :blur="fetchAddress()"
          >
          </BlInputGroup>
          <BlInputGroup
            label="都道府県・市町村"
            id="address-level"
            :required="true"
            type="text"
            autocomplete="address-level1 address-level2"
            placeholder="東京都千代田区神田三崎町"
            v-model.trim="customerInfo.addressLevel"
          ></BlInputGroup>
          <BlInputGroup
            label="番地・丁目・号など"
            id="address-line1"
            :required="true"
            type="text"
            autocomplete="address-line1"
            placeholder="3-1-5"
            v-model.trim="customerInfo.addressLine1"
          ></BlInputGroup>
          <BlInputGroup
            label="建物名・部屋番号など"
            id="address-line2"
            type="text"
            autocomplete="address-line2"
            placeholder="神田三崎町ビル1階"
            v-model.trim="customerInfo.addressLine2"
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
  <LyCont v-else>
    <p>エラー：入力フォームが正しく読み込まれませんでした。</p>
  </LyCont>
</template>
