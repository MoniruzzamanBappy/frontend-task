import { Rocket } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-[#FC004E] via-[#a793cc] to-[#06B6D4] px-4 py-3 text-center">
      <div className="flex justify-center gap-2">
        <Rocket aria-hidden="true" />
        <span className="text-sm font-medium">
          <span className="text-[#00E7F9]">FRESH BEGINNINGS SALE:</span> Extra
          25% OFF, Limited Spots – start your journey today!
        </span>
      </div>
    </section>
  );
}
