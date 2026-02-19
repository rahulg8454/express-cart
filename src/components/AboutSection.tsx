import { motion } from "framer-motion";
import { Heart, Leaf, Users } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="border-t border-border bg-secondary">
    <div className="container mx-auto px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground sm:text-4xl"
        >
          About MAISON
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base leading-relaxed text-muted-foreground"
        >
          We are a proudly Indian brand on a mission to bring you thoughtfully curated,
          premium-quality essentials that celebrate both tradition and modern design.
          Every product in our collection is handpicked to elevate your everyday life —
          from artisan home décor to sustainable accessories crafted by local artisans.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {[
          {
            icon: Heart,
            title: "Made with Love",
            desc: "Every product is curated with care, supporting Indian artisans and their timeless craft traditions.",
          },
          {
            icon: Leaf,
            title: "Sustainable & Ethical",
            desc: "We prioritize eco-friendly materials and ethical sourcing to protect our planet for future generations.",
          },
          {
            icon: Users,
            title: "Community First",
            desc: "We empower local communities by partnering directly with makers across India.",
          },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon size={20} />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
