import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useWindowSize from "../hooks/windowSize";
import { useHistory } from "react-router-dom";


const Navbar = ({ theme }: { theme?: string }) => {
    const wide = useWindowSize(500);
    const history = useHistory();
    const nav = ["home", "About", "explore", "contact"];
    const { pathname } = useLocation();

    return (
        <div className="flex flex-row items-center justify-between relative z-10">
            <div
                className={theme === "dark" ? "font-productSansBold sm:text-4xl text-xl cursor-pointer text-white" : "font-productSansBold sm:text-4xl text-xl cursor-pointer"}
                onClick={() => history.push("/")}
            >
                {" "}
                Maze
            </div>
            <ul className="flex flex-row items-center">
                {wide
                    ? nav.map((item, index) => {
                        const activeClassWhite = pathname === `/${item}` ? "text-[#9747FF]" : "text-white";
                        const activeClassDark = pathname === `/${item}` ? "text-[#9747FF]" : "text-[#484848]";
                        return (
                            <div
                                onClick={() => history.push(item === "home" ? "/" : `/${item}`)}
                                key={index}
                                className={theme === "dark" ? `capitalize text-lg sm:px-6 px-2 ${activeClassWhite} cursor-pointer` : `capitalize text-lg sm:px-6 ${activeClassDark} px-2  cursor-pointer`}
                            >
                                {item}
                            </div>
                        );
                    })
                    : nav.slice(1, 4).map((item, index) => {
                        return (
                            <NavLink
                                to={item}
                                key={index}
                                data-aos="fade-in"
                                className={theme === "dark" ? "capitalize text-lg sm:px-6 px-2 text-white" : "capitalize text-lg sm:px-6 px-2"}
                                activeClassName={theme === "dark" ? "text-[#9747FF]" : "text-[#9747FF]"}
                            >
                                {item}
                            </NavLink>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Navbar;
