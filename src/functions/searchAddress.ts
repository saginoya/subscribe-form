interface AddressResult {
  message: string | null;
  results: {
    address1: string;
    address2: string;
    address3: string;
  }[];
  status: number;
}

export const searchAddress = async (postalCode: string): Promise<string> => {
  try {
    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const json = (await response.json()) as AddressResult;
    if (
      json.status !== 200 ||
      json.message ||
      !json.results ||
      json.results.length === 0
    ) {
      throw new Error("Not Found");
    }
    const result = json.results[0];
    const address = `${result.address1}${result.address2}${result.address3}`;
    return address;
  } catch (error: any) {
    throw new Error(`Failed to retrieve address: ${error.message}`);
  }
};
