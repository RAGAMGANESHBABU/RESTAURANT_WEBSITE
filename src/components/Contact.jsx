import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { restaurantInfo } from "../data/restaurantData";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    event.target.reset();
  };

  return (
    <section id="contact" className="bg-cream px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-primary">
            Contact Us
          </p>

          <h2 className="mt-4 font-display text-4xl font-extrabold text-secondary md:text-5xl">
            Reserve, Order, or Ask Anything
          </h2>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Reach us for table bookings, food orders, catering, party orders, or
            any restaurant-related enquiry.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-8 shadow-xl shadow-orange-900/5"
          >
            <h3 className="font-display text-3xl font-bold text-secondary">
              Restaurant Details
            </h3>

            <div className="mt-8 space-y-6">
              <InfoItem
                icon={MapPin}
                title="Address"
                value={restaurantInfo.address}
              />

              <InfoItem icon={Phone} title="Phone" value={restaurantInfo.phone} />

              <InfoItem icon={Mail} title="Email" value={restaurantInfo.email} />

              <InfoItem
                icon={Clock}
                title="Opening Hours"
                value={restaurantInfo.openingHours}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl bg-orange-100 shadow-lg">
              <div className="border-b border-orange-200 bg-white/80 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-primary">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-bold text-secondary">
                      Visit Our Restaurant
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      Main Road, Near Railway Station, Tenali, Andhra Pradesh 522201, India
                    </p>
                  </div>
                </div>
              </div>

              <iframe
                title="Royal Spice Restaurant Location"
                src="https://www.google.com/maps?q=Main%20Road%2C%20Near%20Railway%20Station%2C%20Tenali%2C%20Andhra%20Pradesh%20522201%2C%20India&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-8 shadow-xl shadow-orange-900/5"
          >
            <h3 className="font-display text-3xl font-bold text-secondary">
              Send a Message
            </h3>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Input label="Name" type="text" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="Your email" />
              <Input label="Phone" type="tel" placeholder="Your phone number" />

              <div>
                <label className="mb-2 block font-semibold text-stone-700">
                  Subject
                </label>
                <select className="w-full rounded-2xl border border-orange-100 bg-cream px-4 py-4 outline-none transition focus:border-primary">
                  <option>Table Booking</option>
                  <option>Food Order</option>
                  <option>Catering</option>
                  <option>Party Order</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-semibold text-stone-700">
                Message
              </label>
              <textarea
                required
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-orange-100 bg-cream px-4 py-4 outline-none transition focus:border-primary"
              ></textarea>
            </div>

            <button className="mt-6 w-full rounded-full bg-primary px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-secondary">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, title, value }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-primary">
        <Icon size={22} />
      </div>

      <div>
        <h4 className="font-bold text-secondary">{title}</h4>
        <p className="mt-1 leading-7 text-stone-600">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-stone-700">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-orange-100 bg-cream px-4 py-4 outline-none transition focus:border-primary"
      />
    </div>
  );
}

export default Contact;