import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { navLinks, restaurantInfo } from "../data/restaurantData";
import { getWhatsAppLink } from "../utils/whatsapp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappLink = getWhatsAppLink(
    restaurantInfo.whatsappNumber,
    restaurantInfo.name
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="glass fixed left-0 top-0 z-50 w-full border-b border-orange-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            <UtensilsCrossed size={22} />
          </span>

          <span className="font-display text-2xl font-bold text-secondary">
            {restaurantInfo.name}
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-semibold transition ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-stone-700 hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-secondary"
          >
            Order Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl bg-white p-2 text-secondary shadow-md lg:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-orange-100 bg-cream px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left font-semibold text-stone-700"
              >
                {link.label}
              </button>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-primary px-6 py-3 text-center font-bold text-white"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;