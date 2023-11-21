"use client"
import useMediaQuery from "../hooks/useMediaQuery";
import Image from 'next/image'
const Homepage = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
    // CATERING SECTION  
    <div className="w-5/6 mx-auto md:h-full">
      <div id="home" className="md:flex md:justify-between 
        md:items-center md:h-full gap-16 py-10">
            {/* CATERING IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-5 md:mt-10 py-10">
                {isAboveMediumScreens ? (
                    <div>
                        <Image alt = "cater"
                        className="rounded-sm w-full max-w-[300px] md:max-w-[500px]"
                        src = {require("../assets/preethi-cater.png")}/>
                    </div>
                ) : (
                    <Image alt ="cater"
                    className="rounded-sm w-full max-w-[300px] md:max-w-[500px]"
                    src = {require("../assets/preethi-cater.png")}/>
                )}
                </div>
                {/* MAIN SECTION - Catering */}
                <div className="z-30 basis-2/3 mt-5 md:mt-10">
                    {/* HEADINGS */}
                    <div className="w-full justify-center flex items-center md:items-start md:justify-start">
                        <Image alt="van"
                        className="max-w-[50px] max-h-[50px]"
                        src = {require("../assets/van.png")}
                        />
                    </div>
                        <p className = "mt-5 text-3xl font-unna text-center md:text-start text-purple font-bold">
                            Catering Events
                        </p>
                        <p className = "mt-5 text-sm font-unna text-center md:text-start text-purple font-bold">
                            FOR THE SWEETEST MOMENTS IN LIFE
                        </p>
                        <p className="mt-5 mb-7 text-base text-center md:text-start font-unna">
                        We take pride in hosting events of any size with a passion for creating <br/>
                        unforgettable moments. Whether you're planning an intimate  <br/>
                        gathering, a corporate affair, or a grand celebration, we've got your  <br/>
                        catering needs covered!
                        </p>
                        <div className="w-full justify-center flex items-center md:items-start md:justify-start">
                        <button className="mt-5 text-base text-center font-unna font-bold text-purple
                        hover:bg-purple hover:text-white  py-2 px-4 rounded-full transition duration-300
                        border border-purple">
                            Our Catering Services
                        </button>
                        </div>
                </div>
        </div>
      </div>
    )
}
export default Homepage;