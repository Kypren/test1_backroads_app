import { pageLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      
      <a href="https://www.instagram.com/swiftskate_sklep" className="footer-link">
        Skontaktuj się z nami
      </a>

      <p className="copyright">
        copyright &copy; SWIFTSKATE company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>

    </footer>
  );
};
export default Footer;
