<script setup lang="ts">
import { RouterView } from "vue-router";
import { reactive, computed, provide } from "vue";
import type { CustomerInfo } from "@/interfaces";
import { useStoreMagazines } from "@/stores/magazines";
import { useStoreShoppingCart } from "@/stores/shoppingCart";

const storeMagazines = useStoreMagazines();
const shoppingCart = useStoreShoppingCart().cart;

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
const postTel = computed((): string => {
  return toHalfWidth(customerInfo.tel).replace(/―/g, "-").replace(/ー/g, "-");
});
const postFax = computed((): string => {
  return toHalfWidth(customerInfo.fax).replace(/―/g, "-").replace(/ー/g, "-");
});
const postPostalCode = computed((): string => {
  let value = toHalfWidth(customerInfo.postalCode)
    .replace(/―/g, "-")
    .replace(/ー/g, "-");
  if (value.match(/^[0-9]{7}$/)) {
    value = value.slice(0, 3) + "-" + value.slice(3, value.length);
  }
  return value;
});
const postAddress = computed((): string => {
  const { addressLevel, addressLine1, addressLine2 } = customerInfo;
  const building = addressLine2 && ` ${addressLine2}`;
  return addressLevel + toHalfWidth(addressLine1) + toHalfWidth(building);
});
const postMagazines = computed((): string[] => {
  let itemList: string[] = [];
  shoppingCart.forEach((item) => {
    const magazineInfo = storeMagazines.getItem(item.id);
    if (magazineInfo) {
      const name = magazineInfo.name;
      const volume = item.volume ? `購読開始月：${item.volume}` : "";
      const number = `部数：${item.number}`;
      const buyInfo = volume
        ? `（${[volume, number].join("・")}）`
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
  postTel: postTel,
  postFax: postFax,
  postPostalCode: postPostalCode,
  postAddress: postAddress,
  postMagazines: postMagazines,
});

const toHalfWidth = (value: string) => {
  const halfVal = value.replace(/[！-～]/g, function (tmpStr) {
    return String.fromCharCode(tmpStr.charCodeAt(0) - 0xfee0);
  });
  return halfVal
    .replace(/”/g, '"')
    .replace(/’/g, "'")
    .replace(/‘/g, "`")
    .replace(/￥/g, "\\")
    .replace(/〜/g, "~");
};
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
