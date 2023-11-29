"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";

const ContactPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
        <div className ="w-5/6 mx-auto md:h-full flex flex-col justify-center items-center">
          <p className=" w-full font-unna text-[70px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
              Contact Us
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
          </p>
          <p className="w-full font-unna text-white font-bold text-xl text-center">
            If you have any questions or concerns, feel free to send us a form down below!
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;