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
                <br />
                <div className="grid-title font-bold">
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
                <div className="grid-title font-bold">
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
                <div className="grid-title font-bold">
                  Any Occasion, <br />
                  Every Celebration
                </div>
                <br/>
                <br/>
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
      <div id="hero"
        className="md:flex md:justify-between 
        md:items-center md:h-full py-10 bg-catering-pattern bg-cover w-full
        min-h-[400px] md:min-h-[600px]">
          <div className="mx-auto w-2/3 py-5 px-14" style={{backgroundColor: "white"}}>
            <Stack>
              <h1 className="text-center font-unna font-medium text-3xl">Contact Us and Get Our Special Offers</h1>
              <p className="font-una font-normal text-md italic">* Indicates Required Field</p>
              <Grid>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-unna font-normal" label="Name">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-unna font-normal" label="Date of Event">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-unna font-normal" label="Email">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-unna font-normal" label="Phone Number">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Select
                    variant="filled"
                    label="Select Event Type"
                    data={['Birthday', 'Graduation Party']}
                    className="font-unna font-normal"
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <NumberInput
                    variant="filled"
                    label="# of Guest"
                    min={1}
                    className="font-unna font-normal"
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Textarea
                    className="font-unna font-normal"
                    variant="filled"
                    label="Message"
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <button className="w-full bg-purple font-unna mx-auto text-white rounded-md h-10">Submit</button>
                </Grid.Col>
              </Grid>
            </Stack>
          </div>
      </div>  
    </div>
  );
};
export default CateringPage;
