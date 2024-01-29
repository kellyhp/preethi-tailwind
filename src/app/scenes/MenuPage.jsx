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
          <p className="w-full font-unna text-white font-bold md:text-2xl text-lg text-center md:mb-[66px] mb-[33px]">
          Our menu is a celebration of the vibrant and diverse flavors of India, curated to tantalize your taste <br />
          buds. Explore our menu, filled with tantalizing appetizers, aromatic curries, and decadent desserts.
          </p>
        </div>
        <div className="md:w-[500px] w-[270px] bg-dark-yellow rounded-[32px] h-[250px] flex items-center justify-center mx-auto px-4">
            <p className="font-unna font-bold text-white md:text-lg text-base text-center flex items-center justify-center">
                Note: We use nuts & diary products in the preparation for food. 
                Please let us know if you are allergic to any items. Ask for mild, 
                spicy, or extra spicy when you order your food & enjoy your 
                delicious meal!
            </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 my-8 md:h-full bg-white">
        <Image className="w-5/6" src={require("../assets/menu1-1.png")} />
        <Image className="w-5/6" src={require("../assets/menu2-1.png")} />
        <Image className="w-5/6" src={require("../assets/menu3-1.png")} />
        <Image className="w-5/6" src={require("../assets/menu4-1.png")} />
        <Image className="w-5/6" src={require("../assets/menu5-1.png")} />
      </div>
    </div>
  );
};
export default MenuPage;