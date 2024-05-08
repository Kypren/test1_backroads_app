import About from "./About";
import Hero from "./Hero"
import Services from "./Services"
import Tours from "./Tours"
import Lyzwy from "./products/Lyzwy";
import Rolki from "./products/Rolki";
import Ostrza from "./products/Ostrza";
import Kolka from "./products/Kolka";
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

    case "/zamow":
      return <Podsumowanie />
      
    default:
      return null
  }
}