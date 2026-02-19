import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
  Help: ["FAQ", "Shipping", "Returns", "Contact Us"],
  Company: ["About", "Careers", "Press", "Sustainability"],
};

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-14 lg:px-8">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <h3 className="font-display text-lg font-semibold text-foreground">MAISON</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Thoughtfully curated essentials for modern Indian living. Quality, design, and sustainability — delivered across India.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <a href="tel:+918540989819" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone size={14} />
              +91 85409 89819
            </a>
            <a href="mailto:rahul01.org@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail size={14} />
              rahul01.org@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} />
              India
            </span>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2025 MAISON. All rights reserved. | Made in India 🇮🇳
      </div>
    </div>
  </footer>
);

export default Footer;
