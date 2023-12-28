"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";
import Carousel from "../buffet/Carousel";
import "../globals.css";
import Link from 'next/link';

const BuffetPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1ç060px)");
  const images = ['carousel-1.png','carousel-2.png','carousel-3.png','carousel-4.png','carousel-5.png' ];
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
        <div className ="w-5/6 mx-auto md:h-full flex flex-col justify-center items-center md:pb-[50px] pb-[25px]">
          <p className=" w-full font-unna md:text-[70px] text-[32px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
              Our Buffet Services
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
          </p>
          <p className="w-full font-unna text-white font-bold text-xl text-center">
          Savor the essence of each season with our curated selection of dishes that celebrate the freshest <br /> 
          ingredients. Our chefs offer a symphony of flavors provided in our main and seasonal courses.
          </p>
        </div>
        <div className="w-5/6 mx-auto md:h-full flex md:flex-row flex-col justify-center items-center py-[25px]">
          <Carousel images={images}/>
          <div className="md:w-[300px] w-[250px] bg-dark-yellow rounded-[32px] h-[200px] flex 
          items-center justify-center md:mx-auto mx-0 md:mt-[0px] mt-[90px]">
            <p className="font-unna font-bold text-white text-base text-center flex items-center justify-center">
                Buffet Hours <br/>
                Lunch: 11:30 am to 12:30 pm <br/>
                Dinner: 5:00 pm to 10:00 pm <br/>
            </p>
        </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto md:h-full mt-10 py-10">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 p-4 h-full">
            <div className="h-full flex flex-row md:flex-col items-center justify-center mb-4 md:mb-0">
              <div className="w-full flex flex-col md:items-start md:justify-start justify-center items-center">
                <div className="font-bold font-unna border-y-2 border-yellow margin-b-2.5 text-base">
                  MENU
                </div>
                <div className="font-unna margin-b-4 md:text-[40px] text-[32px] font-bold text-center md:text-start">
                  Try Our Special Offers
                </div>
                <div className="font-unna text-xl">
                  Outside the buffet hours
                </div>
              </div>
            </div>
            <div className="w-full flex items-start justify-start md:flex-col flex-row md:space-x-0 space-x-5
            md:space-y-[59px] space-y-0 md:overflow-x-hidden overflow-x-auto md:h-[1769px] h-[300px] md:my-[59px] my-[20px]">
              <div>
              <Image 
                    alt="buffet-dish1"
                    className="md:max-w-[398px] md:max-h-[398px] min-w-[225px] min-h-[255px]"
                    src={require("../assets/buffet-dish1.png")}/>
              </div>
              <div>
              <Image 
                    alt="buffet-dish2"
                    className="md:max-w-[398px] md:max-h-[398px] min-w-[225px] min-h-[255px]"
                    src={require("../assets/buffet-dish2.png")}/>
              </div>
              <div>
              <Image 
                    alt="buffet-dish3"
                    className="md:max-w-[398px] md:max-h-[398px] min-w-[225px] min-h-[255px]"
                    src={require("../assets/buffet-dish3.png")}/>
              </div>
              <div>
              <Image 
                    alt="buffet-dish4"
                    className="md:max-w-[398px] md:max-h-[398px] min-w-[225px] min-h-[255px]"
                    src={require("../assets/buffet-dish4.png")}/>
              </div>
            </div>
            <div className="w-full justify-center flex items-center md:items-start md:justify-start">
            <Link href="/menu">
            <button
              className="mt-5 text-lg text-center font-unna font-bold text-purple bg-white
                        hover:bg-purple hover:text-white  py-2 px-4 rounded-full transition duration-300
                        border border-purple"
            >
              See all dishes
            </button>
            </Link>
          </div>
          </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="h-full flex flex-col md:items-start md:justify-start 
          items-center justify-center w-full">
              <div className="md:mb-[70px] mb-[35px] w-full justify-center flex flex-col
              items-center md:items-start md:justify-start">
                <div className="font-unna font-bold md:text-[40px] text-[38px] md:mb-[44px] mb-[22px]
                border-y-2 border-yellow">
                  SEASONAL
                </div>
                <div className="font-unna text-3xl">
                  Dish name
                </div>
                <div className="font-unna text-xl mb-3">
                  Dish Description
                </div>
                <div className="font-unna text-3xl">
                  Dish name
                </div>
                <div className="font-unna text-xl mb-3">
                  Dish Description
                </div>
              </div>
              <div className="w-full justify-center flex items-center flex-col
              md:items-start md:justify-start">
                <div className="font-unna font-bold md:text-[40px] text-[38px] md:mb-[44px] mb-[22px]
                border-y-2 border-yellow">
                  MAIN
                </div>
                <div className="font-unna text-3xl">
                  Dish name
                </div>
                <div className="font-unna text-xl mb-3">
                  Dish Description
                </div>
                <div className="font-unna text-3xl">
                  Dish name
                </div>
                <div className="font-unna text-xl mb-3">
                  Dish Description
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuffetPage;