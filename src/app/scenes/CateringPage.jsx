"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";

const CateringPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
        <div className ="w-5/6 mx-auto md:h-full flex flex-col justify-center items-center">
          <p className=" w-full font-unna text-[70px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
              Catering Services
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
          </p>
          <p className="w-full font-unna text-white font-bold text-xl text-center">
            Ready to Elevate Your Event? Contact us today to discuss your event, customize your <br />
            package, and ensure your occasion is nothing short of extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CateringPage;