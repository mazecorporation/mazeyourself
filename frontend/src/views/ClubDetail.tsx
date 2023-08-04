import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ReactComponent as BackArrow } from "../assets/images/icons/back-arrow.svg";
import DummyImage from "../assets/images/connect.png";
import Footer from "../components/Footer";
import request, { handleApiError } from "../api";

const ClubDetail = () => {
  const [clubDetail, setClubDetail] = useState<any>({});
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>({
    status: false,
    message: ""
  });
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };


  const fetchClubById = async () => {
    setIsLoading(true);
    try {
      const { data }: any = await request("GET", `club/${id}`);
      setClubDetail(data);
      setIsLoading(false);
    } catch (error: any) {
      // Handle the error if needed
      setIsLoading(false);
      setError({
        status: true,
        message: handleApiError(error)
      });
    }
  };

  useEffect(() => {
    fetchClubById();
  }, [id]);

  const DetailLink = ({
    route,
    title,
    addedStyles
  }: {
    route: string;
    title: string;
    addedStyles?: any;
  }) => {
    return (
      <div
        className={`flex flex-row items-center justify-center rounded-[20px] border-[1px] border-[#484848] w-20 p-2 ${addedStyles}`}
      >
        {title === "call" ? (
          <a
            href={`tel:${route}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#484848] capitalize"
          >
            Call
          </a>
        ) : (
          <a
            href={route}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#484848] capitalize"
          >
            {title}
          </a>
        )}
      </div>
    );
  };
  return (
    <div className="sm:pt-10  pt-6 sm:px-24 px-4">
      {/* Navbar */}
      <Navbar />

      {/* Club Detail */}
      <div className="mt-10">
        <BackArrow onClick={goBack} className="cursor-pointer" />


        {error.status && (
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="text-2xl font-bold mt-4 font-spaceGrotesk">
              {error.message.message}
            </div>
          </div>
        )}

        {
          isLoading ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
              <div className="text-2xl font-bold mt-4 font-spaceGrotesk">
                Loading...
              </div>
            </div>
          ) :
            <div className="mt-10 flex sm:flex-row flex-col sm:items-center items-start">
              <div className="sm:w-1/2 w-full flex sm:flex-row flex-col sm:items-center  items-start justify-between">


                <div className="sm:w-2/3 w-full">
                  <div className="text-2xl mb-2">{clubDetail?.title}</div>
                  <img
                    src={clubDetail?.logo ? clubDetail?.logo : DummyImage}
                    className="w-full h-60 rounded-lg border-[1px]"
                    alt="club"

                  />
                </div>
                <div className="sm:ml-3 sm:mt-0 mt-2  flex flex-col">
                  <span className="text-base text-[#484848]">
                    {clubDetail?.address}
                  </span>
                  <span>{clubDetail?.category}</span>
                  <p>{clubDetail?.rating}</p>
                  <div className="mt-2 flex flex-row items-center justify-start">
                    <DetailLink
                      title={"Website"}
                      route={clubDetail?.website}
                    />
                    <DetailLink
                      title={"call"}
                      route={clubDetail?.phone}
                      addedStyles="ml-2"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:w-1/2 w-full sm:mt-0 mt-10 sm:mb-0 mb-10">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387131.57737376665!2d-74.25987632083443!3d40.69714942211854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2509c2c5f5e7b%3A0x9c7b9f287617f485!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1560801719017!5m2!1sen!2sca"
                  style={{ border: 0 }}
                  className="w-full h-96 rounded-lg"
                ></iframe>
              </div>
            </div>
        }

      </div>

      {/*footer*/}

      <Footer />
    </div>
  );
};

export default ClubDetail;
