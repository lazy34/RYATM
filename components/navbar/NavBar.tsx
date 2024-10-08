import Link from "next/link";
import "./nav-style.scss";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../../public/ryit.png";

const NavBar = () => {
  return (
    <header className="nav-header">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="RYIT" loading="lazy"></Image>
        </Link>
      </div>
      <nav className="hidden md:flex ">
        <ul>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          |
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          |
          <li>
            <Link href="/course">Courses</Link>
          </li>
          |
          <li>
            <Link href="/career">Career</Link>
          </li>
          |
          <li>
            <Link href="/event">Events</Link>
          </li>
        </ul>
      </nav>
      <div className="cta_btns hidden md:block">
        <button>
          <Link href="/contacts">Connect Us</Link>
        </button>
      </div>
      <MobileNav />
    </header>
  );
};

export default NavBar;
