import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { tours } from "../../data";
import kolka1 from "../../images/kolko1.jpg"
import kolka2 from "../../images/kolko2.jpg"
import kolka3 from "../../images/kolko3.jpg"
import kolka4 from "../../images/kolka4.jpg"

export default function Kolka() {
  const cartContext = useContext(CartContext)
  const CENA = tours.find((tour) => tour.link === "/kolka")["price"].slice(0, -2);


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("id", Math.floor(Math.random() * 100))
    data.append("cena", CENA)
    data.append("name", "Kolka (komplet)")
    const product = Object.fromEntries([...data.entries()]);
    cartContext.addToCart(product)
  }

  
  return (
    <main className="pt-32 pb-16 px-2 max-w-3xl mx-auto">
      <div className="flex-col-reverse md:flex-row flex gap-8">
        <div className="space-y-4">
          <img 
            src={kolka1}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={kolka2}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={kolka3}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={kolka4}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />
        </div>

        <div className="h-fit sticky top-32">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <h2 className="mb-1">Kółka Speedos</h2>
              <p className="font-semibold text-xl">Cena - {CENA}zł</p>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-gray-800 font-semibold text-sm"
                >Ilość kompletów</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
              <label className="pt-1 block text-gray-500 text-sm">Każdy komplet zawiera 4 kółka</label>
            </div>

            <fieldset>
              <legend className="font-semibold mb-2">Wybierz typ</legend>

              <div className="radio-inputs">
                <label className="radio">
                  <input type="radio" name="type" value="hokejowe" defaultChecked />
                  <span className="name">Hokejowe</span>
                </label>
                <label className="radio">
                  <input type="radio" name="type" value="figurowe" />
                  <span className="name">Figurowe</span>
                </label>
              </div>
            </fieldset>
            <div>
              <label htmlFor="quantity" className="block text-gray-800 font-semibold text-sm"
                >Kod rabatowy</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <button className="cursor-pointer px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              Dodaj do koszyka
            </button>
          </form>
        </div>
        </div>
    </main>
  )
}