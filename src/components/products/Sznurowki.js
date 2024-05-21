import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { tours } from "../../data";
import { colors } from "../../data";
import sznurowki1 from "../../images/sznurowki1.jpg"
import sznurowki2 from "../../images/sznurowki2.jpg"
import sznurowki3 from "../../images/sznurowki3.jpg"
import sznurowki4 from "../../images/sznurowki4.jpg"

export default function Sznurowki() {
  const cartContext = useContext(CartContext)
  const CENA = tours.find((tour) => tour.link === "/sznurowki")["price"].slice(0, -2);


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("id", Math.floor(Math.random() * 100))
    data.append("cena", CENA)
    data.append("name", "Sznurowki")
    const product = Object.fromEntries([...data.entries()]);
    cartContext.addToCart(product)
  }

  
  return (
    <main className="pt-32 pb-16 px-2 max-w-3xl mx-auto">
      <div className="flex-col-reverse md:flex-row flex gap-8">
        <div className="space-y-4">
          <img 
            src={sznurowki1}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={sznurowki2}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={sznurowki3}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />

          <img 
            src={sznurowki4}
            height="400"
            width="400"
            alt="Łyżwy jakies"
            className="rounded-md object-cover"
          />
        </div>

        <div className="h-fit sticky top-32">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <h2 className="mb-1">Sznurówki Swiftskate</h2>
              <p className="font-semibold text-xl">Cena - {CENA}zł</p>
            </div>
            <article className="about-info" >
        <h3>Opis Produktu</h3>
          <p>
          Wykonane z wysokiej jakości, odpornego na przetarcia materiału, gwarantują długotrwałą wytrzymałość nawet przy intensywnym użytkowaniu. Specjalnie zaprojektowane końcówki ułatwiają przewlekanie przez oczka. Sznurówki są dostępne w różnych kolorach, dzięki czemu można je dopasować do swojego stylu.
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
                <label className="pt-1 block text-gray-500 text-sm">1 sztuka zawiera parę sznurówek</label>
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