import React, { useEffect, useState } from "react";
import _debounce from "lodash.debounce";
import DummyImage from "../assets/images/connect.png";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import request, { handleApiError } from "../api";
import { ReactComponent as BackArrow } from "../assets/images/icons/chevron-left.svg";
import { ReactComponent as NextArrow } from "../assets/images/icons/chevron-right.svg";

const Explore = () => {
    const history = useHistory();
    const [clubs, setClubs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [nameQuery, setNameQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<any>({
        status: false,
        message: ""
    });

    const [count, setCount] = useState(0);

    const fetchClubs = async (page: number) => {
        setIsLoading(true);
        try {
            const { data }: any = await request("GET", `club?page=${page}&limit=21`);
            setClubs(data?.clubs);
            setCount(data?.count);
            setIsLoading(false);
            setError({
                status: false,
                message: ""
            });
        } catch (error: any) {
            setIsLoading(false);
            // Handle the error if needed
            setError({
                status: true,
                message: handleApiError(error)
            });
        }
    };
    const SEARCH_DEBOUNCE_DELAY = 1000;

    const searchClubs = async () => {
        setIsLoading(true);
        try {
            const { data }: any = await request("GET", `club/search/${nameQuery}`);
            setClubs(data);
            setIsLoading(false);
            setError({
                status: false,
                message: ""
            });
        } catch (error: any) {
            setIsLoading(false);
            // Handle the error if needed
            setError({
                status: true,
                message: handleApiError(error)
            });
        }
    }

    // Define the debounced search function
    const debouncedSearchClubs = _debounce(searchClubs, SEARCH_DEBOUNCE_DELAY);

    const ITEMS_PER_PAGE = 21;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // You can change this to "auto" for instant scrolling without smooth animation
        });
    };

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    useEffect(() => {
        if (nameQuery) {
            debouncedSearchClubs();
        } else {
            fetchClubs(currentPage + 1);
        }
    }, [currentPage, nameQuery]);

    return (
        <div className="sm:pt-10  pt-6 sm:px-24 px-4">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}

            <div className="sm:pt-16 pt-8 flex flex-col items-center justify-between sm:flex-row ">
                <div className="font-spaceGrotesk font-bold text-3xl sm:text-6xl sm:w-1/2 w-full">
                    Explore Clubs🗽✨
                </div>
                <div className="sm:w-1/2 w-full flex flex-row justify-end ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded-lg border-black border-[1px] focus:outline-none sm:w-2/3 w-full justify-end sm:mt-0 mt-8"
                        onChange={(e) => setNameQuery(e.target.value)}
                        value={nameQuery}
                    />
                </div>
            </div>

            {/* Cards */}

            {isLoading && (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                    <div className="text-2xl font-bold mt-4 font-spaceGrotesk">
                        Loading...
                    </div>
                </div>
            )}

            {error.status && (
                <div className="flex flex-col items-center justify-center mt-16">
                    <div className="text-2xl font-bold mt-4 font-spaceGrotesk">
                        {error.message.message}
                    </div>
                </div>
            )}

            {!error.status && !isLoading && clubs.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-16">
                    <div className="text-2xl font-bold mt-4 font-spaceGrotesk">
                        No matches found.
                    </div>
                </div>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-6 pt-16 grid-cols-1">
                {clubs?.map((item: any, index) => {
                    return (
                        <div
                            className="flex flex-col items-start h-full w-full cursor-pointer"
                            data-aos="fade-right"
                            onClick={() => history.push(`/club-detail/${item.id}`)}>
                            <div className="h-60 w-full rounded-lg border-[1px]">
                                <img
                                    src={item.logo ? item.logo : DummyImage}
                                    className="h-60 w-full rounded-lg"
                                    alt={item.title}
                                />
                            </div>
                            <div className="w-full">
                                <div className="flex flex-row items-center justify-between w-full mt-1">
                                    <span className="font-productSansBold text-base">
                                        {item.title}
                                    </span>
                                    <span className="text-xs text-[#484848]">
                                        {item.location}
                                    </span>
                                </div>
                                <div className="flex flex-row items-center justify-between w-full">
                                    <span className="text-sm text-[#484848]">{item.address}</span>
                                    <span className="text-xs text-[#484848]">{item.rating}</span>
                                </div>
                                <div className="flex flex-row items-center justify-between w-full">
                                    <span>{item.category}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ReactPaginate */}
            <div className="flex flex-row mt-10 justify-end items-center">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}>
                    <BackArrow />
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                    className="ml-8">
                    <NextArrow />
                </button>
            </div>

            {/* Contact */}
            <div className="mt-16 flex flex-col items-center">
                <div className="text-center font-spaceGrotesk sm:text-3xl  text-2xl font-bold">
                    Where the City Comes Alive: Find Your Perfect
                    <br /> Clubbing Destination in NYC! 🌆
                </div>
                <div
                    className="border-[1px] rounded-lg border-black sm:text-xl  text-base text-center py-3 px-8 mt-8 cursor-pointer"
                    onClick={() => history.push("/contact")}>
                    Contact
                </div>
            </div>

            {/* Footer */}

            <Footer />
        </div>
    );
};

export default Explore;
