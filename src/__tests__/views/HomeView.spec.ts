import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vueのテスト", () => {
  test("入力値一覧オブジェクトを受け取っていない場合はエラーメッセージを表示", () => {
    const wrapper = mount(HomeView);
    const actual = wrapper.find(`[data-testid="form-body-error"]`).exists();
    const expected = true;
    expect(actual).toBe(expected);
  });
});
