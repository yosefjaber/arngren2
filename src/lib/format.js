// Small helper for showing prices the Norwegian way: "kr 22 998,-"

export function formatPrice(amount) {
  // toLocaleString('nb-NO') puts a space between the thousands: 22998 -> "22 998"
  return 'kr ' + amount.toLocaleString('nb-NO') + ',-';
}
