import Navbar from "../components/navbar";
import { Carousel } from "flowbite-react";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import profilebg from "../assets/bg-profile.png";
import kmpa from "../assets/kmpa.png";
import kmpal from "../assets/5_KMPA.png";
import astacala from "../assets/astacala.png";
import perimatrik from "../assets/perimatrik.png";
import xwasi from "../assets/xwasi.png";
import gemarawana from "../assets/gemarawana.png";

function Default() {
  const mapala = [
    {
      logo: astacala,
      bg: "#DA251C",
      name: "astacala",
      link: "https://www.astacala.org/",
    },
    {
      logo: perimatrik,
      bg: "#E67725",
      name: "perimatrik",
      link: "https://www.instagram.com/perimatrik/",
    },
    {
      logo: gemarawana,
      bg: "#DC0413",
      name: "gema rawana",
      link: "https://www.instagram.com/gemarawana/",
    },
  ];

  const pics = ["pic1.JPG", "pic2.JPG", "pic3.JPG"];

  return (
    <>
      <Navbar />
      <section id="home" className="bg-[#e8e8e8] pt-2 mt-16 hidden md:block">
        <div className="max-w-[1400px] h-screen mx-auto">
          <Carousel>
            <div>
              <img className="mx-auto h-full" src={slide1} alt="..." />
            </div>
            <div>
              <img className="mx-auto h-full" src={slide2} alt="..." />
            </div>
          </Carousel>
        </div>
      </section>
      <section
        id="profile"
        className="mx-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profilebg})` }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="py-4">
            <h1 className="text-center font-roboto text-2xl font-semibold">
              Profile
            </h1>
            <div className="mx-auto w-12 border-b-4 border-black" />
          </div>

          <div className="my-12 grid grid-cols-1 gap-4 px-4 place-items-center md:grid-cols-2">
            <div>
              <img src={kmpa} width={400} />
            </div>
            <div>
              <h1 className="font-archivo md:text-4xl text-xl">PROFIL KMPA</h1>
              <p className="text-justify font-roboto md:text-xl md:leading-10">
                Unit Kegiatan Mahasiswa ini bernama Keluarga Mahasiswa Pencinta
                Alam Telkom University, yang selanjutnya disingkatmenjadi KMPA
                Tel-U. <strong>KMPA Tel-U</strong> berkedudukan di Telkom
                University, Bandung, JawaBarat. Berdiri pada tanggal 27 April
                2014. KMPA Tel-U didirikan sebagai wadah berhimpun dan bekerja
                samanya empat UPT pencinta atau penggiat alam Telkom University
                yaitu: ASTACALA, PERIMATRIK, GEMA RAWANA, dan X-WASI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-4">
            {mapala.map((current, index) => {
              return (
                <a
                  href={current.link}
                  className="flex h-[310px] w-[230px] flex-col overflow-hidden rounded-2xl border bg-white shadow-xl"
                  key={index}
                >
                  <div
                    className="flex h-[230px] items-center justify-center"
                    style={{ backgroundColor: `${current.bg}` }}
                  >
                    <img width={200} className="" src={current.logo} />
                  </div>
                  <div className="flex flex-grow flex-col items-center justify-center">
                    <p className="font-archivo text-2xl uppercase">
                      {current.name}
                    </p>
                    <button className="rounded-full bg-black px-3 py-1 text-xs text-white">
                      Read more
                    </button>
                  </div>
                </a>
              );
            })}
            <a
              href="https://www.instagram.com/xwasi/"
              className="flex h-[310px] w-[230px] flex-col overflow-hidden rounded-2xl border bg-white shadow-xl"
            >
              <div className="flex h-[230px] items-center justify-center bg-[#952823]">
                <img width={100} className="" src={xwasi} />
              </div>
              <div className="flex flex-grow flex-col items-center justify-center">
                <p className="font-archivo text-2xl uppercase">X-Wasi</p>
                <button className="rounded-full bg-black px-3 py-1 text-xs text-white">
                  Read more
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="video">
        <div className="mx-auto max-w-[1400px]">
          <div className="py-4">
            <h1 className="text-center font-roboto text-2xl font-semibold">
              Video
            </h1>
            <div className="mx-auto w-12 border-b-4 border-black" />
          </div>

          <div className="my-12 grid grid-cols-1 place-items-center md:grid-cols-2">
            <div className="ml-2">
              <h1 className="font-roboto text-4xl leading-10">
                Keluarga Mahasiswa Pecinta Alam
                <br /> Telkom University <br />
                <strong className="bg-black px-1 font-semibold text-white">
                  UKM FAIR 2022
                </strong>
              </h1>
              <p className="mt-8 text-center font-sedgwick text-4xl">
                Ayo tonton kegiatan kami!
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/bwASzL3tmps"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full md:w-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section id="photos" className="relative h-full hidden md:block">
        <div className="mx-auto h-full max-h-[900px] max-w-[1440px]">
          <div className="absolute top-0 right-1/2 z-10 -translate-x-1/2 translate-y-1/2 py-4">
            <h1 className="text-center font-roboto text-2xl font-semibold text-white">
              Photos
            </h1>
            <div className="mx-auto w-12 border-b-4 border-white" />
          </div>
          <Carousel>
            {pics.map((pic, index) => {
              return (
                <div key={index}>
                  <img className="w-full" src={`./galeri/${pic}`} alt="..." />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
      <section id="contact" className="mt-2 bg-[#161616]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 py-8 font-roboto text-white md:grid-cols-6">
          <div>
            <h1 className="text-2xl font-semibold">KMPA TEL-U</h1>
            <a href="https://www.youtube.com/channel/UCzPC-2BpHzcaoOSYUTDXLYA">
              Youtube
            </a>
            <br />
            <a href="https://wa.me/6289657889819">Whats App</a>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Profile</h1>
            <a
              href="https://www.youtube.com/channel/UCzPC-2BpHzcaoOSYUTDXLYA"
              className="font-bold"
            >
              KMPA TEL-U
            </a>
            <br />
            <a href="https://www.astacala.org/" className="hover:text-red-600">
              ASTACALA
            </a>
            <br />
            <a href="https://www.instagram.com/perimatrik/">PERIMATRIK</a>
            <br />
            <a href="https://www.instagram.com/gemarawana/">GEMA RAWANA</a>
            <br />
            <a href="https://www.instagram.com/xwasi/">X-WASI</a>
            <br />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Contact</h1>
            <a className="text-sm">
              Student Hall Telkom University, Jl.Telekomunikasi No.1, Terusan
              Buahbatu, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa
              Barat
            </a>
            <br />
            <a href="mailto:kmpa.untel@gmail.com">kmpa.untel@gmail.com</a>
            <br />
          </div>
          <div className="place-self-center">
            <div>
              <img src={kmpal} width={400} />
            </div>
          </div>
        </div>
      </section>
      <p className="py-10 text-center">
        © Copyright KMPA 2022, All Rights Reserved
      </p>
      {/* Some footer */}
    </>
  );
}

export default Default;
