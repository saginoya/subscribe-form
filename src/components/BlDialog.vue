<script setup lang="ts">
import { ref } from "vue";

const showDialog = ref<boolean>(false);
const openDialog = (): void => {
  showDialog.value = true;
  document.body.classList.add("is_scrollLock");
};
defineExpose({
  openDialog,
});
const closeDialog = (): void => {
  showDialog.value = false;
  document.body.classList.remove("is_scrollLock");
};
</script>

<template>
  <dialog class="bl_dialog" :open="showDialog">
    <article class="bl_dialog_inner">
      <header class="bl_dialog_header">
        <slot name="header"></slot>
      </header>
      <main class="bl_dialog_body">
        <slot></slot>
      </main>
      <footer class="bl_dialog_footer">
        <slot name="footer">
          <button type="button" @click="closeDialog()">close</button>
        </slot>
      </footer>
    </article>
  </dialog>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as v;
$padding: v.$sp_2 v.$sp_3;
$padding: 16px !default;

.bl_dialog {
  background-color: initial;
  border: none;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  &_inner {
    background: white;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
    z-index: 20;
    max-height: 90vh;
    max-width: 90vw;
    width: 600px;
    display: flex;
    flex-direction: column;
  }
  &_header {
    padding: $padding;
    border-bottom: v.$li_base;
  }
  &_body {
    padding: $padding;
    overflow-y: scroll;
  }
  &_footer {
    padding: $padding;
    border-top: v.$li_base;
  }
}
</style>
