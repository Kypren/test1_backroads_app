import aboutImg from "../images/depositphotos_112988852-stock-photo-a-couple-roller-skating-at.jpg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="O" subTitle="nas"></Title>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Poznaj różnicę</h3>
          <p>
            Aktywnie słuchamy opinii klientów i reagujemy na ich potrzeby, oferując produkty w różnych stylach oraz rozmiarach.
          </p>
          <p>
            Stawiamy na ciągłe badania i rozwój, aby wprowadzać innowacyjne technologie i projekty, które poprawiają wydajność, komfort i bezpieczeństwo naszych łyżew i rolek.
          </p>
          <a href="#services" className="btn">
            Dowiedz się więcej
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
