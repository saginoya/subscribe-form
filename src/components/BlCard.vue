<script setup lang="ts"></script>

<template>
  <li class="bl_card">
    <header class="bl_card_header"><slot name="header"></slot></header>
    <main class="bl_card_body"><slot></slot></main>
    <footer class="bl_card_footer"><slot name="footer"></slot></footer>
  </li>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
.bl_card {
  display: flex;
  flex-direction: column;
  gap: v.$sp_1;
  border: 1px solid v.$co_darkGray;
  border-radius: 4px;
  padding: v.$sp_2 v.$sp_1;
  background-color: #fff;
  & .bl_card_header {
    border-bottom: rgba(238, 238, 238, 0.952) solid 1px;
  }
  & .bl_card_body {
    border-bottom: rgba(238, 238, 238, 0.952) solid 1px;
  }
  & .bl_card_footer {
    border-top: rgba(238, 238, 238, 0.952) solid 1px;
  }
}
</style>
