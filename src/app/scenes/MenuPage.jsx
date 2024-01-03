"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";

const MenuPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
        <div className ="w-5/6 mx-auto md:h-full flex flex-col justify-center items-center">
          <p className=" w-full font-unna md:text-[70px] text-[32px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
              Discover Our Menu
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
          </p>
          <p className="w-full font-unna text-white font-bold text-xl text-center md:mb-[66px] mb-[33px]">
          Our menu is a celebration of the vibrant and diverse flavors of India, curated to tantalize your taste <br />
          buds. Explore our menu, filled with tantalizing appetizers, aromatic curries, and decadent desserts.
          </p>
        </div>
        <div className="md:w-[500px] w-[300px] bg-dark-yellow rounded-[32px] h-[200px] flex items-center justify-center mx-auto">
            <p className="font-unna font-bold text-white text-base text-center flex items-center justify-center">
                Note: We use nuts & diary products in the preparation for food. <br/>
                Please let us know if you are allergic to any items. Ask for mild, <br/>
                spicy, or extra spicy when you order your food & enjoy your <br/>
                delicious meal!
            </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-24 my-8 md:h-full bg-white">
        <Image src={require("../assets/menu1.png")} />
        <Image src={require("../assets/menu2.png")} />
        <Image src={require("../assets/menu3.png")} />
        <Image src={require("../assets/menu4.png")} />
        <Image src={require("../assets/menu5.png")} />
      </div>
    </div>
  );
};
export default MenuPage;