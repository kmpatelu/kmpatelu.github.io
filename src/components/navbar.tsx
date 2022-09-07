import kmpa from "../assets/kmpa.png";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [navbarShown, showNavbar] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-white px-4 py-2">
        <div className="mx-auto hidden w-full max-w-[1400px] items-center justify-between md:flex">
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
            >
              Home
            </Link>
            <Link
              to="profile"
              className="mx-3"
              activeClass="border-black border-2 px-3 py-1 rounded-full"
              spy={true}
            >
              Profile
            </Link>
            <Link
              to="video"
              className="mx-3"
              activeClass="border-black border-2 px-3 py-1 rounded-full"
              spy={true}
            >
              Videos
            </Link>
            <Link
              to="photos"
              className="mx-3"
              activeClass="border-black border-2 px-3 py-1 rounded-full"
              spy={true}
            >
              Photos
            </Link>
            <Link
              to="contact"
              className="mx-3"
              activeClass="border-black border-2 px-3 py-1 rounded-full"
              spy={true}
            >
              Contact
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhnHfytCoo-kYX_B-k2p0orrv7SAeJ4tNzuHKFfQkx6txK_A/viewform"
              className="rounded-full border-2 bg-red-700 px-3 py-1 font-semibold text-white"
            >
              Ayo daftar!!!
            </a>
          </div>
        </div>
      </nav>
      {/* Mobile */}

      <nav className="font-karla fixed top-0 z-20 w-full bg-white p-3 lg:hidden">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <div className="flex items-center">
            <div className="pr-2">
              <img width={52} src={kmpa} />
            </div>
            <div>
              <h1 className="font-archivo text-sm leading-tight">
                KELUARGA MAHASISWA <br /> PECINTA ALAM
              </h1>
              <h2 className="font-roboto text-xs font-light">
                UNIVERSITAS TELKOM
              </h2>
            </div>
          </div>

          <div>
            <button onClick={() => showNavbar(true)}>
              <img
                src="https://img.icons8.com/material-rounded/344/menu-2.png"
                width={20}
              />
            </button>
          </div>
        </div>

        {/* Hidden part */}
        <div
          className={`fixed left-0 top-0 h-screen w-full bg-white ${
            navbarShown ? "" : "hidden"
          } z-20`}
        >
          <div
            className={` mx-auto flex h-[63px] w-full max-w-[1200px] items-center justify-between p-3`}
          >
            <div>
              <img src="/insure-landing-page/logo.svg" />
            </div>

            <div>
              <button onClick={() => showNavbar(false)}>X</button>
            </div>
          </div>

          <div
            className={`fixed left-0 top-0 h-screen w-full bg-white ${
              navbarShown ? "" : "hidden"
            } z-20`}
          >
            <div
              className={` mx-auto flex h-[63px] w-full max-w-[1200px] items-center justify-between p-3`}
            >
              <div>
                <img width={52} src={kmpa} />
              </div>

              <div>
                <button onClick={() => showNavbar(false)}>X</button>
              </div>
            </div>

            <div
              className={`bg-neutral-very-dark-violet h-full text-2xl font-bold text-white`}
            >
              <div className=" relative flex h-screen flex-col items-center text-black">
                <Link
                  to="profile"
                  className="mx-3"
                  activeClass="border-black border-2 px-3 py-1 rounded-full"
                  spy={true}
                >
                  Profile
                </Link>
                <Link
                  to="video"
                  className="mx-3"
                  activeClass="border-black border-2 px-3 py-1 rounded-full"
                  spy={true}
                >
                  Videos
                </Link>
                <Link
                  to="contact"
                  className="mx-3"
                  activeClass="border-black border-2 px-3 py-1 rounded-full"
                  spy={true}
                >
                  Contact
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdhnHfytCoo-kYX_B-k2p0orrv7SAeJ4tNzuHKFfQkx6txK_A/viewform"
                  className="absolute bottom-20 rounded-full border-2 bg-red-700 px-4 py-1 font-semibold text-white"
                >
                  Ayo daftar!!!
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
