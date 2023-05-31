import React, { useState } from "react";
import backgroundAboutVideo from "../../Assets/videoplayback.mp4"
import AboutInImages from "../../Assets/images/ea-about-sectionbg-xl.jpg.adapt.1920w.jpg";
import backgroundImgInAbout from "../../Assets/images/eacom-finance-featured-image-16x9.png.adapt.crop16x9.431p.png";
import BackgroundDesInAbout from "../../Assets/images/desktop-1024x576.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import data from "./data";
import imgLogoFooter from "../../Assets/Logo/LogoPrimeGames.png"
const About = () =>{
    const [currentPages, setCurrentPages] = useState(0);

    const HandleNext = () =>{
        setCurrentPages(currentPages + 1);  
        if(currentPages === data.length - 1){
            setCurrentPages(0);
        }
      
    }

    const HandlePrev = () =>{
        setCurrentPages(currentPages - 1);
        if(currentPages === 0){
            setCurrentPages(data.length - 1);
        }
    }
 
    return (
        <React.Fragment>
             <div className="pt-[75px] w-full h-[80vh] relative">
                <video className="w-full h-full object-cover" src={backgroundAboutVideo} autoPlay loop muted />
                <div className="absolute bg-[#000] h-[80vh] w-full top-0 z-[-1]"></div>
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[20]">
                    <p className="text-[#fff] text-[70px] font-lemon">About Us</p>
                </div>
            </div>
            <div className="h-full bg-center bg-cover bg-contain bg-no-repeat mt-10" style={{backgroundImage: `url(${AboutInImages})`}}>    
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#fff] px-4 py-2 rounded-[10px]"><p className="text-[30px] font-lemon font-black">ABOUT PRIME GAMES</p></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="pb-8 mt-7 w-[70%] rounded-[10px] h-full mb-10 font-lacquer">
                        <div className="p-8"><p className="text-justify text-black text-[20px]">Driven by passion, Prime Games is a global leader in digital interactive entertainment. Headquartered in Redwood City in Northern California, we develop and deliver high-quality games, content, and online services for Internet-connected consoles, mobile devices, and personal computers. With cutting-edge games, innovative services, and powerful technologies, we bring worlds with infinite possibilities to nearly 600 million active players and fans around the globe. Prime Games is recognized for a portfolio of critically acclaimed brands, including EA SPORTS™ FIFA, Battlefield™, Apex Legends™, The Sims™, Madden NFL, Need for Speed™, Titanfall®, and F1®.</p></div>
                    </div>
                </div>  
            </div>
            <div className="h-full bg-center bg-cover bg-contain bg-no-repeat" style={{backgroundImage: `url(${backgroundImgInAbout})`}}>    
                <div>
                   <div className="grid grid-cols-2 pb-5">
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-10"><p className="text-[35px] font-bold font-lemon text-white">Our People</p></div>
                            <div className="mt-7 w-[75%] rounded-[10px] h-full">
                                <div className="mb-10"><p className="text-justify text-black text-[20px] text-white">Everything we do is designed to inspire the world to play, and we believe we’re at our best when we listen, learn, and empower each other. We celebrate openness and curiosity and are committed to making a positive impact in the world.</p></div>
                                <div><p className="text-justify text-black text-[20px] text-white">We hire creative, collaborative, inclusive people with diverse backgrounds who enrich our culture and challenge us to be better people and better at what we do. And we nurture inclusive leaders who foster a belonging culture – a place where everyone can thrive, fulfill their potential and make the best games. Find out what makes us different.</p></div>
                            </div>
                        </div>  
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-10"><p className="text-[35px] font-bold font-lemon text-white">Our Practice</p></div>
                            <div className="mt-7 w-[75%] rounded-[10px] h-full">
                                <div className="mb-10"><p className="text-justify text-black text-[20px] text-white">We believe in the power of positive play and that being part of a gaming community should be a fun, fair, and safe experience for all. We are equally committed to building a workplace that spurs creativity and innovation and is as diverse as the communities we serve.</p></div>
                                <div><p className="text-justify text-black text-[20px] text-white">As a leading global entertainment business, we want to inspire through our actions and create a positive impact in the world. This isn’t a destination but an ongoing journey of transparency and continual progress. You can find out how we’re getting on, and read our Impact Report.</p></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="h-[100vh] bg-center bg-cover bg-contain bg-no-repeat relative" style={{backgroundImage: `url(${BackgroundDesInAbout})`}}>    
                <div className="absolute top-[50%] left-[28%] transform translate-x-[-50%] translate-y-[-50%]">
                    <div className="text-center mb-10"><p className="text-white text-[30px] font-lemon">Our ongoing values</p></div>
                    <div className="flex flex-col justify-center items-center">
                        <button onClick={HandleNext} type="button" className="border border-solid border-2 border-[#fff] rounded-[50%] p-4 mb-10"><FaAngleUp className="text-[30px] text-white" /></button>
                        {data[currentPages] && (
                            <div className="bg-[#fff] w-[60%] h-[280px] p-10">
                                <div><p className="text-black font-lemon font-bold text-[40px] mb-5">{data[currentPages].title}</p></div>
                                <div><p className="text-black text-[22px]">{data[currentPages].def}</p></div>
                            </div>
                        )}
                        <button onClick={HandlePrev} type="button" className="border border-solid border-2 border-[#fff] rounded-[50%] p-4 mt-10"><FaAngleDown className="text-[30px] text-white" /></button>
                    </div>
                </div> 
            </div>
            <footer className="bg-[#111111]  w-full  h-[80px]">
                <div className="flex mx-auto container justify-between  h-[80px] items-center w-full">
                    <div className="pl-10"><img className="w-[100px]" src={imgLogoFooter} alt="logo"/></div>
                    <div className="pr-10"><p className="text-white text-[20px]">Developed by Ralph Matthew Maglaya</p></div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default About;