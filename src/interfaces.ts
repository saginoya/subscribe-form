// 販売している媒体の情報
interface BuyInfo {
  buy: string;
  month: string;
  number: number;
}

export interface Magazine {
  cat: "hoso" | "kankyo";
  id: string;
  name: string;
  explanation: string;
  buyInfo: BuyInfo;
  bimonthly?: Boolean;
}

// フォームから入力してもらう情報
export interface CustomerInfo {
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
}

// 入力されたフォームから編集してかきだされる情報
export interface PostData {
  postName: string;
  postDepartment: string;
  postAddress: string;
  postMagazines: string[];
}
