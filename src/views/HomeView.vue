<script setup lang="ts">
// Layout components
import LyCont from "@/components/LyCont.vue";

// Block components
import BlContsUnit from "@/components/BlContsUnit.vue";
import BlFaq from "@/components/BlFaq.vue";
import BlFaqA from "@/components/BlFaqA.vue";
import BlFaqQ from "@/components/BlFaqQ.vue";
import BlCta from "@/components/BlCta.vue";
import BlFormItemUnit from "@/components/BlFormItemUnit.vue";
import BlFieldset from "@/components/BlFieldset.vue";
import BlInputGroup from "@/components/BlInputGroup.vue";
import BlCardUnit from "@/components/BlCardUnit.vue";
import BlCard from "@/components/BlCard.vue";
import BlHorizBtnList from "@/components/BlHorizBtnList.vue";

// Elemnt components
import ElChip from "@/components/ElChip.vue";
import ElNote from "@/components/ElNote.vue";
import ElBtn from "@/components/ElBtn.vue";
import ElInput from "@/components/ElInput.vue";
import ElInputSelection from "@/components/ElInputSelection.vue";
import ElSelect from "@/components/ElSelect.vue";
import ElTextarea from "@/components/ElTextarea.vue";
</script>

<template>
  <LyCont>
    <BlContsUnit>
      <h2 class="el_warningHeading">お申し込みについてご注意</h2>
      <BlFaq>
        <BlFaqQ>年間購読のお申し込みの流れについて</BlFaqQ>
        <BlFaqA>
          <p>
            前納制となりますので、先に請求書をお送りし、ご入金確認後の発送となります。
          </p>
        </BlFaqA>
        <BlFaqQ>購読開始月について</BlFaqQ>
        <BlFaqA>
          <p>ご指定が無ければ、お申し込み月からの開始となります。</p>
        </BlFaqA>
        <BlFaqQ>その他の指定について</BlFaqQ>
        <BlFaqA>
          <p>連絡事項などにつきましては、備考欄にご記入をお願いいたします。</p>
          <p>（請求先・送付先を別途ご指定など）</p>
        </BlFaqA>
      </BlFaq>
      <BlCta title="お問い合わせ">
        <p>
          その他、不明な点などあれば以下のメールアドレスまでご連絡ください。<br />
          hambai@create-nippo.co.jp
        </p>
      </BlCta>
    </BlContsUnit>
  </LyCont>
  <LyCont class="hp_bgcBase">
    <form method="post">
      <BlFormItemUnit>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">お客様情報</h2>
          </template>
          <BlInputGroup
            label="個人氏名・ご担当者様氏名"
            id="name"
            :required="true"
            type="text"
            autocomplete="name"
            placeholder="日報太郎"
          ></BlInputGroup>
          <BlInputGroup
            label="企業名・団体名"
            id="organization"
            type="text"
            autocomplete="organization"
            placeholder="株式会社日報ビジネス"
          ></BlInputGroup>
          <BlInputGroup
            label="所属部署など"
            id="department"
            type="text"
            placeholder="出版部"
          ></BlInputGroup>
          <BlInputGroup label="業種" id="business-type" :required="true">
            <ElSelect id="business-type">
              <option>選択してください</option>
              <optgroup label="哺乳類">
                <option>いぬ</option>
                <option>ねこ</option>
              </optgroup>
              <optgroup label="爬虫類">
                <option>トカゲ</option>
                <option>ヘビ</option>
              </optgroup>
            </ElSelect>
          </BlInputGroup>
          <BlInputGroup
            label="電話番号"
            id="tel"
            :required="true"
            type="tel"
            autocomplete="tel-national"
            inputmode="tel"
            placeholder="03-3262-3465"
          ></BlInputGroup>
          <BlInputGroup
            label="FAX番号"
            id="fax"
            type="tel"
            inputmode="tel"
            placeholder="03-3263-2560"
          ></BlInputGroup>
          <BlInputGroup
            label="メールアドレス"
            id="email"
            :required="true"
            type="email"
            autocomplete="email"
            inputmode="email"
            placeholder="sample@sample.com"
          ></BlInputGroup>
        </BlFieldset>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">発送先ご住所</h2>
          </template>
          <BlInputGroup
            label="郵便番号"
            id="postal-code"
            :required="true"
            type="text"
            autocomplete="postal-code"
            inputmode="numeric"
            placeholder="101-0061"
            pattern="^[0-9]{3}-[0-9]{4}$"
            title="半角数字とハイフン（-）で入力してください"
          >
          </BlInputGroup>
          <BlInputGroup
            label="都道府県・市町村"
            id="address-level"
            :required="true"
            type="text"
            autocomplete="address-level1 address-level2"
            placeholder="東京都千代田区神田三崎町"
          ></BlInputGroup>
          <BlInputGroup
            label="番地・丁目・号など"
            id="address-line1"
            :required="true"
            type="text"
            autocomplete="address-line1"
            placeholder="3-1-5"
          ></BlInputGroup>
          <BlInputGroup
            label="建物名・部屋番号など"
            id="address-line2"
            type="text"
            autocomplete="address-line2"
            placeholder="神田三崎町ビル1階"
          ></BlInputGroup>
        </BlFieldset>
        <BlFieldset>
          <template v-slot:title>
            <h2 class="el_lv2heading">ご希望について</h2>
          </template>
          <BlInputGroup
            label="ご希望の誌・紙をチェックして下さい"
            :required="true"
          >
            <BlCardUnit>
              <BlCard>
                <p>
                  <ElInputSelection type="checkbox" id="magazines[]" value="ht">
                    週刊&nbsp;包装タイムス
                  </ElInputSelection>
                </p>
                <p>
                  <label>
                    購読開始月
                    <ElInput
                      type="month"
                      id="ht-month"
                      :inline="true"
                    ></ElInput>
                  </label>
                </p>
                <p>
                  <label>
                    部数
                    <ElInput
                      type="number"
                      id="ht-number"
                      inputmode="numeric"
                      :inline="true"
                      min="1"
                    ></ElInput>
                  </label>
                </p>
              </BlCard>
              <BlCard>
                <p>
                  <ElInputSelection type="checkbox" id="magazines[]" value="fp">
                    月刊&nbsp;食品包装
                  </ElInputSelection>
                </p>
                <p>
                  <label>
                    購読開始月
                    <ElInput
                      type="month"
                      id="fp-month"
                      :inline="true"
                    ></ElInput>
                  </label>
                </p>
                <p>
                  <label>
                    部数
                    <ElInput
                      type="number"
                      id="fp-number"
                      inputmode="numeric"
                      :inline="true"
                      min="1"
                    ></ElInput>
                  </label>
                </p>
              </BlCard>
              <BlCard>
                <p>
                  <ElInputSelection type="checkbox" id="magazines[]" value="jk">
                    週刊&nbsp;循環経済新聞
                  </ElInputSelection>
                </p>
                <p>
                  <label>
                    購読開始月
                    <ElInput
                      type="month"
                      id="jk-month"
                      :inline="true"
                    ></ElInput>
                  </label>
                </p>
                <p>
                  <label>
                    部数
                    <ElInput
                      type="number"
                      id="jk-number"
                      inputmode="numeric"
                      :inline="true"
                      min="1"
                    ></ElInput>
                  </label>
                </p>
              </BlCard>
            </BlCardUnit>
          </BlInputGroup>
          <BlInputGroup label="DM送付について">
            <ElInputSelection type="radio" id="dm" value="希望する" checked>
              希望する
            </ElInputSelection>
            <ElInputSelection type="radio" id="dm" value="希望しない">
              希望しない
            </ElInputSelection>
            <ElNote>
              日報グループの業務のご案内をさせていただくことがあります。
            </ElNote>
          </BlInputGroup>
          <BlInputGroup label="備考欄" id="remarks">
            <ElTextarea
              id="remarks"
              rows="5"
              aria-describedby="aboutRemarks"
            ></ElTextarea>
            <ElNote id="aboutRemarks">
              連絡事項があればご記入ください。（請求先・送付先を別途ご指定など）
            </ElNote>
          </BlInputGroup>
        </BlFieldset>
        <BlHorizBtnList>
          <li>
            <ElBtn type="submit"> 入力内容の確認 </ElBtn>
          </li>
        </BlHorizBtnList>
      </BlFormItemUnit>
    </form>
  </LyCont>
</template>
