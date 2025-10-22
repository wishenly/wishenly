import { HeroSection } from "@/components/ui/hero-section-dark";
import { ProductGrid } from "@/components/ProductGrid";
import { CartDrawer } from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 right-0 z-50 p-4">
        <CartDrawer />
      </header>
      
      <HeroSection
        title="Start Your Dropshipping Journey"
        subtitle={{
          regular: "Build your store with ",
          gradient: "Wishenly",
        }}
        description="Launch your dropshipping business effortlessly. No inventory, no hassle—just quality products and seamless integration."
        ctaText="Explore Products"
        ctaHref="#products"
        bottomImage={undefined}
        gridOptions={{
          angle: 65,
          opacity: 0.3,
          cellSize: 50,
          lightLineColor: "#6b7280",
          darkLineColor: "#374151",
        }}
      />
      
      <section id="products" className="max-w-screen-xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of products perfect for your store
          </p>
        </div>
        
        <ProductGrid />
      </section>
    </div>
  );
};

export default Index;
