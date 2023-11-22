"use client"
import useMediaQuery from "../hooks/useMediaQuery";
import Image from 'next/image'
import { Center, Button, Text} from "@mantine/core";

const Homepage = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
    <div className="w-full mx-auto md:h-full">
         {/* HERO SECTION   */}
        <div id="hero" className="md:flex md:justify-between 
        md:items-center md:h-full py-10 bg-hero-pattern bg-cover w-full
        min-h-[400px] md:min-h-[600px]">
            <div style={{width: "80vw", margin: "0 auto"}}>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', paddingTop: 20}}>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 120, marginTop: 20}}>
                            <div style={{width: 230, height: 230, marginTop: 60, borderTop: "1px solid #6B0058", borderBottom: "1px solid #6B0058"}}>
                                <div style={{marginTop: 50}}>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>Buffet Hours</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>11:00 am to 3:00 pm</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>Dinner Hours</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>5:00 pm to 10:00 pm</Text>                                
                                </div>
                            </div>
                            <div style={{alignItems: "center"}}>
                                <Center>
                                    <Image src= {require("../assets/preethi-logo.png")} width={500} height={400}></Image>
                                </Center>
                                <Center style={{padding: "10px 20px", display: "flex", flexDirection: "row", gap: 24}}>
                                    <Button style={{fontFamily: "Unna", fontsize: 16, height: 40, width: 180, borderRadius: 50, background: "#6B0058"}}>Explore Our Menu</Button>
                                    <Button style={{fontFamily: "Unna", fontsize: 16, height: 40, width: 180, borderRadius: 50, background: "#6B0058"}}>Our Buffet Menu</Button>
                                </Center>
                            </div>
                            <div style={{width: 230, height: 230, marginTop: 60, borderTop: "1px solid #6B0058", borderBottom: "1px solid #6B0058"}}>
                                <div style={{marginTop: 60}}>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>Open Daily</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>715 2nd St, Davis,</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>CA, 95616</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/* OUR PROCESS  */}
        <div className="w-5/6 mx-auto md:h-full mt-10">
            <div className="flex flex-row space-x-5 justify-center items-center text-center mb-5">
                <Image alt = "flower"
                        className=" max-w-[35px] md:max-w-[45px] max-h-[39px] md:max-h-[49px]"
                        src = {require("../assets/flower.png")}/>       
                <p className="text-3xl font-unna flex text-center justify-center items-center
                text-purple font-bold"> Our Process</p>
                <Image alt = "flower"
                        className="max-w-[35px] md:max-w-[45px] max-h-[39px] md:max-h-[49px]"
                        src = {require("../assets/flower.png")}/>
            </div>
        <p className = "mb-5 text-sm font-unna text-center text-purple font-bold">
            SAVOR THE AUTHENTICITY
        </p>
        <div className="flex flex-wrap justify-between">
            {/* First Column/Row */}
            <div className="w-full md:w-1/3 mb-4 px-4">
                <div className="flex justify-center items-center text-center 
                font-unna text-black flex-row md:flex-col">
                    <div>
                    <Image alt = "organic"
                        className="flex justify-center items-center max-w-[200px] 
                        md:max-w-[300px] max-h-[300px] md:max-h-[400px]"
                        src = {require("../assets/organic.png")}/>
                    </div>
                    <div className="px-8 md:px-16">
                    <p className="mt-5 mb-5 font-bold text-base"> Organic </p>
                    <p>We take pride in every dish, drink, dosa, and dessert 
                        we make and use organic ingredients</p>
                    </div>
                </div>
            </div>

            {/* Second Column/Row */}
            <div className="w-full md:w-1/3 mb-4 px-4">
                <div className="flex justify-center items-center 
                font-unna text-black text-center flex-row md:flex-col">
                    <div>
                    <Image alt = "homemage"
                        className="justify-center flex items-center max-w-[200px] 
                        md:max-w-[300px] max-h-[300px] md:max-h-[400px]"
                        src = {require("../assets/homemade.png")}/>
                    </div>
                    <div className="px-8 md:px-16">
                    <p className="mt-5 mb-5 font-bold text-base"> Homemade </p>
                    <p>Our two primary chefs are made up of a husband and wife 
                        team who lovingly make homemade dishes</p>
                    </div>
                </div>
            </div>

            {/* Third Column/Row */}
            <div className="w-full md:w-1/3 mb-4 px-4">
                <div className="flex justify-center items-center 
                font-unna text-black text-center flex-row md:flex-col">
                    <div>
                    <Image alt = "order"
                        className="justify-center flex items-center max-w-[200px] 
                        md:max-w-[300px] max-h-[300px] md:max-h-[400px]"
                        src = {require("../assets/order.png")}/>
                    </div>
                    <div className="px-8 md:px-16">
                    <p className="mt-5 mb-5 font-bold text-base"> Made-To-Order </p>
                    <p>Each individual dish are made-to-order and prepared 
                        correctly according to traditions</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* CATERING SECTION   */}
      <div id="cater" className="md:flex md:justify-between 
        md:items-center gap-16 py-10 w-5/6 mx-auto md:h-full">
            {/* CATERING IMAGE SECTION */}
            <div className="md:order-2 flex justify-center mt-5 md:mt-10 py-10">
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
                <div className="mt-5 md:mt-10">
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