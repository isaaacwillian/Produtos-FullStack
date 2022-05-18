export function sortByPrice(data, setData) {
  const newData = [
    ...data.sort((a, b) => {
      if (a["price"] > b["price"]) return 1;

      if (a["price"] < b["price"]) return -1;

      return 0;
    }),
  ];

  setData(newData);
}

export function sortByName(data, setData) {
  const newData = [
    ...data.sort((a, b) => {
      if (a["productName"] > b["productName"]) return 1;

      if (a["productName"] < b["productName"]) return -1;

      return 0;
    }),
  ];

  setData(newData);
}

export function sortByOriginDate(data, setData) {
  const newData = [
    ...data.sort((a, b) => {
      if (a["originDate"] > b["originDate"]) return 1;

      if (a["originDate"] < b["originDate"]) return -1;

      return 0;
    }),
  ];

  setData(newData);
}

export function sortByPerishable(data, setData) {
  const newData = [
    ...data.sort((a, b) => {
      if (a["isPerishable"] > b["isPerishable"]) return -1;

      if (a["isPerishable"] < b["isPerishable"]) return 1;

      return 0;
    }),
  ];

  setData(newData);
}

export function sortByExpirationDate(data, setData) {
  const newData = [
    ...data.sort((a, b) => {
      if (a["expirationDate"] === undefined) {
        return 1;
      }
      if (b["expirationDate"] === undefined) {
        return -1;
      }

      if (a["expirationDate"] > b["expirationDate"]) return 1;

      if (a["expirationDate"] < b["expirationDate"]) return -1;

      return 0;
    }),
  ];

  setData(newData);
}
