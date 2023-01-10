<script setup lang="ts"></script>

<template>
  <section>
    <h2>お申し込みについてご注意</h2>
    <dl>
      <dt>年間購読お申し込みについて</dt>
      <dd>
        前納制となりますので、先に請求書をお送りし、ご入金確認後の発送となります。
      </dd>
      <dt>購読開始月について</dt>
      <dd>ご指定が無ければ、お申し込み月からの開始となります。</dd>
      <dt>その他</dt>
      <dd>
        連絡事項などにつきましては、備考欄にご記入をお願いいたします。（請求先・送付先を別途ご指定など）
      </dd>
      <dt>お問い合わせ</dt>
      <dd>
        <address>hambai@create-nippo.co.jp</address>
      </dd>
    </dl>
  </section>
  <section>
    <form method="post">
      <fieldset>
        <legend>お客様情報</legend>
        <div>
          <p><label for="name">お名前</label><span>必須</span></p>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="日報太郎"
          />
        </div>
        <div>
          <p><label for="organization">会社名・組織名</label></p>
          <input
            type="text"
            name="organization"
            id="organization"
            placeholder="株式会社日報ビジネス"
          />
        </div>
        <div>
          <p><label for="department">所属部署</label></p>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="出版部"
          />
        </div>
        <div>
          <p><label for="business-type">業種</label></p>
          <select name="business-type" id="business-type">
            <option>選択してください</option>
            <optgroup label="哺乳類">
              <option>いぬ</option>
              <option>ねこ</option>
            </optgroup>
            <optgroup label="爬虫類">
              <option>トカゲ</option>
              <option>ヘビ</option>
            </optgroup>
          </select>
        </div>
        <div>
          <p><label for="phone">電話番号</label><span>必須</span></p>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            placeholder="03-3262-3465"
          />
        </div>
        <div>
          <p><label for="fax">FAX番号</label></p>
          <input type="tel" name="fax" id="fax" placeholder="03-3263-2560" />
        </div>
        <div>
          <p><label for="email">メールアドレス</label><span>必須</span></p>
          <input type="email" name="email" id="email" required placeholder="" />
        </div>
      </fieldset>
      <fieldset>
        <legend>発送先ご住所</legend>
        <div>
          <p><label for="post-code">郵便番号</label><span>必須</span></p>
          <input
            type="text"
            name="post-code"
            id="post-code"
            required
            pattern="^[0-9]{3}-[0-9]{4}$"
            title="半角数字とハイフン（-）で入力してください"
            placeholder="101-0061"
          />
        </div>
        <div>
          <p>
            <label for="address-level">都道府県・市町村・番地</label
            ><span>必須</span>
          </p>
          <input
            type="text"
            name="address-level"
            id="address-level"
            required
            placeholder="東京都千代田区神田三崎町3-1-5"
          />
        </div>
        <div>
          <p><label for="address-line">建物名・部屋番号など</label></p>
          <input
            type="text"
            name="address-line"
            id="address-line"
            placeholder="神田三崎町ビル1階"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>ご希望について</legend>
        <div>
          <p>ご希望の誌・紙をチェックして下さい。<span>必須</span></p>
          <p>
            <label>
              <input type="checkbox" name="magazines[]" value="ht" />
              週刊&nbsp;包装タイムス
            </label>
            <label>購読開始月<input type="month" name="ht-month" /></label>
            <label>部数<input type="number" name="ht-number" min="1" /></label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="magazines[]" value="fp" />
              月刊&nbsp;食品包装
            </label>
            <label>購読開始月<input type="month" name="fp-month" /></label>
            <label>部数<input type="number" name="fp-number" min="1" /></label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="magazines[]" value="jk" />
              週刊&nbsp;循環経済新聞
            </label>
            <label>購読開始月<input type="month" name="jk-month" /></label>
            <label>部数<input type="number" name="jk-number" min="1" /></label>
          </p>
        </div>
        <div>
          <p>DM送付について<span>必須</span></p>
          <label
            ><input type="radio" name="dm" checked required />希望する</label
          >
          <label><input type="radio" name="dm" />希望しない</label>
          <p>日報グループの業務のご案内をさせていただくことがあります。</p>
        </div>
        <div>
          <p><label for="remarks">備考欄</label></p>
          <textarea type="text" name="remarks" id="remarks"></textarea>
          <p>
            連絡事項があればご記入ください。（請求先・送付先を別途ご指定など）
          </p>
        </div>
      </fieldset>
      <div>
        <button type="submit">入力内容の確認</button>
      </div>
    </form>
  </section>
</template>
