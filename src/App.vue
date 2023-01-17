<script setup lang="ts">
import { RouterView } from "vue-router";
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
