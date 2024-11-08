const displayBDTCurrency = (num) => {
  const formatter = new Intl.NumberFormat("bn-In", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  });
  return formatter.format(num);
};

export default displayBDTCurrency;
