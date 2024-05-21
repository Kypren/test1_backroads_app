import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Pages from "./components/Pages";
import CartContextProvider from "./context/cart-context";
import { Toaster } from "sonner";

function App() {  
  return (
    <CartContextProvider>
      <Toaster richColors />
      <Navbar />
      <Pages />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
