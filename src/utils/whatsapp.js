export function getWhatsAppLink(number, restaurantName) {
  const cleanNumber = String(number).replace(/\D/g, "");

  const message = `Hi ${restaurantName}, I want to place an order.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}