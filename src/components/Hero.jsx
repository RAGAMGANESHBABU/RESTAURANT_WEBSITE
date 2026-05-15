import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { restaurantInfo, stats } from "../data/restaurantData";

function Hero() {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${restaurantInfo.whatsappNumber}?text=Hi%20${restaurantInfo.name},%20I%20want%20to%20place%20an%20order.`,
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="hero-overlay relative flex min-h-screen items-center px-5 pt-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/50 bg-white/15 px-4 py-2 text-sm font-semibold text-orange-100 backdrop-blur">
            <Star size={16} className="fill-orange-300 text-orange-300" />
            Premium Restaurant Experience
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Taste the Art of Authentic Food
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Welcome to {restaurantInfo.name}, where fresh ingredients, expert
            chefs, and warm hospitality come together to create unforgettable
            dining moments.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-secondary shadow-xl transition hover:-translate-y-1"
            >
              View Services
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition hover:-translate-y-1 hover:bg-secondary"
            >
              Order on WhatsApp
            </button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/15 p-4 text-center backdrop-blur"
              >
                <h3 className="text-2xl font-extrabold text-white">
                  {item.value}
                </h3>
                <p className="mt-1 text-xs font-medium text-orange-100">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
              alt="Premium restaurant dish"
              className="h-[560px] w-full rounded-[2.5rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-2xl">
              <p className="text-sm font-semibold text-stone-500">
                Today Special
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-secondary">
                Chef’s Signature Meal
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                Freshly cooked with premium spices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;