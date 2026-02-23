import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";

const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearchQuery("");
    window.dispatchEvent(new CustomEvent("maison-search", { detail: { query: "" } }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    window.dispatchEvent(new CustomEvent("maison-search", { detail: { query: q } }));
    if (q.trim()) {
      const el = document.querySelector("#products");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      toggleSearch();
    }
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const searchResults = searchQuery.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
          <button
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Search"
            onClick={toggleSearch}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
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
      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-3 lg:px-8">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search products..."
                  className="w-full rounded-lg border border-border bg-secondary py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              {/* Search Results Preview */}
              {searchResults.length > 0 && (
                <div className="mt-2 rounded-lg border border-border bg-background shadow-lg">
                  <ul className="max-h-64 overflow-y-auto py-1">
                    {searchResults.slice(0, 6).map((product) => (
                      <li key={product.id}>
                        <button
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-secondary"
                          onClick={() => {
                            setSearchQuery(product.name);
                            window.dispatchEvent(new CustomEvent("maison-search", { detail: { query: product.name } }));
                            const el = document.querySelector("#products");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded-md object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-foreground">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.category} · ₹{product.price.toLocaleString("en-IN")}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {searchQuery.trim() && searchResults.length === 0 && (
                <p className="mt-2 px-1 text-sm text-muted-foreground">No products found for "{searchQuery}"</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
