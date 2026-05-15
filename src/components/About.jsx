import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Fresh ingredients sourced daily",
  "Experienced chefs with authentic recipes",
  "Premium taste with hygienic preparation",
  "Warm service and customer-first experience"
];

function About() {
  return (
    <section id="about" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
            alt="Restaurant interior"
            className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-8 right-6 rounded-3xl bg-cream p-6 shadow-2xl md:right-10">
            <h3 className="font-display text-3xl font-bold text-secondary">
              8+ Years
            </h3>
            <p className="mt-1 font-medium text-stone-600">
              of serving happiness
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold uppercase tracking-[0.25em] text-primary">
            About Us
          </p>

          <h2 className="mt-4 font-display text-4xl font-extrabold text-secondary md:text-5xl">
            Crafted with Passion, Served with Love
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Our restaurant was built with one simple goal: to serve food that
            feels special every single time. We combine traditional flavours,
            fresh ingredients, chef expertise, and a premium dining experience
            to make customers come back again and again.
          </p>

          <p className="mt-4 text-lg leading-8 text-stone-600">
            Whether you are dining with family, ordering for home, or planning a
            celebration, our team focuses on taste, hygiene, speed, and customer
            satisfaction.
          </p>

          <div className="mt-8 grid gap-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={22} />
                <span className="font-semibold text-stone-700">{point}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-9 rounded-full bg-secondary px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-primary"
          >
            Contact Restaurant
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;