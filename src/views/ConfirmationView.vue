<script setup lang="ts"></script>

<template>
  <section>
    <h2>入力内容のご確認</h2>
    <form method="post">
      <section>
        <div>
          <p><label for="name">お名前</label></p>
          <input type="text" name="name" id="name" readonly value="日報太郎" />
        </div>
        <div>
          <p><label for="organization">会社名・組織名</label></p>
          <input
            type="text"
            name="organization"
            id="organization"
            readonly
            value="株式会社日報ビジネス"
          />
        </div>
      </section>
      <section>
        <div>
          <button type="button">もどる</button>
          <button type="submit">送信</button>
        </div>
      </section>
    </form>
  </section>
</template>
