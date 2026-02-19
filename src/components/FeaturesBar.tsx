import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const features = [
  { icon: Truck, label: "Free Shipping", desc: "On orders over ₹999" },
  { icon: Shield, label: "Secure Payment", desc: "100% protected" },
  { icon: RotateCcw, label: "Easy Returns", desc: "30-day guarantee" },
  { icon: Headphones, label: "24/7 Support", desc: "Always here to help" },
];

const FeaturesBar = () => (
  <section className="border-y border-border bg-card">
    <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4 lg:px-8">
      {features.map(({ icon: Icon, label, desc }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
            <Icon size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesBar;
