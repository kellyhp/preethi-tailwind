import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-purple w-full bottom-0 py-5">
      <div className="w-5/6 md:flex md:justify-between 
        md:items-center mx-auto md:h-full">
      <div className="w-full flex md:flex-row flex-col">
        <div className="basis-full md:basis-1/2 justify-start">
        <Image
        className = "max-w-[200px] md:max-w-[250px] max-h-[125px] md:max-h-[157px]"
        src={require("../assets/preethi-logo.png")}
        alt="Preethi-Logo"/>
        </div>
        <div className="basis-full md:basis-1/4 px-3">
            <div className="flex font-unna text-white justify-start items-start text-start">
              <div className="justify-start">
                <p className="font-bold text-lg mt-5 mb-5 border-y-2 border-dark-yellow"> CONTACT </p>
                <p> 715 2nd St, Davis, CA , 95616 </p>
                <p><span className="font-bold text-yellow">Call: </span> 530-759-2040</p>
                <p><span className="font-bold text-yellow">Email: </span>PreethiindianD@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/4 px-3">
            <div className="flex font-unna text-white justify-start items-start text-start">
              <div className="justify-start">
                <p className="font-bold text-lg mt-5 mb-5 border-y-2 border-dark-yellow"> WORKING HOURS </p>
                <p><span className="font-bold text-yellow">Buffet: </span> 11:00 am to 3:00 pm </p>
                <p><span className="font-bold text-yellow">Dinner: </span> 5:00 pm to 10:00 pm </p>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className="bg-dark-yellow mt-10 mb-10 h-0.5 w-full"/>
      <div className="w-5/6 md:flex md:justify-between 
        md:items-center mx-auto md:h-full">
          <div className="w-full flex flex-row">
            <div className="basis-1/2 justify-start">
              <p className="font-unna text-lg text-white">&copy; 2023 | All Rights Reserved.</p>
            </div>
            <div className="basis-1/2 flex justify-end justify-items-end">
              <div className="flex flex-row space-x-5">
                <a
                href = "https://www.instagram.com/preethiindiancuisine/?hl=en"
                target="_blank"
                rel="noreferrer">
                  <Image
                  className = "max-w-[23px] md:max-w-[23px] max-h-[23px] md:max-h-[23px]"
                  src={require("../assets/instagram.png")}
                  alt="instagram"/>
                </a>
                <a
                href = "https://www.facebook.com/preethiindian"
                target="_blank"
                rel="noreferrer">
                  <Image
                  className = "max-w-[23px] md:max-w-[23px] max-h-[23px] md:max-h-[23px]"
                  src={require("../assets/facebook.png")}
                  alt="facebook"/>
                </a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
};
export default Footer;