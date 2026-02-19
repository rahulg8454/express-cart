import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-card">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground ${
              product.badge === "sale" ? "bg-badge-sale" : "bg-badge-new"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={16} />
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-foreground">{product.name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-accent text-accent" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
