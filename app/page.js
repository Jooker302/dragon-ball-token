"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Loader from "@/components/Loader";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isAVisible, setIsAVisible] = useState(false);
  const [isBVisible, setIsBVisible] = useState(false);
  const [isTVisible, setIsTVisible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const aboutSection = document.getElementById("about");
    const bannerSection = document.getElementById("banner");
    const tokenomicsSection = document.getElementById("tokenomics");
    const teamSection = document.getElementById("team");

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        setIsAVisible(true);
      }
    }

    if (bannerSection) {
      const rect = bannerSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        setIsBVisible(true);
      }
    }

    if (tokenomicsSection) {
      const rect = tokenomicsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        setIsTVisible(true);
      }
    }

    if (teamSection) {
      const rect = teamSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        setIsPVisible(true);
      }
    }

    

    
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);


if (isLoading) {
  return <Loader />;
}

  return (
    <div className="bg-gray-100">
      <div id="header" className="relative bg-[#f0833a]">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <img src="main.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#about" className="text-white">
              About
            </a>
            <a href="#team" className="text-white">
              Team
            </a>
          </nav>

          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-[#f0833a] md:hidden transition-all duration-300`}
        >
          <div className="p-4 space-y-2">
            <a href="#" className="block text-white">
              Home
            </a>
            <a href="#about" className="block text-white">
              About
            </a>
            <a href="#team" className="block text-white">
              Team
            </a>
            <a href="https://t.me/dragonballschat" className="block text-white">
              Telegram
            </a>
          </div>
        </nav>
      </div>

      <section
        id="intro"
        className="flex flex-col items-center justify-center py-12 bg-gray-100"
      >
        <img
          src="main.jpeg"
          alt="Logo"
          className=" h-32 w-32 md:h-64 md:w-64 rounded-full"
        />
        <h2 className="mt-4 text-xl font-semibold md:text-2xl">Introducing</h2>
        <p className="mt-4 text-xl font-semibold text-center ">
          <span className={`font-bold text-[#f0833a] wave`}>
            Dragon Ball Token
          </span>
          : Unleashing Saiyans in the Crypto Realm.
        </p>
      </section>

      <section id="about" className={`${
          isAVisible ? "slide-in active" : "slide-in"
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-gray-100">
          <div className="py-12 md:py-20 border-t border-[#f0833a]">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 text-xl mb-4">
                About <span className="text-[#f0833a]">Dragon Ball</span>
              </h1>
              <p className="text-xl ">
                Embark on an extraordinary adventure with "Dragon Balls," a
                revolutionary crypto token that pays homage to the legendary
                cartoon series while bringing a unique blend of innovation and
                imagination to the blockchain realm. Our mission is to infuse
                the world of cryptocurrencies with the spirit of adventure and
                the thrill of wish fulfillment.
              </p>
            </div>

            <div className="grid gap-20">
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="/main.jpeg"
                    width={540}
                    height={405}
                    alt="Features 01"
                  />
                </div>

                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-xl text-[#f0833a]">
                      🐉 Unleash Your Inner Explorer
                    </h3>
                    <p className="text-xl  mb-4">
                      Just like the brave characters in the series search for
                      the mystical Dragon Balls, holders of our token will have
                      the opportunity to explore new horizons in the crypto
                      space. Every transaction is a step towards discovering
                      exciting possibilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="/main.jpeg"
                    width={540}
                    height={405}
                    alt="Features 02"
                  />
                </div>

                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-left"
                >
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <h3 className="h3 mb-3 text-xl text-[#f0833a]">
                      🔒 Security Beyond Shenron's Protection
                    </h3>
                    <p className="text-xl  mb-4">
                      {" "}
                      We understand the importance of security in the crypto
                      space. Our token is built upon a robust and secure
                      blockchain, fortified with state-of-the-art encryption and
                      decentralized governance to ensure the safety of your
                      holdings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="/main.jpeg"
                    width={540}
                    height={405}
                    alt="Features 03"
                  />
                </div>

                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-xl text-[#f0833a]">
                      🌟 Wish Upon a Blockchain
                    </h3>
                    <p className="text-xl  mb-4">
                      In the world of "Dragon Balls," making a wish is more than
                      a mere concept. Holders will have the chance to
                      participate in wish-granting events where selected wishes
                      will be fulfilled. Imagine your crypto dreams turning into
                      reality!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="banner"
        className={`py-10 md:pb-14 px-6 flex items-center bg-gray-100 border-t border-b border-[#f0833a] justify-center ${ isBVisible ? "slide-in active" : "slide-in" }`}
      >
        <img
          src="/cover.jpeg"
          alt="Pulsating Image"
          className="animated-image"
        />
      </div>

      <section id="tokenomics" className={`bg-gray-100 py-12 px-4 ${ isTVisible ? "slide-in active" : "slide-in" }`}>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tokenomics</h2>
          <ul className="list-none p-0 md:flex md:justify-center flex-wrap">
            <li className="mb-6 md:w-1/3">
              <div className="flex items-start">
                <span className="bg-[#f0833a] w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
                <div className="ml-2">
                  <p className="font-bold text-[#f0833a]">Total Symbol:</p>
                  <p>Dragon Balls symbol is $DB</p>
                </div>
              </div>
            </li>
            <li className="mb-6 md:w-1/3">
              <div className="flex items-start">
                <span className="bg-[#f0833a] w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
                <div className="ml-2">
                  <p className="font-bold text-[#f0833a]">Launch Date:</p>
                  <p>Dragon Balls is going to Launch on 24/08/2023</p>
                </div>
              </div>
            </li>
            <li className="mb-6 md:w-1/3">
              <div className="flex items-start">
                <span className="bg-[#f0833a] w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
                <div className="ml-2">
                  <p className="font-bold text-[#f0833a]">Launch Type:</p>
                  <p>Dragon Balls Launch type is Fairlaunch</p>
                </div>
              </div>
            </li>
            <li className="mb-6 md:w-1/3">
              <div className="flex items-start">
                <span className="bg-[#f0833a] w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
                <div className="ml-2">
                  <p className="font-bold text-[#f0833a]">Softcap:</p>
                  <p>Dragon Balls has 5 Softcap </p>
                </div>
              </div>
            </li>
            <li className="mb-6 md:w-1/3">
              <div className="flex items-start">
                <span className="bg-[#f0833a] w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
                <div className="ml-2">
                  <p className="font-bold text-[#f0833a]">Hard cap:</p>
                  <p>Dragon Balls has 10 Hard cap</p>
                </div>
              </div>
            </li>
            <li className="mb-6 md:w-1/3">
              <div className="flex items-start">
                <span className="bg-[#f0833a] w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
                <div className="ml-2">
                  <p className="font-bold text-[#f0833a]">Total supply:</p>
                  <p>Dragon Balls has a total supply of 7777777777</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div
        id="team"
        className={`flex flex-col justify-center md:p-10 bg-gray-100 ${ isPVisible ? "slide-in active" : "slide-in"}`}
      >
        <p className="text-3xl text-center ml-6 md:ml-0 font-bold ">Partner</p>
        <div class="container flex flex-wrap justify-around">
          <div class="team-profile">
            <a href="https://dx.app">
              <img src="dxsale.png" class="team-img" />
              <h3 className="text-[#f0833a]">DxSale</h3>
            </a>
          </div>

          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/OIP.1wTTp6-XPR-g6PS8D8ZAqAHaDt?pid=ImgDet&rs=1"
              class="team-img"
            />
            <h3 className="text-[#f0833a]">BNB Chain</h3>
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1"
              class="team-img"
            />
            <h3 className="text-[#f0833a]">Chain Link</h3>
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0"
              class="team-img"
            />
            <h3 className="text-[#f0833a]">1inch</h3>
          </div>
          <div class="team-profile">
            <img
              class="team-img"
              src="https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png"
            />
            <h3 className="text-[#f0833a]">ARB</h3>
          </div>
          <div class="team-profile">
            <img
              src="https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg"
              class="team-img"
            />
            <h3 className="text-[#f0833a]">Coinbase</h3>
          </div>
        </div>
      </div>

      <div className="md:p-4 p-2 bg-[#f0833a] items-center flex justify-between">
        <p className="text-white">Listed on Binance Smart Chain</p>
        <a className="m-2" href="https://t.me/dragonballschat"><FontAwesomeIcon icon={faTelegram} size="lg" className="text-white hover:text-blue-400" style={{  width: '24px', height: '24px' }} /></a>
      </div>
    </div>
  );
}
