import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleSearch = (e: Event) => {
      const query = (e as CustomEvent<{ query: string }>).detail.query;
      setSearchQuery(query);
      if (query.trim()) {
        setActiveCategory("All");
      }
    };
    window.addEventListener("maison-search", handleSearch);
    return () => window.removeEventListener("maison-search", handleSearch);
  }, []);

  const applyFilters = (items: typeof products) => {
    let result = items;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  };

  const filtered = applyFilters(products);
  const newArrivals = products.filter((p) => p.badge === "new");

  const isSearchActive = searchQuery.trim().length > 0;

  return (
    <>
      {/* New Arrivals Section - hide when searching */}
      {!isSearchActive && (
        <section id="new-arrivals" className="container mx-auto px-4 py-20 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              New Arrivals
            </motion.h2>
            <p className="max-w-md text-muted-foreground">
              The latest additions to our curated collection — fresh picks for modern Indian living.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      )}
      {/* Collections / All Products Section */}
      <section id="collections" className={`border-t border-border ${isSearchActive ? "border-t-0" : ""}`}>
        <div id="products" className="container mx-auto px-4 py-20 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            {isSearchActive ? (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-3xl font-bold text-foreground sm:text-4xl"
              >
                Search Results
              </motion.h2>
            ) : (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-bold text-foreground sm:text-4xl"
              >
                Our Collections
              </motion.h2>
            )}
            <p className="max-w-md text-muted-foreground">
              {isSearchActive
                ? `${filtered.length} product${filtered.length !== 1 ? "s" : ""} found for "${searchQuery}"`
                : "Browse by category — hand-picked essentials designed for modern living."}
            </p>
          </div>
          {/* Category Filter - hide when searching */}
          {!isSearchActive && (
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
              <p className="text-lg">No products found</p>
              <p className="text-sm">Try a different search term or browse our collections</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default ProductGrid;
