import React from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../assets/images/icons/play.svg";
import Maskgroup from "../assets/images/mask-group.png";
import Hero from "../assets/images/hero.png";
import Footer from "../components/Footer";

const Home = () => {
  const history = useHistory();
  const faqs = [
    "What's the closest club to me?",
    "How far away is it?",
    "How do I get there?"
  ];
  const explore = [
    "Search and filter clubs based on select criteria",
    "Explore profile pages of clubs with essential information",
    "Embedded Google map for directions"
  ];

  return (
    <div>
      <div className="relative sm:pt-10  pt-6 sm:px-24 px-4 bg-hero-pattern bg-cover bg-center bg-no-repeat ">
        {/* Navbar */}
        <Navbar theme="dark" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50  pointer-events-none"></div>

        <div className="flex flex-col items-center justify-center relative">
          <span className="sm:text-4xl text-lg font-spaceGrotesk font-bold text-white text-center mt-16">
            From Dusk Till Dawn: Let Us
            <br /> Guide You to the Hottest
            <br /> Clubs in NYC! 🗽✨
          </span>
          <div className="flex flex-row items-center mt-8 mb-36">
            <button
              className="rounded-lg border-[1px] border-white bg-black text-white w-full py-3 px-8"
              onClick={() => history.push("/explore")}>
              Explore
            </button>
            <button
              className="rounded-lg border-[1px] border-white bg-black text-white w-full py-3 px-8 ml-4"
              onClick={() => history.push("/contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="sm:pt-10  pt-6 sm:px-24 px-4">
        {/* INFO*/}
        <div
          className="flex sm:flex-row flex-col items-start justify-between"
          data-aos="fade-right">
          <div className="sm:w-1/2 w-full flex flex-col items-start sm:pr-10 pr-0">
            <span className="font-spaceGrotesk font-bold text-2xl">
              Clubs Near You
            </span>
            <p className="text-base text-[#484848] mt-2 leading-7">
              With Maze, you can browse through all the clubs in the city and
              find one that suits your taste and preferences. From hip-hop to
              techno, we've got it all covered.
            </p>

            <span className="text-xl font-medium font-spaceGrotesk mt-2">
              Discover places near you
            </span>

            <div className="mt-2">
              {faqs.map((item, index) => {
                return (
                  <div className="flex flex-row items-start" key={index}>
                    <PlayIcon className="mr-2" />
                    <span className="text-base text-[#484848] leading-6">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:w-1/2 w-full sm:mt-0 mt-6">
            <img
              src={Maskgroup}
              className="h-60 w-full rounded-lg sm:pl-10 pl-0"
              alt="name"
            />
          </div>
        </div>

        <div
          className="flex sm:flex-row flex-col items-start justify-between mt-24"
          data-aos="fade-left">
          <div className="sm:w-1/2 w-full sm:mb-0 mb-6">
            <img
              src={Hero}
              className="h-60 w-full rounded-lg sm:pr-10 pr-0"
              alt="name"
            />
          </div>
          <div className="sm:w-1/2 w-full flex flex-col items-start sm:pl-10 pl-0">
            <span className="font-spaceGrotesk font-bold text-2xl ">
              Time-saving convenience
            </span>
            <p className="text-base text-[#484848] mt-2 leading-7">
              With Maze, you can save time and effort by accessing all the club
              information on one platform. No more searching dozens of websites
              or asking around.
            </p>

            <span className="text-xl font-medium font-spaceGrotesk mt-2">
              Explore our features on Clubfinder
            </span>

            <div className="mt-2">
              {explore.map((item, index) => {
                return (
                  <div className="flex flex-row items-start" key={index}>
                    <PlayIcon className="mr-2" />
                    <span className="text-base text-[#484848] leading-6">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 flex flex-col items-center">
          <div className="text-center font-spaceGrotesk sm:text-3xl  text-2xl font-bold">
            Where the City Comes Alive: Find Your Perfect
            <br /> Clubbing Destination in NYC! 🌆
          </div>
          <div
            className="border-[1px] rounded-lg border-black sm:text-xl  text-base text-center py-3 px-8 mt-8 cursor-pointer"
            onClick={() => {
              history.push("/contact");
            }}>
            Contact
          </div>
        </div>
      </div>
      <hr className="mt-10" />

      <div className="sm:pt-10  pt-6 sm:px-24 px-4">
        {/*Footer*/}

        <Footer />
      </div>
    </div>
  );
};

export default Home;
