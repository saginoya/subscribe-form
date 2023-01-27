<script setup lang="ts">
import { ref } from "vue";

const showDialog = ref<boolean>(false);
const openDialog = (): void => {
  showDialog.value = true;
};
defineExpose({
  openDialog,
});
const closeDialog = (): void => {
  showDialog.value = false;
};
</script>

<template>
  <dialog class="bl_dialog" :open="showDialog">
    <article class="bl_dialog_inner">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer">
          <button type="button" @click="closeDialog()">close</button>
        </slot>
      </footer>
    </article>
  </dialog>
</template>

<style scoped>
.bl_dialog {
  background-color: initial;
  border: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
}
.bl_dialog_inner {
  background: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  height: 320px;
  left: 50%;
  opacity: 1;
  padding: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  width: 480px;
  z-index: 20;
}
</style>
