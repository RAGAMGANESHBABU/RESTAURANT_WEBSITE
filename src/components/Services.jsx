import { motion } from "framer-motion";
import { services } from "../data/restaurantData";

function Services() {
  return (
    <section id="services" className="bg-cream px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-primary">
            Our Services
          </p>

          <h2 className="mt-4 font-display text-4xl font-extrabold text-secondary md:text-5xl">
            Delicious Food, Served Your Way
          </h2>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            From dine-in experiences to party orders and home delivery, we make
            every meal fresh, smooth, and satisfying.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-3xl bg-white p-8 shadow-lg shadow-orange-900/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="font-display text-2xl font-bold text-secondary">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;