import { ShopifyProduct } from "@/lib/shopify";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = () => {
    if (!variant) return;
    
    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${node.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-secondary/20">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col items-start p-4 space-y-3">
        <div className="w-full">
          <h3 className="font-semibold text-lg line-clamp-1">{node.title}</h3>
          {node.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {node.description}
            </p>
          )}
        </div>
        
        <div className="w-full flex items-center justify-between">
          <span className="text-2xl font-bold">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          <Button 
            onClick={handleAddToCart}
            size="sm"
            disabled={!variant?.availableForSale}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
