import kmpa from "../assets/kmpa.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="mx-auto max-w-[1400px] px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <div className="pr-2">
            <img width={58} src={kmpa} />
          </div>
          <div>
            <h1 className="font-archivo text-2xl">
              KELUARGA MAHASISWA PECINTA ALAM
            </h1>
            <h2 className="font-roboto text-xl font-light">
              UNIVERSITAS TELKOM
            </h2>
          </div>
        </div>

        {/* Nav items */}
        <div className="flex items-center font-roboto text-xl font-semibold">
          <Link
            to="home"
            className="mx-3"
            activeClass="border-black border-2 px-3 py-1 rounded-full"
            spy={true}
            smooth={true}
          >
            Home
          </Link>
          <Link
            to="profile"
            className="mx-3"
            activeClass="border-black border-2 px-3 py-1 rounded-full"
            spy={true}
            smooth={true}
          >
            Profile
          </Link>
          <Link
            to="video"
            className="mx-3"
            activeClass="border-black border-2 px-3 py-1 rounded-full"
            spy={true}
            smooth={true}
          >
            Videos
          </Link>
          <Link
            to="photos"
            className="mx-3"
            activeClass="border-black border-2 px-3 py-1 rounded-full"
            spy={true}
            smooth={true}
          >
            Photos
          </Link>
          <Link
            to="contact"
            className="mx-3"
            activeClass="border-black border-2 px-3 py-1 rounded-full"
            spy={true}
            smooth={true}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
