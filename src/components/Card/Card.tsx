// CardSlider.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface CardSliderProps {
  data: Array<{
    web_pages: string[];
    name: string;
    country: string;
    state_province: string | null;
    alpha_two_code: string;
    domains: string[];
  }>;
}

interface cardData {
  web_pages: string[];
  name: string;
  country: string;
  state_province: string | null;
  alpha_two_code: string;
  domains: string[];
}
const CardSlider: React.FC<CardSliderProps> = ({ data }) => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Array<cardData>>();
  const cardsPerPage = 4;

  const navigate = useNavigate();

  const cardClick = (card: number) => { 
    navigate(`/ContentPage/${card}`);
  };

  useEffect(() => {
    const temp: Array<cardData> = data.slice(
      startIndex,
      startIndex + cardsPerPage < data.length
        ? startIndex + cardsPerPage
        : data.length
    );
    setVisibleCards(temp);
  }, [startIndex]);

  const handleNext = () => { 
    setStartIndex((prevIndex) =>
      prevIndex + cardsPerPage < data.length
        ? prevIndex + cardsPerPage
        : prevIndex
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };

  return (
    <div className="relative flex  items-center  justify-center  overflow-hidden  h-full ">
      {/* <div className="flex transition-transform ease-in-out duration-3000 transform translate-x-[-100%]"> */}
      <div className="flex  items-center  justify-center w-full gap-[30px] ">
        {visibleCards?.map((item: cardData, index: number) => (
          <div className="flex  items-center justify-center ">
            <div
              key={index}
              onClick={() => cardClick(index)}
              className="flex-none w-[30vh]   h-[60vh] shadow-lg rounded-lg overflow-hidden flex flex-col ml-[5px] mt-[10px] "
            >
              <div className="flex items-center justify-center">
                <span className="h-[25vh] w-[25vh] flex-shrink-0 rounded-full bg-gray-500 text-white font-inter-400 text-[10vh] inline-flex items-center justify-center p-1">
                  {item.name.split(" ").length > 1
                    ? item.name.split(" ")[0][0] + item.name.split(" ")[1][0]
                    : item.name.split(" ")[0][0]}
                </span>
              </div>

              <div className="p-4  ">
                <div className="flex flex-col gap-[10px] mt-4">
                  <p className="font-bold text-lg">{t("University")} : </p>
                  <p>{t(item.name)}</p>
                </div>

                <div className="flex items-start gap-[10px] mt-4">
                  <p className="font-bold text-lg">{t("Country")} : </p>
                  <p className=" text-lg">{t(item.country)}</p>
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <a
                    href={item.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-full"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl font-bold w-1/10 ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={handlePrev}
      >
          &#9664;
      </button>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl font-bold w-1/10${
          startIndex + cardsPerPage >= data.length
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={handleNext}
      >
          &#9654;
      </button>
    </div>
  );
};

export default CardSlider;
