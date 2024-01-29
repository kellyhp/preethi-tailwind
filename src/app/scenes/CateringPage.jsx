"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from 'react';
import "../globals.css";
import {Button, Input, Title, Stack, Grid, NumberInput, Select,Textarea,Center} from "@mantine/core";
import Image from "next/image";

const CateringPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div>
      <div className="w-full mx-auto md:h-full bg-white">
        <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
          <div className="w-5/6 mx-auto md:h-full flex flex-col justify-center items-center">
            <p className=" w-full font-unna md:text-[70px] text-[32px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
              <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto" />
              Catering Services
              <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto" />
            </p>
            <p className="md:w-1/2 sm:w-full font-unna text-white font-bold md:text-2xl text-lg text-center">
              Ready to Elevate Your Event? Contact us today to discuss your event,
            customize your
              package, and ensure your occasion is nothing short of extraordinary.
            </p>
          <div id="catering">
            <div className="font-unna md:text-5xl text-3xl text-center text-white">What We Offer</div>
            <div className="flex md:flex-row flex-col w-full mx-auto justify-center items-center mt-6 md:mt-20">
              <div className="grid-item md:px-3 px-3 md:py-0 py-5">
                <Center>
                  <Image
                    src={require("../assets/Waiter.png")}
                    width={75}
                    height={75}
                  ></Image>
                </Center>
                <div className="grid-title font-bold my-4 md:my-10">
                  Hosting Any <br />
                  Size Events
                </div>
                From intimate dinners to large scale galas, our team is
                dedicated to ensuring every detail is perfect, no matter how big
                or small your occasion.
              </div>
              <div className="grid-item md:px-8 px-3 md:py-0 py-5">
                <Center>
                  <Image
                    src={require("../assets/Slider Control.png")}
                    width={75}
                    height={75}
                  ></Image>
                </Center>
                <div className="grid-title font-bold my-4 md:my-10">
                  Range of <br />
                  Packages and Pricing
                </div>
                Explore our diverse range of packages, whatever your
                preferences, we have a package that suits your taste and budget.
              </div>
              <div className="grid-item md:px-8 px-3 md:py-0 py-5">
                <Center>
                  <Image
                    src={require("../assets/Confetti.png")}
                    width={75}
                    height={75}
                  ></Image>
                </Center>
                <div className="grid-title font-bold my-4 md:my-10">
                  Any Occasion, <br />
                  Every Celebration
                </div>
                Birthdays, weddings, corporate events, or just a casual
                get-together -- we cater to every occasion with a commitment to
                excellence.
              </div>
            </div>
            <div id="disclaimer" className="mt-6 md:mt-20">
              Call or email us to discuss pricing and menu options <br />
              Phone Number: 530-759-2040 <br />
              Email: PreethiindianD@gmail.com
            </div>
          </div>
          </div>
        </div>
      </div>
      <div id="hero"
        className="md:flex md:justify-between 
        md:items-center md:h-full py-10 bg-catering-pattern bg-cover w-full
        min-h-[500px] md:min-h-[700px]">
          <div className="mx-auto w-5/6 md:w-2/3 py-10 px-7 md:px-14" style={{backgroundColor: "white"}}>
            <Stack>
              <h1 className="text-center font-unna text-3xl font-bold">Contact Us and Get Our Special Offers</h1>
              <p className="font-unna font-normal text-md italic">* INDICATES REQUIRED FIELD</p>
              <div className = "grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <Input.Wrapper className="font-unna font-normal" label="Name">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </div>
                <div>
                  <Input.Wrapper className="font-unna font-normal" label="Date of Event">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </div>
                <div>
                  <Input.Wrapper className="font-unna font-normal" label="Email">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </div>
                <div>
                  <Input.Wrapper className="font-unna font-normal" label="Phone Number">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </div>
                <div>
                  <Select
                    variant="filled"
                    label="Select Event Type"
                    data={['Birthday', 'Graduation Party']}
                    className="font-unna font-normal"
                  />
                </div>
                <div>
                  <NumberInput
                    variant="filled"
                    label="# of Guest"
                    min={1}
                    className="font-unna font-normal"
                  />
                </div>
              </div>
              <div>
                <Textarea
                  className="font-unna font-normal"
                  variant="filled"
                  label="Message"
                />
              </div>
              <div>
                <button className="w-full bg-purple font-unna font-bold 
                mx-auto text-white rounded-md h-10  hover:bg-slate-50 text-lg
                hover:text-purple border border-solid border-purple transition-colors duration-150
                focus:shadow-outline">Submit</button>
              </div>
            </Stack>
          </div>
      </div>  
    </div>
  );
};
export default CateringPage;
