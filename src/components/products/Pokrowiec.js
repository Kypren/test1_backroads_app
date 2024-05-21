import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { tours } from "../../data";
import { colors } from "../../data";
import pokrowiec1 from "../../images/pokrowiec1.jpg"
import pokrowiec2 from "../../images/pokrowiec2.jpg"
import pokrowiec3 from "../../images/pokrowiec3.jpg"
import pokrowiec4 from "../../images/pokrowiec4.jpg"

export default function Pokrowiec() {
  const cartContext = useContext(CartContext)
  const CENA = tours.find((tour) => tour.link === "/pokrowiec")["price"].slice(0, -2);


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("id", Math.floor(Math.random() * 100))
    data.append("cena", CENA)
    data.append("name", "Pokrowiec")
    const product = Object.fromEntries([...data.entries()]);
    cartContext.addToCart(product)
  }

  
  return (
    <main className="pt-32 pb-16 px-2 max-w-3xl mx-auto">
      <div className="flex-col-reverse md:flex-row flex gap-8">
        <div className="space-y-4">
          <img 
            src={pokrowiec1}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={pokrowiec2}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={pokrowiec3}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={pokrowiec4}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />
        </div>

        <div className="h-fit md:sticky top-32">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <h2 className="mb-1">Pokrowiec Swiftskate</h2>
              <p className="font-semibold text-xl">Cena - {CENA}zł</p>
            </div>
            <article className="about-info" >
        <h3>Opis Produktu</h3>
          <p>
          Wykonany z wysokiej jakości materiałów, zapewnia maksymalną ochronę przed uszkodzeniami mechanicznymi, wilgocią i zabrudzeniami. Ergonomiczny design z regulowanym paskiem na ramię oraz uchwytami ręcznymi gwarantuje wygodę noszenia i transportu. 
          </p>


        </article>
            <div>
                <div>
              <label htmlFor="quantity" className="block text-gray-800 font-semibold text-sm"
                >Ilość</label>
                <div className="mt-2">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
                </div>
                
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
              <label htmlFor="kolor" className="block text-gray-800 font-semibold text-sm"
                >Kolor</label>
              <div className="mt-2">
                <select id="color" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800">
                {colors.map((color) => {
          const { id, text } = color;
          return (
            <option key={id} className="tour-card">
                <p>{text}</p>
    
            </option>
          );
        })}
                </select>
              </div>
              <label className="pt-1 block text-gray-500 text-sm">Wybierz dowolny kolor</label>
            </div>
              
            </div>
            <div>
              <label htmlFor="informacje" className="block text-gray-800 font-semibold text-sm"
                >Dodatkowe Informacje</label>
              <div className="mt-2">
                <textarea
                  name="informacje"
                  id="informacje"
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