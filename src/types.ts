export type Item = {
  id: string;
  number: number;
  volume: string;
};

export type MagazineCat = "general" | "hoso" | "kankyo";

export type Magazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "subscription" | "single";
};

export type subscriptionMagazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "subscription";
  annualPrice: number;
  published: "monthly" | "bimonthly" | "weekly";
};

export type singleMagazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "single";
  price: number;
};
