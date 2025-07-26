import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="px-4 md:px-8 lg:px-16 py-4 md:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="w-20 md:w-24">
          <Image
            src="/Group.png"
            alt="Fametonic Logo"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition"
          >
            About us
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </a>
        </nav>

        <button className="md:hidden text-white" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
