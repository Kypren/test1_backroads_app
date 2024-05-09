import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export default function Podsumowanie() {
  const { cart, priceSum, removeItem } = useContext(CartContext);
  return (
    <main className="pt-32 pb-16 px-2 max-w-3xl mx-auto">
      <h2 className="mb-8">Podsumowanie zamówienia</h2>
      <form className="grid gap-4 grid-cols-2">
        <div>
          <label
            htmlFor="Imie"
            className="block text-gray-800 font-semibold text-sm"
          >
            Imie
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Imie"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Nazwisko"
            className="block text-gray-800 font-semibold text-sm"
          >
            Nazwisko
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Nazwisko"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Adres"
            className="block text-gray-800 font-semibold text-sm"
          >
            Adres
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Adres"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Miasto"
            className="block text-gray-800 font-semibold text-sm"
          >
            Miasto
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Miasto"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Kod Pocztowy"
            className="block text-gray-800 font-semibold text-sm"
          >
            Kod Pocztowy
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Kod Pocztowy"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Numer Telefonu"
            className="block text-gray-800 font-semibold text-sm"
          >
            Numer Telefonu
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="Numer Telefonu"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Email"
            className="block text-gray-800 font-semibold text-sm"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="Email"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Rabat"
            className="block text-gray-800 font-semibold text-sm"
          >
            kod rabatowy
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Rabat"
              id="kolor"
              className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
        <fieldset className="col-span-2">
          <legend className="font-semibold mb-2">
            Wybierz metodę płatności
          </legend>

          <div className="radio-inputs">
            <label className="radio">
              <input type="radio" name="type" value="hokejowe" defaultChecked />
              <span className="name">Przelew</span>
            </label>
            <label className="radio">
              <input type="radio" name="type" value="figurowe" />
              <span className="name">Karta</span>
            </label>
            <label className="radio">
              <input type="radio" name="type" value="figurowe" />
              <span className="name">Przy odbiorze</span>
            </label>
          </div>
        </fieldset>

        <div className="col-span-2">
          <div className="h-0.5 bg-primary mb-4"></div>

          <h3>Zamówione produkty</h3>

          {cart.map((item) => (
            <div className="border-l border-blue-500 px-2 py-1 flex gap-4 justify-between hover:bg-accent rounded-r">
              <div>
                <h5>
                  {item.name}
                  {item.height && (
                    <span className="text-sm ml-2">- dług: {item.height}</span>
                  )}
                  {item.width && (
                    <span className="text-sm ml-2">- szer: {item.width}</span>
                  )}
                  {item.quantity && (
                    <span className="text-sm ml-2">
                      - ilość: {item.quantity}
                    </span>
                  )}
                </h5>
                <div className="text-sm flex gap-2 opacity-80">
                  <span>{item.cena}zł</span>
                  <span>{item.color}</span>
                  <span>{item.type}</span>
                </div>
              </div>

              <button onClick={() => removeItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <h2 className="text-3xl">
          Do zapłaty: <span className="font-bold">{priceSum}zł</span>
        </h2>
        <div className="h-0.5 bg-primary col-span-2"></div>

        <button className="cursor-pointer px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
          Zamów
        </button>
      </form>
    </main>
  );
}
