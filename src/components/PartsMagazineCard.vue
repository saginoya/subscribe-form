<script setup lang="ts">
import { computed, inject } from "vue";
import type { Magazine } from "@/interfaces";

import BlCardUnit from "@/components/BlCardUnit.vue";
import BlCard from "@/components/BlCard.vue";
import BlCardHeader from "@/components/BlCardHeader.vue";
import BlCardBody from "@/components/BlCardBody.vue";
import ElInputCheckbox from "@/components/ElInputCheckbox.vue";
import ElNote from "@/components/ElNote.vue";
import ElInput from "@/components/ElInput.vue";

const magazineList = inject<Magazine[]>("magazineList");

interface CatInfo {
  name: string;
  color: string;
}

const catInfo = (catId: string): CatInfo => {
  switch (catId) {
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
};
</script>

<template>
  <BlCardUnit class="bl_cardUnitCol3">
    <li v-for="magazine in magazineList" :key="magazine.id">
      <BlCard
        :label="catInfo(magazine.cat).name"
        :label-color="catInfo(magazine.cat).color"
      >
        <BlCardHeader>
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
        </BlCardHeader>
        <transition name="is_active">
          <BlCardBody v-show="magazine.buyInfo.buy">
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
                  class="el_inputMagazineNum"
                  :disabled="!magazine.buyInfo.buy"
                  inputmode="numeric"
                  :inline="true"
                  min="1"
                  v-model="magazine.buyInfo.number"
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
  overflow: hidden;
}
</style>
