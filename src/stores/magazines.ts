import { defineStore } from "pinia";

type MagazineCat = "general" | "hoso" | "kankyo";

type Magazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "subscription" | "single";
};

type subscriptionMagazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "subscription";
  annualPrice: number;
  published: "monthly" | "bimonthly" | "weekly";
};

type singleMagazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "single";
  price: number;
};

type State = {
  magazineList: Map<string, subscriptionMagazine | singleMagazine>;
};

export const useStoreMagazines = defineStore("magazines", {
  state: (): State => {
    return {
      magazineList: new Map<string, subscriptionMagazine | singleMagazine>(),
    };
  },
  getters: {
    isListSize: (state): number => {
      return state.magazineList.size;
    },
    isEmpty: (state): boolean => {
      return state.magazineList.size === 0;
    },
  },
  actions: {
    initList(): void {
      this.magazineList.set("ht", {
        id: "ht",
        cat: ["hoso"],
        name: "週刊 包装タイムス",
        explanation: "包装タイムスは1966年創刊の包装専門新聞です",
        saleType: "subscription",
        annualPrice: 23900,
        published: "weekly",
      });
      this.magazineList.set("fp", {
        id: "fp",
        cat: ["hoso"],
        name: "月刊 食品包装",
        explanation: "食品包装の専門情報誌",
        saleType: "subscription",
        annualPrice: 0,
        published: "monthly",
      });
      this.magazineList.set("cb", {
        id: "cb",
        cat: ["hoso"],
        name: "月刊 カートンボックス",
        explanation: "「箱創り」を応援するビジネスマッチングマガジン",
        saleType: "subscription",
        annualPrice: 0,
        published: "monthly",
      });
      this.magazineList.set("jk", {
        id: "jk",
        cat: ["kankyo"],
        name: "週刊 循環経済新聞",
        explanation: "処理・処分から資源循環、環境保全まで幅広く紹介した新聞",
        saleType: "subscription",
        annualPrice: 0,
        published: "weekly",
      });
      this.magazineList.set("rd", {
        id: "rd",
        cat: ["kankyo"],
        name: "月刊 廃棄物",
        explanation:
          "ごみ処理・リサイクルの実際的な解決方法を具体的に紹介する廃棄物問題の総合誌",
        saleType: "subscription",
        annualPrice: 0,
        published: "monthly",
      });
      this.magazineList.set("ec", {
        id: "ec",
        cat: ["kankyo"],
        name: "隔月刊 イーコンテクチャー",
        explanation: "建廃・解体・エコ施工の専門誌",
        saleType: "subscription",
        annualPrice: 0,
        published: "bimonthly",
      });
      this.magazineList.set("gw", {
        id: "gw",
        cat: ["kankyo"],
        name: "隔月刊 地球温暖化",
        explanation: "「脱炭素社会実現」を目指す提言誌",
        saleType: "subscription",
        annualPrice: 0,
        published: "bimonthly",
      });
    },
    getItem(id: string): Magazine | undefined {
      const item = this.magazineList.get(id);
      if (item) {
        return item;
      } else {
        console.log("存在しない雑誌が参照されました。");
      }
    },
  },
});
