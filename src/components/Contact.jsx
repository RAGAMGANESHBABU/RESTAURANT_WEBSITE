import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { restaurantInfo } from "../data/restaurantData";

function Contact() {
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: ""
    });

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus({
        loading: false,
        success: "Message sent successfully! We will contact you soon.",
        error: ""
      });

      event.target.reset();
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Message could not be sent. Please try again later."
      });
    }
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
                      {restaurantInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              <iframe
                title={`${restaurantInfo.name} Restaurant Location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  restaurantInfo.address
                )}&output=embed`}
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
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
              />

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Your email"
              />

              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
              />

              <div>
                <label className="mb-2 block font-semibold text-stone-700">
                  Subject
                </label>

                <select
                  name="subject"
                  required
                  className="w-full rounded-2xl border border-orange-100 bg-cream px-4 py-4 outline-none transition focus:border-primary"
                >
                  <option value="Table Booking">Table Booking</option>
                  <option value="Food Order">Food Order</option>
                  <option value="Catering">Catering</option>
                  <option value="Party Order">Party Order</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-semibold text-stone-700">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-orange-100 bg-cream px-4 py-4 outline-none transition focus:border-primary"
              ></textarea>
            </div>

            {status.success && (
              <div className="mt-5 rounded-2xl bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
                {status.success}
              </div>
            )}

            {status.error && (
              <div className="mt-5 rounded-2xl bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
                {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={18} />
              {status.loading ? "Sending Message..." : "Send Message"}
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

function Input({ label, name, type, placeholder }) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-stone-700">
        {label}
      </label>

      <input
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-orange-100 bg-cream px-4 py-4 outline-none transition focus:border-primary"
      />
    </div>
  );
}

export default Contact;