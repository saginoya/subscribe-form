// フォームから入力してもらう情報
export type CustomerInfo = {
  name: string;
  organization: string;
  department: string;
  businessType: string;
  tel: string;
  fax: string;
  email: string;
  postalCode: string;
  addressLevel: string;
  addressLine1: string;
  addressLine2: string;
  dm: string;
  remarks: string;
};

// 入力されたフォームから編集してかきだされる情報
export type PostData = {
  postName: string;
  postDepartment: string;
  postTel: string;
  postFax: string;
  postPostalCode: string;
  postAddress: string;
  postMagazines: string[];
};

// ショッピングカートのアイテム
export type Item = {
  id: string;
  number: number;
  volume: string;
};

// 書籍のカテゴリー
export type MagazineCat = "general" | "hoso" | "kankyo";

// 書籍の共通情報
export type Magazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "subscription" | "single";
};

// 定期購読の書籍の情報
export type subscriptionMagazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "subscription";
  annualPrice: number;
  published: "monthly" | "bimonthly" | "weekly";
};

// 冊売りの書籍の情報
export type singleMagazine = {
  id: string;
  cat: MagazineCat[];
  name: string;
  explanation: string;
  saleType: "single";
  price: number;
};
