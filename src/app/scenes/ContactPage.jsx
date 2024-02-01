"use client";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { Center, Button, Text } from "@mantine/core";
import "../globals.css";

const ContactPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full mx-auto md:h-full bg-white">
      <div className="w-full bg-purple md:pt-[140px] pt-[90px] md:pb-[60px] pb-[30px] h-full">
        <div className ="w-5/6 mx-auto md:h-full flex flex-col justify-center md:items-center">
          <p className=" w-full font-unna md:text-[70px] text-[32px] font-bold text-white md:mb-[66px] mb-[33px] text-center">
            <div className=" bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
              Contact Us
            <div className="bg-dark-yellow w-1/3 h-0.5 mx-auto"/>
          </p>
          <p className="w-full font-unna text-white font-bold md:text-2xl text-lg text-center">
            If you have any questions or concerns, feel free to send us a form down below!
            Looking to make an order? Feel free to call us!
          </p>
        </div>
        <div className="w-5/6 mx-auto md:h-full flex justify-center items-center 
        md:mt-[60px] mt-[20px] md:mb-[60px] mb-[20px]">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4 bg-beige md:h-[500px] h-[390px] 
            justify-center md:items-center items-start md:my-auto my-0">
              <div className="flex flex-wrap md:justify-between w-full items-start h-full md:py-7 py-0">
              {/* First Column/Row */}
                <div className="w-full md:mb-4 mb-2 px-2">
                  <div
                    className="flex md:items-start md:justify-start
                    justify-center items-center font-unna flex-col"
                  >
                    <div className="font-bold text-purple text-xl">
                      Working Hours
                    </div>
                    <div className="text-black md:text-lg text-base md:text-start text-center">
                    Open daily <br/>
                    Monday to Sunday <br/>
                    Buffet: 11 am to 3 pm <br/>
                    Dinner: 5 pm to 10 pm
                    </div>
                </div>
              </div>
              {/* Second Column/Row */}
              <div className="w-full md:mb-4 mb-2  px-2">
                  <div
                    className="flex md:items-start md:justify-start
                    justify-center items-center font-unna flex-col"
                  >
                    <div className="font-bold text-purple text-xl">
                      Location
                    </div>
                    <div className="text-black md:text-lg text-base md:text-start text-center">
                    715 2nd St <br/>
                    Davis, CA  <br/>
                    95616
                    </div>
                </div>
              </div>
              {/* Third Column/Row */}
              <div className="w-full md:mb-4 mb-2 px-2">
                  <div
                    className="flex md:items-start md:justify-start
                    justify-center items-center font-unna flex-col"
                  >
                    <div className="font-bold text-purple text-xl">
                      Contact
                    </div>
                    <div className="text-black md:text-lg text-base md:text-start text-center">
                    530-759-2040 <br/>
                    PreethiindianD@gmail.com
                    </div>
                </div>
              </div>
            </div>
          </div>
            <div className="w-full md:w-2/3 md:h-[500px] min-h-[300px]">
            <iframe className="w-full md:h-[500px] min-h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5703969019887!2d-121.74189002389329!3d38.543670071801635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529739db27109%3A0x53ecf3d01d9ff620!2sPreethi%20Indian%20Cuisine!5e0!3m2!1sen!2sus!4v1702964469366!5m2!1sen!2sus" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Submission Section */}
      <div
        className="lg:flex 
        lg:items-center lg:h-full place-content-center mt-10 gap-x-40 font-unna py-4"
      >
        {/* Image */}
        <div className="lg:self-center flex justify-center">
          <Image
            className="h-[520px] w-[300px] lg:block hidden"
            src={require("../assets/contact_meal.png")}
            alt="sample recipe"
          />
        </div>
        {/* Form */}
        <div className="lg:self-center flex flex-col justify-center">
          <h1 className="flex text-3xl font-semibold text-center justify-center lg:justify-start
          mt-2 md:mt-0">
            <div>
              <p class="text-red-600">* </p>
            </div>
            Indicates Required Field
          </h1>
          <form action="https://formsubmit.co/your@email.com" method="POST" className="md:mt-6 mt-2 shadow-none rounded-none">
            <div className="mb-2">
              <label>
                <div className="flex">
                  <div>
                    <span class="text-black-600">Name</span>
                  </div>
                  <div>
                    <p class="text-red-600">*</p>
                  </div>
                </div>
                <input
                  type="text"
                  name="name"
                  className="
                w-full
                block px-1 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                "
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <div className="flex">
                  <div>
                    <span class="text-black-600">Email</span>
                  </div>
                  <div>
                    <p class="text-red-600">*</p>
                  </div>
                </div>
                <input
                  name="email"
                  type="email"
                  className="
                block
                w-full
                mt-2 px-1 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                "
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <div className="flex">
                  <div>
                    <span class="text-black-600">
                      What is your reason of contact?
                    </span>
                  </div>
                  <div>
                    <p class="text-red-600">*</p>
                  </div>
                </div>
                <input
                  name="subject"
                  type="subject"
                  className="
                block
                w-full
                mt-2 px-1 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                "
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                <div className="flex">
                  <div>
                    <span class="text-black-600">Message</span>
                  </div>
                  <div>
                    <p class="text-red-600">*</p>
                  </div>
                </div>
                <textarea
                  name="message"
                  className="
                block
                w-full
                mt-2 px-1 py-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                "
                  required
                  rows="5"
                ></textarea>
              </label>
            </div>
            {/* h-10
                px-5 */}
            <div class="mb-6">
              <button
                type="submit"
                className="
                px-8
                pb-2
                pt-2
                block
                w-full
                text-slate-50
                bg-purple
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-slate-50
                hover:text-purple
                border
                border-solid
                text-lg
                border-purple
                "
              >
                Submit
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;