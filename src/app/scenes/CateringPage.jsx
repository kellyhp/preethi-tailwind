"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import "../globals.css";
import { Center, Button, Text } from "@mantine/core";

const CateringPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
        <div className="w-5/6 mx-auto md:h-full flex flex-col justify-center items-center">
          <p className=" w-full font-unna text-[70px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto" />
            Catering Services
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto" />
          </p>
          <p className="w-full font-unna text-white font-bold text-xl text-center">
            Ready to Elevate Your Event? Contact us today to discuss your event,
            customize your <br />
            package, and ensure your occasion is nothing short of extraordinary.
          </p>
          <div id="catering">
            <div className="header">What We Offer</div>
            <div className="grid-container">
              <div className="grid-item">
                <Center>
                  <Image
                    src={require("../assets/Waiter.png")}
                    width={75}
                    height={75}
                  ></Image>
                </Center>
                <br />
                <br />
                <div className="grid-title">
                  Hosting Any <br />
                  Size Events
                </div>
                <br />
                <br />
                From intimate dinners to large scale galas, our team is
                dedicated to ensuring every detail is perfect, no matter how big
                or small your occasion.
              </div>
              <div className="grid-item">
                <Center>
                  <Image
                    src={require("../assets/Slider Control.png")}
                    width={75}
                    height={75}
                  ></Image>
                </Center>
                <br />
                <br />
                <div className="grid-title">
                  Range of <br />
                  Packages and Pricing
                </div>
                <br />
                <br />
                Explore our diverse range of packages, whatever your
                preferences, we have a package that suits your taste and budget.
              </div>
              <div className="grid-item">
                <Center>
                  <Image
                    src={require("../assets/Confetti.png")}
                    width={75}
                    height={75}
                  ></Image>
                </Center>
                <br />
                <br />
                <div className="grid-title">
                  Any Occasion, <br />
                  Every Celebration
                </div>
                <br />
                <br />
                Birthdays, weddings, corporate events, or just a casual
                get-together -- we cater to every occasion with a commitment to
                excellence.
              </div>
            </div>
            <div id="disclaimer">
              Call us to discuss pricing and menu options <br />
              Phone Number: 530-759-2040
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CateringPage;
