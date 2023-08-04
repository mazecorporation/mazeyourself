import React from "react";
import Footer from "../components/Footer";
import Input from "../components/input";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="sm:pt-10  pt-6 sm:px-24 px-4 bg-[#2C2C2C]  h-full">
            {/* Navbar */}
            <Navbar theme={"dark"} />

            {/* About */}

            <div className="mt-10">
                <div className="sm:text-6xl text-lg text-white font-spaceGrotesk font-bold ">
                    About Us🗽
                </div>

                <div className="flex sm:flex-row flex-col sm:items-start justify-between mt-8">
                    <p className="w-full  text-base text-white">
                        Welcome to Maze, here to change the way you discover and enjoy the
                        buzzing nightlife scene! We've curated a treasure trove of the
                        hottest clubs and bars, just for you. Say goodbye to FOMO and hello
                        to unforgettable nights filled with fun and laughter. Our
                        user-friendly interface and personalized recommendations ensure that
                        every adventure is tailored to your unique tastes. Let's embark on
                        this thrilling journey together, one unforgettable night at a time.
                        Get ready to experience the nightlife like never before!
                    </p>
                </div>

                <div className="mt-16 flex flex-col items-center">
                    <div className="text-center font-spaceGrotesk sm:text-3xl  text-2xl font-bold text-white">
                        Where the City Comes Alive: Find Your Perfect
                        <br /> Clubbing Destination in NYC! 🌆
                    </div>
                    <div className="border-[1px] rounded-lg border-[#FFFFFF] sm:text-xl  text-base text-center p-2 mt-8 text-white">
                        Contact
                    </div>
                </div>
            </div>

            {/*footer*/}

            <Footer theme="dark" />
        </div>
    );
};

export default About;
