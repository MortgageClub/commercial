export function formatCurrency(value) {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  return "$" + onlyNums.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}