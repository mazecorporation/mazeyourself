import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import request from "../api";

const Footer = ({ theme }: { theme?: string }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const company = ["home", "about", "explore"];

  const support = [
    {
      title: "Contact Us",
      route: "/contact"
    },
    {
      title: "corporationmaze@gmail.com",
      route: "mail"
    }
  ];


  const joinWaitlist = async () => {
    try {
      await request(
        "POST",
        "waitlist",
        {
          email
        },
        true,
        "Your email has been added to our mailing list"
      );
      setEmail("");
      window.scrollTo({
        top: 0,
        behavior: "smooth" // You can change this to "auto" for instant scrolling without smooth animation
      });
    } catch (error) {
      setEmail("");
      // Handle the error if needed
    }
  };

  return (
    <div
      className="flex sm:flex-row flex-col sm:justify-between items-start mt-10 pb-10"
      data-aos="fade-up">
      <span
        className={
          theme === "dark"
            ? "text-2xl font-bold sm:mb-0 mb-4 text-white"
            : "text-2xl font-bold sm:mb-0 mb-4"
        }>
        Maze
      </span>
      <div>
        <span
          className={
            theme === "dark"
              ? "font-spaceGrotesk font-bold text-lg sm:pt-0 pt-4 text-white"
              : "font-spaceGrotesk font-bold text-lg sm:pt-0 pt-4"
          }>
          Company
        </span>
        <div className="flex flex-col sm:mt-2 mt-0">
          {company.map((item, index) => {
            return (
              <span
                key={index}
                className={
                  theme === "dark"
                    ? "text-[#E3E3E3] sm:mt-2 mt-1 capitalize text-base "
                    : "text-[#484848] sm:mt-2 mt-1 capitalize text-base"
                }
                onClick={() => {
                  history.push(item === "home" ? "/" : `/${item}`);
                }}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="sm:mt-0 mt-4">
        <span
          className={
            theme === "dark"
              ? "font-spaceGrotesk font-bold text-lg text-white"
              : "font-spaceGrotesk font-bold text-lg"
          }>
          Support
        </span>
        <div className="flex flex-col sm:mt-2 mt-1">
          {support.map((item, index) => {
            return (
              <a
                key={index}
                className={
                  theme === "dark"
                    ? "text-[#E3E3E3] text-base  sm:mt-2 mt-1 "
                    : "text-[#484848] text-base  sm:mt-2 mt-1 "
                }
                href={
                  item.route === "mail" ? `mailto:${item.route}` : item.route
                }>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
      <div className="sm:mt-0 mt-4">
        <span
          className={
            theme === "dark"
              ? "font-spaceGrotesk font-bold text-lg text-white"
              : "font-spaceGrotesk font-bold text-lg"
          }>
          Join our Mailing list
        </span>
        <div className="flex flex-row sm:mt-2 mt-1 w-full">
          <input
            className="rounded-s-lg border-[1px] border-[#484848] text-base w-2/3 p-3 focus:outline-none"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <button
            className="rounded-e-lg  border-white bg-black text-white w-1/3 p-3 -ml-[-0.2px] text-base"
            onClick={joinWaitlist}
            disabled={email === ""}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
