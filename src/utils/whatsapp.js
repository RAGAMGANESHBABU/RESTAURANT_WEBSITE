export function getWhatsAppLink(number, restaurantName, customMessage) {
  const cleanNumber = String(number).replace(/\D/g, "");

  const defaultMessage =
    "Hi, I saw your restaurant website demo. I want a similar website for my business.";

  const message = customMessage || defaultMessage;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}