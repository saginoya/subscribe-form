<script setup lang="ts"></script>

<template>
  <article>
    <section class="ly_cont">
      <div class="bl_contsUnit">
        <h2 class="el_warningHeading">お申し込みについてご注意</h2>
        <dl class="bl_faq">
          <dt class="bl_faq_q">
            <span class="bl_faq_icon">Q</span>
            <span class="bl_faq_q_txt">年間購読のお申し込みの流れについて</span>
          </dt>
          <dd class="bl_faq_a">
            <span class="bl_faq_icon">A</span>
            <div class="bl_faq_a_body">
              <p class="bl_faq_a_txt">
                前納制となりますので、先に請求書をお送りし、ご入金確認後の発送となります。
              </p>
            </div>
            <!-- /.bl_faq_a_body -->
          </dd>
          <dt class="bl_faq_q">
            <span class="bl_faq_icon">Q</span>
            <span class="bl_faq_q_txt">購読開始月について</span>
          </dt>
          <dd class="bl_faq_a">
            <span class="bl_faq_icon">A</span>
            <div class="bl_faq_a_body">
              <p class="bl_faq_a_txt">
                ご指定が無ければ、お申し込み月からの開始となります。
              </p>
            </div>
            <!-- /.bl_faq_a_body -->
          </dd>
          <dt class="bl_faq_q">
            <span class="bl_faq_icon">Q</span>
            <span class="bl_faq_q_txt">その他の指定について</span>
          </dt>
          <dd class="bl_faq_a">
            <span class="bl_faq_icon">A</span>
            <div class="bl_faq_a_body">
              <p class="bl_faq_a_txt">
                連絡事項などにつきましては、備考欄にご記入をお願いいたします。（請求先・送付先を別途ご指定など）
              </p>
            </div>
            <!-- /.bl_faq_a_body -->
          </dd>
        </dl>
        <address class="bl_cta">
          <h2 class="bl_cta_ttl">お問い合わせ</h2>
          <p class="bl_cta_txt">
            その他、不明な点などあれば以下のメールアドレスまでご連絡ください。<br />
            hambai@create-nippo.co.jp
          </p>
        </address>
      </div>
    </section>
    <section class="ly_cont hp_bgcBase">
      <form method="post">
        <div class="bl_fieldsetUnit">
          <fieldset class="bl_fieldset">
            <legend class="bl_fieldset_ttl">
              <h2 class="el_lv2heading">お客様情報</h2>
            </legend>
            <div class="bl_contsUnit">
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="name">会社名・組織名・個人名</label>
                  </h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="el_inputBase"
                    placeholder="株式会社日報ビジネス"
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="department">所属部署・ご担当者氏名</label>
                  </h3>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="text"
                    name="department"
                    class="el_inputBase"
                    id="department"
                    placeholder="出版部&emsp;田中太郎"
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="business-type">業種</label>
                  </h3>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <select
                    name="business-type"
                    id="business-type"
                    class="el_inputSelect"
                  >
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
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="phone">電話番号</label>
                  </h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="el_inputBase"
                    required
                    placeholder="03-3262-3465"
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="fax">FAX番号</label>
                  </h3>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <input
                  type="tel"
                  name="fax"
                  id="fax"
                  class="el_inputBase"
                  placeholder="03-3263-2560"
                />
              </div>
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="email">メールアドレス</label>
                  </h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="el_inputBase"
                    required
                    placeholder=""
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
            </div>
            <!-- /.bl_contsUnit -->
          </fieldset>
          <fieldset class="bl_fieldset">
            <legend class="bl_fieldset_ttl">
              <h2 class="el_lv2heading">発送先ご住所</h2>
            </legend>
            <div class="bl_contsUnit">
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="post-code">郵便番号</label>
                  </h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    class="el_inputBase"
                    required
                    pattern="^[0-9]{3}-[0-9]{4}$"
                    title="半角数字とハイフン（-）で入力してください"
                    placeholder="101-0061"
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="address-level">都道府県・市町村・番地</label>
                  </h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="text"
                    name="address-level"
                    id="address-level"
                    class="el_inputBase"
                    required
                    placeholder="東京都千代田区神田三崎町3-1-5"
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="address-line">建物名・部屋番号など</label>
                  </h3>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <input
                    type="text"
                    name="address-line"
                    id="address-line"
                    class="el_inputBase"
                    placeholder="神田三崎町ビル1階"
                  />
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
            </div>
            <!-- /.bl_contsUnit -->
          </fieldset>
          <fieldset class="bl_fieldset">
            <legend class="bl_fieldset_ttl">
              <h2 class="el_lv2heading">ご希望について</h2>
            </legend>
            <div class="bl_contsUnit">
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    ご希望の誌・紙をチェックして下さい
                  </h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <ul class="bl_cardUnit">
                    <li class="bl_card">
                      <p>
                        <label class="el_labelCheckbox">
                          <input
                            type="checkbox"
                            name="magazines[]"
                            class="el_inputChecbox"
                            value="ht"
                          />
                          週刊&nbsp;包装タイムス
                        </label>
                      </p>
                      <p>
                        <label
                          >購読開始月<input
                            type="month"
                            name="ht-month"
                            class="el_inputInline"
                        /></label>
                      </p>
                      <p>
                        <label
                          >部数<input
                            type="number"
                            name="ht-number"
                            class="el_inputInline"
                            min="1"
                        /></label>
                      </p>
                    </li>
                    <li class="bl_card">
                      <p>
                        <label class="el_labelCheckbox">
                          <input
                            type="checkbox"
                            name="magazines[]"
                            class="el_inputChecbox"
                            value="fp"
                          />
                          月刊&nbsp;食品包装
                        </label>
                      </p>
                      <p>
                        <label
                          >購読開始月<input
                            type="month"
                            name="fp-month"
                            class="el_inputInline"
                            disabled
                        /></label>
                      </p>
                      <p>
                        <label
                          >部数<input
                            type="number"
                            name="fp-number"
                            class="el_inputInline"
                            min="1"
                            disabled
                        /></label>
                      </p>
                    </li>
                    <li class="bl_card">
                      <p>
                        <label for="magazines-ht" class="el_labelCheckbox">
                          <input
                            type="checkbox"
                            name="magazines[]"
                            id="magazines-ht"
                            class="el_inputChecbox"
                            value="jk"
                          />
                          週刊&nbsp;循環経済新聞
                        </label>
                      </p>
                      <p>
                        <label
                          >購読開始月<input
                            type="month"
                            name="jk-month"
                            class="el_inputInline"
                            disabled
                        /></label>
                      </p>
                      <p>
                        <label
                          >部数<input
                            type="number"
                            name="jk-number"
                            class="el_inputInline"
                            min="1"
                            disabled
                        /></label>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">DM送付について</h3>
                  <span class="el_label">必須</span>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <label
                    ><input
                      type="radio"
                      name="dm"
                      class="el_inputRadio"
                      checked
                      required
                    />希望する</label
                  >
                  <label
                    ><input
                      type="radio"
                      name="dm"
                      class="el_inputRadio"
                    />希望しない</label
                  >
                  <p class="el_note">
                    日報グループの業務のご案内をさせていただくことがあります。
                  </p>
                </div>
              </div>
              <div class="bl_inputGroup">
                <div class="bl_inputGroup_ttl">
                  <h3 class="el_lv3heading">
                    <label for="remarks">備考欄</label>
                  </h3>
                </div>
                <!-- /.bl_inputGroup_ttl -->
                <div class="bl_inputGroup_conts">
                  <textarea
                    type="text"
                    name="remarks"
                    id="remarks"
                    class="el_textareaBase"
                  ></textarea>
                  <p class="el_note">
                    連絡事項があればご記入ください。（請求先・送付先を別途ご指定など）
                  </p>
                </div>
                <!-- /.bl_inputGroup_conts -->
              </div>
              <!-- /.bl_inputGroup -->
            </div>
            <!-- /.bl_contsUnit -->
          </fieldset>
          <ul class="bl_horizBtnList">
            <li>
              <button type="submit" class="el_roundedBtn">
                入力内容の確認
              </button>
            </li>
          </ul>
        </div>
        <!-- /.bl_fieldsetUnit -->
      </form>
    </section>
  </article>
</template>
