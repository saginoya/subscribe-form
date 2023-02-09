import { Core as YubinBangoCore } from "yubinbango-core2";

interface YubinBangoCoreValue {
  region_id: number;
  region: string;
  locality: string;
  street: string;
  extended: string;
}
export const fetchAddress = (postalCode: string): string => {
  let address: string = "";
  const pattern = /[0-9０-９-‐]/g;
  if (postalCode.match(pattern)) {
    new YubinBangoCore(postalCode, (value: YubinBangoCoreValue) => {
      // region=都道府県, locality=市区町村, street=町域
      address = value.region + value.locality + value.street;
    });
  }
  return address;
};
