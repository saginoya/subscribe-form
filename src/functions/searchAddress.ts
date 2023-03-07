export const searchAddress = (postalCode: string) => {
  const pattern = /\d{3}-?\d{4}/;
  if (!pattern.test(postalCode)) {
    return Promise.reject(new Error("Invalid Postal Code"));
  }

  return new Promise((resolve, reject) => {
    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.results) {
          const result = response.results[0];
          const address = `${result.address1}${result.address2}${result.address3}`;
          resolve(address);
        } else {
          reject(new Error("Not Found"));
        }
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => {
      reject(new Error(xhr.statusText));
    };
    xhr.send();
  });
};
