// import Link from "next/link";
import { Link } from "react-scroll";
export default function NavLink({ href, title, scrollToRef }) {
  return (
    <Link
      href={href}
      className="block  pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white mt-2"
      // onClick={() => scrollToRef(href)}
      activeClass="active"
      to={title}
      spy={true}
      smooth={true}
      offset={-70} // Adjust the offset if needed (to account for header)
      duration={500}
    >
      {title}
    </Link>
  );
}
