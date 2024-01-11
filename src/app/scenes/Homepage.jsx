"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";
import Link from 'next/link';

const Homepage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      {/* HERO SECTION   */}
      <div
        id="hero"
        className="md:flex md:justify-between 
        md:items-center md:h-full py-10 bg-hero-pattern bg-cover w-full
        min-h-[400px] md:min-h-[600px]"
      >
        <div className="md:flex md:justify-between 
          md:items-center gap-16 py-10 w-5/6 mx-auto md:h-full">
        <div className="flex flex-wrap w-full justify-center items-center bg-slate-50/75">
        <div className="w-full md:w-1/3 p-4 order-2 md:order-1">
          <div className="md:h-[255px] h-[150px] flex items-center justify-center">
            <div className="md:w-3/4 w-full h-full text-center border-y-2 border-purple 
            flex items-center justify-center text-xl font-bold font-unna">
              Buffet Hours <br/>
              11:00 am to 3:00 pm <br/>
              Dinner Hours <br/>
              5:00 pm to 10:00 pm <br/>
            </div>
          </div>
        </div>
          <div className="w-full md:w-1/3 md:p-4 p-1 order-1 md:order-2">
            <div className="h-full flex items-center justify-center mb-4 md:mb-0">
              <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex md:w-[500px] w-[250px] h-full">
                    <Image 
                    alt="preethi-logo"
                    className="md:w-[500px] md:h-[250px] w-[250px] h-[150px]"
                    src={require("../assets/preethi-logo.png")}/>
                  </div>
                  <div className="flex justify-center items-center md:space-x-6 space-x-2">
                    <Link href="/menu">
                    <button className="mt-5 md:text-base text-sm text-center font-unna font-bold text-white bg-purple
                        hover:bg-slate-50/75 hover:text-purple py-2 px-4 rounded-full transition duration-300
                        border border-purple">Explore Our Menu</button>
                    </Link>
                    <Link href="/buffet">
                    <button className="mt-5 md:text-base text-sm text-center font-unna font-bold text-white bg-purple
                        hover:bg-slate-50/75 hover:text-purple py-2 px-4 rounded-full transition duration-300
                        border border-purple">Our Buffet Menu</button>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 order-3">
              <div className="md:h-[255px] h-[150px] flex items-center justify-center">
                <div className="md:w-3/4 w-full h-full text-center border-y-2 border-purple 
                  flex items-center justify-center text-xl font-bold font-unna">
                  Open Daily <br/>
                  715 2nd St, Davis, <br/>
                  CA, 95616 <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR PROCESS  */}
      <div className="w-5/6 mx-auto md:h-full mt-10 py-10">
        <div className="flex flex-row space-x-5 justify-center items-center text-center mb-5">
          <Image
            alt="flower"
            className=" max-w-[35px] md:max-w-[45px] max-h-[39px] md:max-h-[49px]"
            src={require("../assets/flower.png")}
          />
          <p
            className="text-5xl font-unna flex text-center justify-center items-center
                text-purple font-bold"
          >
            {" "}
            Our Process
          </p>
          <Image
            alt="flower"
            className="max-w-[35px] md:max-w-[45px] max-h-[39px] md:max-h-[49px]"
            src={require("../assets/flower.png")}
          />
        </div>
        <p className="mb-5 text-base font-unna text-center text-purple font-bold">
          SAVOR THE AUTHENTICITY
        </p>
        <div className="flex flex-wrap justify-between">
          {/* First Column/Row */}
          <div className="w-full md:w-1/3 mb-4 px-4">
            <div
              className="flex justify-center items-center text-center 
                font-unna text-black flex-row md:flex-col"
            >
              <div>
                <Image
                  alt="organic"
                  className="flex justify-center items-center max-w-[150px] 
                        md:max-w-[300px] max-h-[170px] md:max-h-[400px]"
                  src={require("../assets/organic.png")}
                />
              </div>
              <div className="px-4 md:px-16">
                <p className="mt-5 mb-5 font-bold text-2xl"> Organic </p>
                <p className="text-lg">
                  We take pride in every dish, drink, dosa, and dessert we make
                  and use organic ingredients
                </p>
              </div>
            </div>
          </div>

          {/* Second Column/Row */}
          <div className="w-full md:w-1/3 mb-4 px-4">
            <div
              className="flex justify-center items-center text-center 
              font-unna text-black flex-row md:flex-col"
            >
              <div>
                <Image
                  alt="homemade"
                  className="flex justify-center items-center max-w-[150px] 
                  md:max-w-[300px] max-h-[170px] md:max-h-[400px]"
                  src={require("../assets/homemade.png")}
                />
              </div>
              <div className="px-4 md:px-16">
                <p className="mt-5 mb-5 font-bold text-2xl"> Homemade </p>
                <p className="text-lg">
                  Our two primary chefs are made up of a husband and wife team
                  who lovingly make homemade dishes
                </p>
              </div>
            </div>
          </div>

          {/* Third Column/Row */}
          <div className="w-full md:w-1/3 mb-4 px-4">
            <div
              className="flex justify-center items-center text-center 
              font-unna text-black flex-row md:flex-col"
            >
              <div>
                <Image
                  alt="order"
                  className="flex justify-center items-center max-w-[150px] 
                  md:max-w-[300px] max-h-[170px] md:max-h-[400px]"
                  src={require("../assets/order.png")}
                />
              </div>
              <div className="px-4 md:px-16">
                <p className="mt-5 mb-5 font-bold text-2xl"> Made-To-Order </p>
                <p className="text-lg">
                  Each individual dish are made-to-order and prepared correctly
                  according to traditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT US */}
      <div className="md:flex md:justify-between 
        md:items-center gap-16 py-10 w-5/6 mx-auto md:h-full">
        <div className="md:w-1/2 justify-center items-center md:items-start md:justify-start w-full">
          <div className="flex justify-center items-center md:items-start md:justify-start">
            <Image 
              alt="about-icon"
              className="w-[40px] h-[30px]"
              src={require("../assets/about-icon.png")}/>
          </div>
          <Text className="mt-5 text-base font-unna text-center md:text-start text-purple font-bold">OUR STORY</Text>
          <Text className="mt-5 text-5xl font-unna text-center md:text-start text-purple font-bold">About Us</Text>
          <Text className="mt-5 mb-7 text-lg text-center md:text-start font-unna">
            We are a family owned restaurant with over 25 years of experience
            creating authentic, southern and northern regional dishes that honor
            traditional centuries-old family recipes.
          </Text>
          <Text className="mt-5 mb-7 text-lg text-center md:text-start font-unna">
            We offer a daily lunch buffet full of deliciously familiar dishes
            including Dosas, and an intriguing and diverse dinner menu full of
            homemade regional cuisines that reflect the natural ethnic mixture
            of authentic spices and flavors of each area.
          </Text>
        </div>
        <div className="md:w-1/2 w-full flex flex-wrap justify-between">
        <div className="mt-5 md:mt-10 w-1/2 flex md:justify-start justify-center">
          {isAboveMediumScreens ? (
            <div>
               <Image
            alt= "about-1"
            className="max-w-[150px]
                        md:max-w-[300px] max-h-[250px] md:max-h-[400px] md:justify-start justify-center"
            src={require("../assets/about-1.png")}
          />
            </div>
          ) : (
            <Image
            alt= "about-1"
            className="max-w-[150px]
            md:max-w-[300px] max-h-[250px] md:max-h-[400px] md:justify-start justify-center"
            src={require("../assets/about-1.png")}
          />
          )}
        </div>
        <div className="mt-5 w-1/2 md:mt-[200px] flex md:justify-start justify-center">
          {isAboveMediumScreens ? (
            <div>
                <Image
            alt= "about-2"
            className="max-w-[150px]
            md:max-w-[300px] max-h-[250px] md:max-h-[400px] md:justify-start justify-center"
            src={require("../assets/about-2.png")}
          />
            </div>
          ) : (
            <Image
            alt= "about-2"
            className="max-w-[150px]
            md:max-w-[300px] max-h-[250px] md:max-h-[400px] md:justify-start justify-center"
            src={require("../assets/about-2.png")}
          />
          )}
        </div>
        </div>
      </div>
      {/* CATERING SECTION   */}
      <div
        id="cater"
        className="md:flex md:justify-between 
        md:items-center gap-16 py-10 w-5/6 mx-auto md:h-full"
      >
        {/* CATERING IMAGE SECTION */}
        <div className="md:order-2 flex justify-center mt-5 md:mt-10 py-10">
          {isAboveMediumScreens ? (
            <div>
              <Image
                alt="cater"
                className="rounded-sm w-full max-w-[300px] md:max-w-[500px]"
                src={require("../assets/preethi-cater.png")}
              />
            </div>
          ) : (
            <Image
              alt="cater"
              className="rounded-sm w-full max-w-[300px] md:max-w-[500px]"
              src={require("../assets/preethi-cater.png")}
            />
          )}
        </div>
        {/* MAIN SECTION - Catering */}
        <div className="mt-5 md:mt-10">
          {/* HEADINGS */}
          <div className="w-full justify-center flex items-center md:items-start md:justify-start">
            <Image
              alt="van"
              className="max-w-[50px] max-h-[50px]"
              src={require("../assets/van.png")}
            />
          </div>
          <p className="mt-5 text-5xl font-unna text-center md:text-start text-purple font-bold">
            Catering Events
          </p>
          <p className="mt-5 text-base font-unna text-center md:text-start text-purple font-bold">
            FOR THE SWEETEST MOMENTS IN LIFE
          </p>
          <div className="w-full md:max-w-[500px]">
          <p className="mt-5 mb-7 text-lg text-center md:text-start font-unna">
            We take pride in hosting events of any size with a passion for
            creating unforgettable moments. Whether you're planning an intimate 
            gathering, a corporate affair, or a grand celebration, we've got your
            catering needs covered!
          </p>
          </div>
          <div className="w-full justify-center flex items-center md:items-start md:justify-start">
            <Link href="/catering">
            <button
              className="mt-5 text-lg text-center font-unna font-bold text-purple bg-white
                        hover:bg-purple hover:text-white  py-2 px-4 rounded-full transition duration-300
                        border border-purple"
            >
              Our Catering Services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;