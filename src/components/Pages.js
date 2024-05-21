import About from "./About";
import Hero from "./Hero"
import Services from "./Services"
import Tours from "./Tours"
import Lyzwy from "./products/Lyzwy";
import Rolki from "./products/Rolki";
import Ostrza from "./products/Ostrza";
import Kolka from "./products/Kolka";
import Sznurowki from "./products/Sznurowki";
import Pokrowiec from "./products/Pokrowiec";
import Misja from "./products/Misja";
import Podsumowanie from "./Podsumowanie";


export default function Pages() {
  const location = window.location.pathname;
  
  switch(location){
    case "/":
      return (<>
        <Hero />
        <About />
        <Services />
        <Tours />
      </>)

    case "/lyzwy":
        return <Lyzwy />
    
    case "/rolki":
        return <Rolki />

    case "/ostrza":
      return <Ostrza />

    case "/kolka":
      return <Kolka />
    
    case "/sznurowki":
      return <Sznurowki />

    case "/pokrowiec":
      return <Pokrowiec />

    case "/misja":
      return <Misja />

    case "/zamow":
      return <Podsumowanie />
      
    default:
      return null
  }
}