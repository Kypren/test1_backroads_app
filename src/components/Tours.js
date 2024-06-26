import Title from "./Title";
import { tours } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          <Title title="Nasze" subTitle="produkty"></Title>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, title, img, price, link } = tour;
          return (
            <a href={link} key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                
                <div className="tour-footer">
                <p>{price}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
