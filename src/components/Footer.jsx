import { UtensilsCrossed } from "lucide-react";
import { restaurantInfo } from "../data/restaurantData";

function Footer() {
  return (
    <footer className="bg-dark px-5 py-10 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
              <UtensilsCrossed size={22} />
            </span>

            <div>
              <h3 className="font-display text-2xl font-bold">
                {restaurantInfo.name}
              </h3>
              <p className="text-sm text-orange-100">
                Authentic flavours, premium dining.
              </p>
            </div>
          </div>

          <p className="text-sm text-orange-100">
            © {new Date().getFullYear()} {restaurantInfo.name}. All rights
            reserved.
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-6 text-orange-100/80">
            This is a demo restaurant website created for portfolio purposes.
            Business details are sample/demo content.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;