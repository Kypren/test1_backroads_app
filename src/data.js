import tour1 from "./images/iceskates.jpg";
import tour2 from "./images/roller.jpg";
import tour3 from "./images/ostrza.jpg";
import tour4 from "./images/wheels.jpg";

export const pageLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "#about", text: "O nas" },
  { id: 3, href: "#services", text: "Usługi" },
  { id: 4, href: "#tours", text: "Oferta " },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Sprzedaż łyżew, rolek oraz akcesoriów",
    text: "Sprzedajemy wysokiej jakości łyżwy oraz rolki, które można w pełni spersonalizować.",
  },
  {
    id: 2,
    icon: "fas fa-palette fa-fw",
    title: "pełna personalizacja",
    text: "Umożliwiamy klientowi dokonać pełnej personalizacji wybranych przez niego produktów.",
  },
  {
    id: 3,
    icon: "fas fa-screwdriver fa-fw",
    title: "Przegląd techniczny sprzętu",
    text: "Zapewniamy darmowy przegląd techniczny wykonywany przez profesjonalistę do czasu gwarancji produktu.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    title: "Łyżwy Swift",
    text: "W pełni profesjonalne łyżwy, które możesz spersonalizować do swoich potrzeb. Posiadają wbudowany mini-komputer odczytujący przebyty dystans oraz prędkość.",
    price: "2499zł",
    link: "/lyzwy"
  },
  {
    id: 2,
    img: tour2,
    title: "Rolki Swift",
    text: "W pełni profesjonalne rolki, które możesz spersonalizować do swoich potrzeb. Posiadają wbudowany mini-komputer odczytujący przebyty dystans oraz prędkość.",
    price: "2499zł",
    link: "/rolki"
  },
  {
    id: 3,
    img: tour3,
    title: "Ostrze SwiftSlicers",
    text: "Wykonane z hartowanego stali nierdzewnej, są trwałe i odporne na ścieranie. Specjalnie zaprojektowany kształt i ostre krawędzie gwarantują płynne ślizgi oraz doskonałą stabilność podczas jazdy. Dostępne w różnych rozmiarach i wzorach szlifu, aby sprostać różnym preferencjom i stylom łyżwiarskim.",
    price: "499zł",
    link: "/ostrza"
  },
  {
    id: 4,
    img: tour4,
    title: "Kółka speedos",
    text: "Wykonane z wysokiej jakości materiałów, takich jak poliuretan czy silikon, zapewniają doskonałą przyczepność i trwałość na różnych powierzchniach. Dostępne w różnych rozmiarach i twardościach, kółka mogą być dostosowane do indywidualnych preferencji użytkownika oraz warunków jazdy.",
    price: "199zł",
    link: "/kolka"
  },
];
