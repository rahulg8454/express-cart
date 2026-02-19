import productBag from "@/assets/product-bag.jpg";
import productMug from "@/assets/product-mug.jpg";
import productCandle from "@/assets/product-candle.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productNotebook from "@/assets/product-notebook.jpg";
import productDiya from "@/assets/product-diya.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productBottle from "@/assets/product-bottle.jpg";
import productTote from "@/assets/product-tote.jpg";
import productSpice from "@/assets/product-spice.jpg";
import productIncense from "@/assets/product-incense.jpg";
import productCharger from "@/assets/product-charger.jpg";
import productPlanter from "@/assets/product-planter.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "sale" | "new";
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Artisan Leather Crossbody",
    price: 2499,
    originalPrice: 3199,
    image: productBag,
    category: "Accessories",
    badge: "sale",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Handcrafted Ceramic Mug",
    price: 599,
    image: productMug,
    category: "Home",
    badge: "new",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Amber Glow Candle",
    price: 749,
    image: productCandle,
    category: "Home",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Linen Throw Blanket",
    price: 1299,
    image: productBlanket,
    category: "Home",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Minimalist Gold Watch",
    price: 4999,
    originalPrice: 5999,
    image: productWatch,
    category: "Accessories",
    badge: "sale",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Botanical Face Serum",
    price: 899,
    image: productSerum,
    category: "Beauty",
    badge: "new",
    rating: 4.8,
  },
  {
    id: "7",
    name: "Wireless Studio Earbuds",
    price: 1999,
    image: productEarbuds,
    category: "Tech",
    rating: 4.5,
  },
  {
    id: "8",
    name: "Olive Hardcover Journal",
    price: 449,
    image: productNotebook,
    category: "Stationery",
    rating: 4.7,
  },
  {
    id: "9",
    name: "Brass Diya Oil Lamp",
    price: 699,
    image: productDiya,
    category: "Home",
    badge: "new",
    rating: 4.9,
  },
  {
    id: "10",
    name: "Handwoven Silk Scarf",
    price: 1899,
    originalPrice: 2499,
    image: productScarf,
    category: "Accessories",
    badge: "sale",
    rating: 4.8,
  },
  {
    id: "11",
    name: "Copper Water Bottle",
    price: 799,
    image: productBottle,
    category: "Home",
    rating: 4.7,
  },
  {
    id: "12",
    name: "Jute Tote Bag",
    price: 549,
    image: productTote,
    category: "Accessories",
    badge: "new",
    rating: 4.6,
  },
  {
    id: "13",
    name: "Premium Spice Jar Set",
    price: 1199,
    image: productSpice,
    category: "Home",
    rating: 4.8,
  },
  {
    id: "14",
    name: "Sandalwood Incense Set",
    price: 349,
    image: productIncense,
    category: "Home",
    rating: 4.9,
  },
  {
    id: "15",
    name: "Bamboo Wireless Charger",
    price: 1499,
    originalPrice: 1999,
    image: productCharger,
    category: "Tech",
    badge: "sale",
    rating: 4.5,
  },
  {
    id: "16",
    name: "Terracotta Planter",
    price: 899,
    image: productPlanter,
    category: "Home",
    badge: "new",
    rating: 4.7,
  },
];

export const categories = ["All", "Accessories", "Home", "Beauty", "Tech", "Stationery"];
