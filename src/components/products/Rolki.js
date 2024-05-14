import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { tours } from "../../data"
import rolki1 from "../../images/rolki1.png"
import rolki2 from "../../images/rolki2.jpg"
import rolki3 from "../../images/rolki3.jpg"
import rolki4 from "../../images/rolki4.jpg"

export default function Rolki() {
  const cartContext = useContext(CartContext)
  const CENA = tours.find((tour) => tour.link === "/rolki")["price"].slice(0, -2);

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("id", Math.floor(Math.random() * 100))
    data.append("cena", CENA)
    data.append("name", "Rolki")
    data.append("quantity", 1)
    const product = Object.fromEntries([...data.entries()]);
    cartContext.addToCart(product)
  }

  
  return (
    <main className="pt-32 pb-16 px-2 max-w-3xl mx-auto">
      <div className="flex-col-reverse md:flex-row flex gap-8">
        <div className="space-y-4">
          <img 
            src={rolki1}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={rolki2}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={rolki3}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={rolki4}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />
        </div>

        <div className="h-fit sticky top-32">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <h2 className="mb-1">Rolki Swift</h2>
              <p className="font-semibold text-xl">Cena - {CENA}zł</p>
            </div>
            <div>
              <label htmlFor="kolor" className="block text-gray-800 font-semibold text-sm"
                >Kolor</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="kolor"
                  id="kolor"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
              <label className="pt-1 block text-gray-500 text-sm">Wybierz dowolny kolor</label>
            </div>

            <div>
              <label htmlFor="height" className="block text-gray-800 font-semibold text-sm"
                >Długość stopy</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="height"
                  id="height"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
              <label className="pt-1 block text-gray-500 text-sm">W centymetrach</label>
            </div>

            
            <div>
              <label htmlFor="width" className="block text-gray-800 font-semibold text-sm"
                >Szerokość stopy</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="width"
                  id="width"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
              <label className="pt-1 block text-gray-500 text-sm">W centymetrach</label>
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
              <input type="checkbox" id="haft" name="haft" />
              <label htmlFor="haft" className="ml-1">Czy chcesz mieć własny haft</label>
            </div>

            <button className="cursor-pointer px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              Zamów
            </button>
          </form>
        </div>
        </div>
    </main>
  )
}