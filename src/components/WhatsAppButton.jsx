import { restaurantInfo } from "../data/restaurantData";
import { getWhatsAppLink } from "../utils/whatsapp";

function WhatsAppButton() {
  const whatsappLink = getWhatsAppLink(
    restaurantInfo.whatsappNumber,
    restaurantInfo.name
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl shadow-green-900/30 transition duration-300 hover:-translate-y-1 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-9 w-9 fill-white"
      >
        <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.352.616 4.646 1.785 6.666L2.667 29.333l6.834-1.758A13.23 13.23 0 0 0 16 29.333c7.363 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.332-13.333Zm0 24a10.58 10.58 0 0 1-5.4-1.48l-.386-.229-4.057 1.044 1.084-3.953-.252-.406A10.58 10.58 0 0 1 5.334 16c0-5.891 4.775-10.667 10.667-10.667 5.89 0 10.666 4.776 10.666 10.667S21.891 26.667 16 26.667Zm5.847-7.99c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.499-2.574-1.59-.952-.85-1.595-1.9-1.782-2.22-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.526-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.306.16.213 2.254 3.44 5.46 4.827.763.33 1.358.527 1.822.675.765.244 1.462.21 2.012.128.614-.091 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;