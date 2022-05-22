export const formatPrice = (number) => {
  number = number / 100;
  let formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{2})+(?!\d))/g, ",")
    .replace(".", ",");

  return `R$ ${formattedNumber}`;
};
