"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from 'react';
import {Button, Text, Input, Title, Stack, Grid, NumberInput, Select,Textarea } from "@mantine/core";

const CateringPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div>
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
      <div id="hero"
        className="md:flex md:justify-between 
        md:items-center md:h-full py-10 bg-catering-pattern bg-cover w-full
        min-h-[400px] md:min-h-[600px]">
          <div className="mx-auto w-2/3 py-5 px-14" style={{backgroundColor: "white"}}>
            <Stack>
              <h1 className="text-center font-cabin font-medium text-3xl">Contact Us and Get Our Special Offers</h1>
              <p className="font-cabin font-normal text-md italic">* Indicates Required Field</p>
              <Grid>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-cabin font-normal" label="Name">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-cabin font-normal" label="Date of Event">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-cabin font-normal" label="Email">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Input.Wrapper className="font-cabin font-normal" label="Phone Number">
                    <Input variant="filled"/>
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Select
                    variant="filled"
                    label="Select Event Type"
                    data={['Birthday', 'Graduation Party']}
                    className="font-cabin font-normal"
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <NumberInput
                    variant="filled"
                    label="# of Guest"
                    min={1}
                    className="font-cabin font-normal"
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Textarea
                    className="font-cabin font-normal"
                    variant="filled"
                    label="Message"
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <button className="w-full bg-purple font-cabin mx-auto text-white rounded-md h-10">Submit</button>
                </Grid.Col>
              </Grid>
            </Stack>
          </div>
      </div>  
    </div>
  );
};
export default CateringPage;