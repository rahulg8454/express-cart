import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const CartSheet = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col gap-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-4 rounded-lg border border-border p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{product.name}</h4>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-foreground">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-foreground">
                            ₹{(product.price * quantity).toLocaleString("en-IN")}
                          </span>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-muted-foreground transition-colors hover:text-destructive"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold text-foreground">₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <button className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90">
                Checkout
              </button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
