import { MessageCircle } from "lucide-react";
import { restaurantInfo } from "../data/restaurantData";

function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${restaurantInfo.whatsappNumber}?text=Hi%20${restaurantInfo.name},%20I%20want%20to%20place%20an%20order.`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition hover:-translate-y-1 hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle size={30} />
    </button>
  );
}

export default WhatsAppButton;