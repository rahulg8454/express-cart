import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            New Collection 2025 🇮🇳
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Curated for
            <br />
            <span className="italic">Modern India</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Discover thoughtfully crafted essentials that blend tradition and modernity.
            Premium quality, timeless design — delivered across India.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Shop Now <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={heroBanner}
            alt="Curated lifestyle products on warm linen background"
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
