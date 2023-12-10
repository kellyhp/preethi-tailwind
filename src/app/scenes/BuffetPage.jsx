"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";
import Carousel from "../buffet/Carousel";
import "../globals.css";

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
          items-center justify-center mx-auto md:mt-[0px] mt-[90px]">
            <p className="font-unna font-bold text-white text-base text-center flex items-center justify-center">
                Buffet Hours <br/>
                Lunch: 11:30 am to 12:30 pm <br/>
                Dinner: 5:00 pm to 10:00 pm <br/>
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default BuffetPage;