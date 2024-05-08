import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Pages from "./components/Pages";
import CartContextProvider from "./context/cart-context";

function App() {  
  return (
    <CartContextProvider>
      <Navbar />
      <Pages />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
