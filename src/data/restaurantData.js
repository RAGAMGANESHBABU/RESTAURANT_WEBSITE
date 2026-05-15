import {
  Utensils,
  ShoppingBag,
  Smartphone,
  Truck,
  PartyPopper,
  ChefHat
} from "lucide-react";

export const restaurantInfo = {
  name: "Royal Spice",
  tagline: "Authentic Flavours. Premium Dining.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "hello@royalspice.com",
  address: "Main Road, Near Railway Station, Tenali, Andhra Pradesh 522201, India",
  openingHours: "Mon - Sun: 10:00 AM - 11:00 PM"
};

export const navLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" }
];

export const services = [
  {
    icon: Utensils,
    title: "Dine-In",
    description:
      "Enjoy a premium restaurant atmosphere with warm service and freshly prepared dishes."
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    description:
      "Order your favourite meals and collect them fresh, hot, and perfectly packed."
  },
  {
    icon: Smartphone,
    title: "Online Ordering",
    description:
      "Place orders easily through phone or WhatsApp with quick confirmation."
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "Get delicious food delivered safely and quickly to your doorstep."
  },
  {
    icon: ChefHat,
    title: "Catering",
    description:
      "Professional catering service for family events, offices, and celebrations."
  },
  {
    icon: PartyPopper,
    title: "Party Orders",
    description:
      "Custom bulk food orders for birthdays, functions, parties, and gatherings."
  }
];

export const stats = [
  { value: "4.8★", label: "Customer Rating" },
  { value: "15K+", label: "Happy Customers" },
  { value: "8+", label: "Years Experience" }
];