import logo from "../images/logo2.jpeg";
import { pageLinks, socialLinks } from "../data";
import Koszyk from "./Koszyk";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 inset-x-0 bg-white justify-around py-4 z-50 items-center">
      <img src={logo} className="nav-logo hidden md:block" alt="backroads" />

      <ul className="flex gap-4" id="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                className="nav-link md:text-xl hover:text-[#2cb3d3] transition-all duration-500 capitalize"
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <Koszyk />

      <ul className="">
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
