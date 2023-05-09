<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, inject, onMounted } from "vue";
import axios from "axios";
import type { CustomerInfo, PostData } from "@/types";

// Layout components
import LyCont from "@/components/LyCont.vue";

// Block components
import BlContsUnit from "@/components/BlContsUnit.vue";
import BlFieldset from "@/components/BlFieldset.vue";
import BlInputGroup from "@/components/BlInputGroup.vue";
import BlHorizBtnList from "@/components/BlHorizBtnList.vue";

// Elemnt components
import ElBtn from "@/components/ElBtn.vue";
import ElInput from "@/components/ElInput.vue";
import ElTextarea from "@/components/ElTextarea.vue";
import ElError from "@/components/ElError.vue";

const mailSystemPass: string = import.meta.env.VITE_MAIL_SYSTEM;

const customerInfo = inject<CustomerInfo>("customerInfo");
const postData = inject<PostData>("postData");

const name = ref(postData ? postData.postName : "");
const department = ref(postData ? postData.postDepartment : "");
const businessType = ref(customerInfo ? customerInfo.businessType : "");
const postalCode = ref(postData ? postData.postPostalCode : "");
const address = ref(postData ? postData.postAddress : "");
const tel = ref(postData ? postData.postTel : "");
const fax = ref(postData ? postData.postFax : "");
const email = ref(customerInfo ? customerInfo.email : "");
const dm = ref(customerInfo ? customerInfo.dm : "");
const magazines = ref(postData ? postData.postMagazines : "");
const remarks = ref(customerInfo ? customerInfo.remarks : "");

const allRequiredItems = [
  Boolean(name.value),
  Boolean(businessType.value),
  Boolean(postalCode.value),
  Boolean(address.value),
  Boolean(tel.value),
  Boolean(email.value),
  Boolean(magazines.value.length > 0),
];
const checkallRequiredItems = !allRequiredItems.includes(false);

const router = useRouter();
const returnHome = () => {
  router.push("/");
};
onMounted(() => {
  if (!checkallRequiredItems) {
    alert("入力されていない必須項目があります。\n入力画面に戻ります。");
    returnHome();
  }
});

const result = ref<string>();
const send = async (parms: FormData) => {
  const url = mailSystemPass;

  return await axios
    .post(url, parms)
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
const submit = async () => {
  const formData = new FormData();
  formData.append("ご契約者名", name.value);
  formData.append("部署・ご担当者様", department.value);
  formData.append("業種", businessType.value);
  formData.append("郵便番号", postalCode.value);
  formData.append("ご住所", address.value);
  formData.append("電話番号", tel.value);
  formData.append("FAX番号", fax.value);
  formData.append("メールアドレス", email.value);
  formData.append("DMのご希望", dm.value);
  for (let i = 0; i < 7; i++) {
    const value = magazines.value[i];
    if (value) {
      formData.append(`ご希望の新聞・雑誌${i + 1}`, value);
    }
  }
  formData.append("備考欄", remarks.value);

  const sendResult = await send(formData);
  result.value = sendResult;
  if (sendResult === "送信完了") {
    router.push("/thanks");
  }
};
</script>

<template>
  <LyCont>
    <BlContsUnit>
      <h2 class="el_lv2heading">入力内容の確認</h2>
      <form
        id="confirmForm"
        method="post"
        @submit.prevent="submit()"
        action="/"
      >
        <BlFieldset>
          <BlInputGroup label="ご契約者名" for="post-name" required>
            <ElInput
              name="ご契約者名"
              id="post-name"
              type="text"
              required
              v-model="name"
              readonly
            ></ElInput>
          </BlInputGroup>
          <BlInputGroup label="部署・ご担当者様" for="post-department">
            <ElInput
              name="部署・ご担当者様"
              id="post-department"
              type="text"
              v-model="department"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="業種" for="post-business-type" required
            ><ElInput
              name="業種"
              id="post-business-type"
              type="text"
              required
              v-model="businessType"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="郵便番号" for="post-postal-code" required
            ><ElInput
              name="郵便番号"
              id="post-postal-code"
              type="text"
              required
              v-model="postalCode"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="ご住所" for="post-address" required
            ><ElInput
              name="ご住所"
              id="post-address"
              type="text"
              required
              v-model="address"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="電話番号" for="post-tel" required
            ><ElInput
              name="電話番号"
              id="post-tel"
              type="text"
              required
              v-model="tel"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="FAX番号" for="post-fax"
            ><ElInput
              name="FAX番号"
              id="post-fax"
              type="text"
              v-model="fax"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="メールアドレス" for="post-email" required
            ><ElInput
              name="メールアドレス"
              id="post-email"
              type="text"
              required
              v-model="email"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="DMのご希望" for="post-dm"
            ><ElInput
              name="DMのご希望"
              id="post-dm"
              type="text"
              v-model="dm"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup
            v-for="(magazine, index) in magazines"
            :key="`magazine${index}`"
            :label="`ご希望の新聞・雑誌${index + 1}`"
            :for="`post-magazines${index}`"
            :required="index === 0"
            ><ElInput
              :name="`ご希望の新聞・雑誌${index + 1}`"
              :id="`post-magazines${index}`"
              type="text"
              :required="index === 0"
              :model-value="magazine"
              readonly
            ></ElInput
          ></BlInputGroup>
          <BlInputGroup label="備考欄" for="post-remarks">
            <ElTextarea
              id="post-remarks"
              name="備考欄"
              rows="5"
              v-model="remarks"
              readonly
            >
            </ElTextarea>
          </BlInputGroup>
          <BlHorizBtnList>
            <li>
              <ElBtn color="gray" @click="returnHome()">修正する</ElBtn>
            </li>
            <li>
              <ElBtn type="submit">送信する</ElBtn>
            </li>
          </BlHorizBtnList>
        </BlFieldset>
      </form>
      <transition name="fade">
        <ElError v-if="result" class="contact-result">{{ result }}</ElError>
      </transition>
    </BlContsUnit>
  </LyCont>
</template>
