import logo from "../images/logo2.jpeg";
import { pageLinks, socialLinks } from "../data";
import Koszyk from "./Koszyk";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 inset-x-0 bg-white justify-around py-4 z-50 items-center">
          <img src={logo} className="nav-logo hidden md:block" alt="backroads" />
          {/* <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button> */}

        <ul className="flex gap-4" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <Koszyk />

        <ul className="hidden md:block">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
    </nav>
  );
};
export default Navbar;
