import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <a href="/" className="font-display text-xl font-semibold tracking-wide text-foreground">
          MAISON
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Search">
            <Search size={20} />
          </button>
          <button
            className="relative text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
