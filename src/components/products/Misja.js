import Title from "../Title";
import aboutImg from "../../images/misja3.jpg";
import aboutImg2 from "../../images/wizja3.jpg";
const divStyle = {
  paddingBottom: '0.5rem',
};
const Misja = () => {

  return (
    <section className="section" id="about">
      <div style={divStyle}></div>
      <Title title="Nasza" subTitle="Misja"></Title>

      <div className="section-center about-center">
      <div className="about-img" >
          <img src={aboutImg}  className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info" >
        <h3>Poznaj nasz cel</h3>
          <p>
          Zapewniamy klientom wysokiej jakości, profesjonalne produkty do jazdy na łyżwach i rolkach, które inspirują aktywny tryb życia i radość z ruchu na świeżym powietrzu. Umożliwiamy pełną personalizację asortymentu, przez co każdy produkt jest wyjątkowy. Dążymy do promowania zdrowego stylu życia poprzez dostarczanie sprzętu, który zachęca do aktywności fizycznej i wspiera rozwój umiejętności sportowych. 
          </p>


        </article>
      </div>
      <div style={divStyle}></div>
      <Title title="Nasza" subTitle="Wizja"></Title>

      <div className="section-center about-center">

<article className="about-info">
  <h3>Poznaj nasze spojrzenie</h3>
  <p>
  Naszą wizją jest być liderem branży w dostarczaniu najwyższej jakości łyżew i rolek, które spełniają oczekiwania klientów pod względem wydajności, komfortu i trwałości. Chcemy stać się znaczącym promotorem sportów na lodzie i rolkach, inspirując ludzi do odkrywania pasji i osiągania swojego pełnego potencjału poprzez aktywność fizyczną. 
  </p>
 
</article>
<div className="about-img">
          <img src={aboutImg2} className="about-photo" alt="awesome beach" />
        </div>
</div>
    </section>
  );
};
export default Misja;