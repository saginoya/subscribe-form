<script setup lang="ts">
import { useStoreMagazines } from "@/stores/magazines";
import { useStoreShoppingCart } from "@/stores/shoppingCart";

import BlCardUnit from "@/components/BlCardUnit.vue";
import BlCard from "@/components/BlCard.vue";
import BlCardHeader from "@/components/BlCardHeader.vue";
import BlCardBody from "@/components/BlCardBody.vue";
import ElInputCheckbox from "@/components/ElInputCheckbox.vue";
import ElIcon from "@/components/ElIcon.vue";
import ElInput from "@/components/ElInput.vue";

const storeMagazines = useStoreMagazines();
storeMagazines.initList();
const magazineList = storeMagazines.magazineList;

const shoppingCart = useStoreShoppingCart();

type CatInfo = {
  name: string;
  color: string;
};
const catInfo = (catId: string[]): CatInfo => {
  if (catId.length === 1) {
    switch (catId[0]) {
      case "kankyo":
        return {
          name: "環境",
          color: "green",
        };
      case "hoso":
        return {
          name: "包装",
          color: "blue",
        };
      default:
        return {
          name: "その他",
          color: "",
        };
    }
  } else {
    return {
      name: "その他",
      color: "",
    };
  }
};

const buyCheckbox = (id: string, e: Event): void => {
  const isChecked: boolean = (e.target as HTMLInputElement).checked;
  if (e.target !== null && isChecked) {
    shoppingCart.addToCart(id, 1);
  } else if (isChecked === false) {
    shoppingCart.removeFromCart(id);
  }
};
const changeNumber = (id: string, e: Event): void => {
  const value: string = (e.target as HTMLInputElement).value;
  const number: number = Number(value);
  const newValue: number = e.target !== null && number ? number : 1;
  shoppingCart.changeNumber(id, newValue);
};
const changeVolume = (id: string, e: Event): void => {
  const value: string = (e.target as HTMLInputElement).value;
  const newValue: string = e.target !== null && value ? value : "";
  shoppingCart.changeVolume(id, newValue);
};
</script>

<template>
  <BlCardUnit class="bl_cardUnitCol3">
    <li v-for="[id, magazine] in magazineList" :key="id">
      <BlCard
        :label="catInfo(magazine.cat).name"
        :label-color="catInfo(magazine.cat).color"
        class="bl_cardMagazine"
      >
        <BlCardHeader>
          <p>
            <ElInputCheckbox
              type="checkbox"
              :id="id"
              :value="id"
              :required="shoppingCart.isEmpty"
              :aria-describedby="`${id}-note`"
              :checked="shoppingCart.hasSameId(id)"
              @change="buyCheckbox(id, $event)"
            >
              {{ magazine.name }}
            </ElInputCheckbox>
          </p>
          <div class="bl_card_note">
            <ElIcon name="information-outline"></ElIcon>
            <p :id="`${id}-note`">{{ magazine.explanation }}</p>
          </div>
        </BlCardHeader>
        <transition name="is_active">
          <BlCardBody
            v-show="shoppingCart.hasSameId(id)"
            class="bl_cardMagazine_body"
          >
            <p>
              <label v-if="magazine.saleType === 'subscription'">
                購読開始月
                <ElInput
                  type="month"
                  :id="`${id}-month`"
                  :disabled="!shoppingCart.hasSameId(id)"
                  :inline="true"
                  :step="magazine.published === 'bimonthly' ? 2 : 1"
                  :value="shoppingCart.getItem(id)?.volume"
                  @change="changeVolume(id, $event)"
                ></ElInput>
              </label>
            </p>
            <p>
              <label>
                部数
                <ElInput
                  type="number"
                  :id="`${id}-number`"
                  class="el_inputMagazineNum"
                  :disabled="!shoppingCart.hasSameId(id)"
                  inputmode="numeric"
                  :inline="true"
                  min="1"
                  :value="shoppingCart.getItem(id)?.number"
                  @change="changeNumber(id, $event)"
                ></ElInput>
              </label>
            </p>
          </BlCardBody>
        </transition>
      </BlCard>
    </li>
  </BlCardUnit>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
@use "@/assets/sass/mixin" as m;

.bl_card_note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  color: v.$co_info;
  font-size: 0.8rem;
  line-height: 1rem;
}
.bl_cardMagazine {
  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.25s;
  }
  &_body {
    @include m.bl_LyCol1(8px);
    overflow: hidden;
  }
}
.el_inputMagazineNum {
  width: 5em;
}
.is_active-enter-active,
.is_active-leave-active {
  transition: all 0.3s ease-out;
}
.is_active-enter-from,
.is_active-leave-to {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
