import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "@/context/CartContext";

const Layout = ({ children }) => {
  const { totalItems } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <Header totalItems={totalItems} />
      <main className="flex-grow m-0 p-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
