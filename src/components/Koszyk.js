import { useContext, useState } from "react"
import { CartContext } from "../context/cart-context"

export default function Koszyk() {
  const { cart, removeItem, priceSum } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)} className="bg-primary px-4 py-2 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
      <div className="absolute -bottom-2 -right-2 font-bold border-white border rounded-full bg-accent py-1 px-2 text-xs">
        {cart.length}
      </div>

      {isOpen && (
        <div className="absolute -left-1/2 p-2 rounded-md bg-primary w-max">
          {cart.length < 1 ? (
          <div className="flex justify-between">
            <h3 className="text-xl mr-4">Koszyk pusty</h3>
            <button onClick={() => setIsOpen(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          )
        : (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="mb-0">Koszyk</h3>
              <button onClick={() => setIsOpen(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="space-y-2 py-4">
              {cart.map((item) => (
                <div className="border-l border-blue-500 px-2 py-1 flex gap-4 justify-between hover:bg-accent rounded-r">
                  <div>
                    <h5>{item.name}
                      {item.height && (
                      <span className="text-sm ml-2">- dług: {item.height}</span>
                      )}
                      {item.width && (
                      <span className="text-sm ml-2">- szer: {item.width}</span>
                      )}
                      {item.quantity && (
                      <span className="text-sm ml-2">- ilość: {item.quantity}</span>
                      )}
                    </h5>
                    <div className="text-sm flex gap-2 opacity-80">
                      <span>{item.cena}zł</span>
                      <span>{item.color}</span>
                      <span>{item.type}</span>
                    </div>
                  </div>

                  <button onClick={() => removeItem(item.id)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </div>
              ))}  
            </div>
          </div>
        )}
        {cart.length > 0 && (
          <div>
            <h3>Suma: {priceSum}zł</h3>
            <a href="/zamow" className="px-3 py-1 rounded-lg bg-accent hover:bg-secondary block font-semibold text-center">Przejdź do płatności</a>
          </div>
        )}
        </div>    
      )}
    </div>
    
  )
}