import { describe, test, expect } from "vitest";
import { searchAddress } from "@/functions/searchAddress";

describe("searchAddress.tsのテスト", () => {
  test("郵便番号を引数として住所をリターンする", async () => {
    const actual = await searchAddress("101-0061");
    const expected = "東京都千代田区神田三崎町";
    expect(actual).toBe(expected);
  });
});
