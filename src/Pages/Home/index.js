import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {dataFeatured, DataLatestGames} from "./data";
import AboutInImages from "../../Assets/images/roT4xZB.jpg";
import imgLogoFooter from "../../Assets/Logo/LogoPrimeGames.png"
import AboutLogoImages from "../../Assets/images/ImgGames.png";
import { Link } from "react-router-dom";
const Home = ()=>{
   
    const data = [
        {
            video: "videoplayback.mp4",
            logo: "Assassins-Creed-Logo.png"
        },
        {
            video: "videoplaybackGta.mp4",
            logo: "gta5.png"
        },
        {
            video: "Resident4Evil.mp4",
            logo: "redisent4.png"
        },
        {
            video: "Call of Duty_ Modern Warfare II - World Gameplay Reveal Trailer (720p).mp4",
            logo: "CDMW2.png"
        }
    ]
    const [Video, setVideo] = useState(0);

    const NextVideo = (e) => {
    e.preventDefault();
    setVideo(Video + 1);
    if(Video === data.length - 1){
        setVideo(0);
    }
    };

    const PrevVideo = (e) => {
    e.preventDefault();
    setVideo(Video - 1);
    if(Video === 0){
        setVideo(data.length - 1);
    }
    };

    return(
        <React.Fragment>
             {data[Video] && (
            <div className="pt-[75px] w-full h-[70vh] relative">
                <video className="w-full h-full object-cover blur-lg" src={require(`../../Assets/${data[Video].video}`)} autoPlay loop muted />
                <div className="absolute bg-[#000] h-[70vh] w-full top-0 z-[-1]"></div>
                <div className="w-[80%] h-[80%] absolute top-[90%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}}>
                        <video className="w-full h-full object-cover rounded-[8px]" src={require(`../../Assets/${data[Video].video}`)} autoPlay loop muted />
                    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] border-solid border-2 border-[#fff] w-[98%] h-[95%] rounded-[10px] flex justify-between">
                        <div className="h-full w-[160px] relative">
                            <button onClick={PrevVideo} className="bg-[rgba(0,0,0,0.40)] h-full w-[160px] flex justify-center items-center text-[55px] text-[#FFD700] opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                                < FaAngleLeft />
                            </button>
                        </div>
                        <div className="w-[50%] h-[70%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"><img className="w-full h-full" src={require(`../../Assets/Logo/${data[Video].logo}`)} alt="logo" /></div>
                        <button onClick={NextVideo} className="bg-[rgba(0,0,0,0.40)] h-full w-[160px] flex justify-center items-center text-[55px] text-[#FFD700] opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                            <FaAngleRight />
                        </button>
                    </div>
                    <div className="absolute top-[89%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <div className="flex justify-center items-center gap-[20px]">
                        {data.map((_, index) => (
                        <div
                            key={index}
                            className={`bg-[${Video === index ? '#000' : '#FFF'}] w-4 h-4 rounded-full`}
                        ></div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
             )}
            <div className="mt-[11rem] container mx-auto pb-9">
                <div className="flex items-center gap-4"><p className="font-bold text-[22px]">FEATURED NEWS</p><div className="content-none bg-[#000] w-[50px] h-[3px]"></div></div>
                <div className="flex justify-center items-center gap-10 mt-5 flex-wrap">
                    {dataFeatured.map((item, index)=>(
                        <div key={index} className="group w-[350px] h-[400px] relative overflow-hidden" style={{boxShadow: "5px 5px 10px 3px rgba(0,0,0,.50)"}}>
                            <img className="w-full h-full object-cover rounded-[5px] flex-wrap" src={require(`../../Assets/images/${item.image}`)} alt="features" />
                            <div className="rounded-[5px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] border-solid border-2 border-[#CCBBBB] w-[86%] h-[86%]">
                                <div className="translate-y-[45%] group-hover:translate-y-[-22%] p-5 transition duration-500 ease-in-out flex flex-col justify-center w-full h-full">
                                    <p className="italic text-white text-[20px] font-bold">{item.gameName}</p>
                                    <div className="content-none bg-[#fff] h-[3px] w-full mt-1"></div>
                                    <p className="translate-y-[500%] group-hover:translate-y-[0%] text-white transition duration-500 ease-in-out mt-5">{item.content}</p>
                                    <div className="absolute bottom-0">
                                        <Link to="/" className="text-white">Read more</Link>
                                        <div className="content-none bg-[#fff] w-full h-[3px]"></div>
                                    </div>
                                </div>
                                <div className="rounded-[5px] opacity-0 group-hover:opacity-100 w-full absolute top-0 h-full bg-[rgba(0,0,0,0.70)] transition duration-500 ease-in-out z-[-1]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
  
            <div className="w-full h-[70px] bg-[#DEDEDE]" style={{boxShadow: "inset 0 -3px 10px 0 rgba(0, 0, 0, .25), -3px 0 10px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}}>
                <div className="flex justify-center items-center h-[70px] p-5">
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                    <div className="group h-full">
                        <Link to="/" className="text-black px-10 py-7 font-semibold pointer-events-none" style={{fontFamily: "Lemon, cursive"}}>Latest Games</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full h-[6px] bg-[#FF7A00] rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                    <div className="group h-full">
                        <Link to="/comingsoon" className="text-black font-semibold w-full h-full px-10 py-7" style={{fontFamily: "lemon, cursive"}}>Coming Soon</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full scale-x-0 group-hover:scale-100 transition duration-300 ease-in-out h-[6px] bg-[#FF7A00] rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                    <div className="group h-full">
                        <Link to="/allgames" className="text-black px-10 py-7 font-semibold" style={{fontFamily: "Lemon, cursive"}}>All Games</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full scale-x-0 group-hover:scale-100 transition duration-300 ease-in-out h-[6px] bg-[#FF7A00] rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                </div>
            </div>
                <div className="mx-auto container">
                    <div className="flex justify-center items-center w-full"><p className="p-5 text-[40px] font-bold italic" style={{fontFamily: "Lemon, cursive"}}>Latest Games</p></div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap gap-10 justify-center">
                            {DataLatestGames.map((item,index)=>(
                                 <div key={index} className="group w-[350px] h-[440px] relative overflow-hidden rounded-[5px]" style={{boxShadow: "inset 0 -3px 10px 0 rgba(0, 0, 0, .60), 6px 6px 6px 0px rgba(0,0,0,0.50) "}}>
                                 <img src={require(`../../Assets/images/${item.images}`)} alt="images" className="w-full h-full object-cover rounded-[5px]"/>
                                 <div className="w-full h-full bg-[rgba(0,0,0,0.60)] absolute top-0 scale-y-0 group-hover:scale-y-100 transition duration-200 ease-in-out"></div>
                                 <div className="absolute group-hover:translate-y-[-250%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] transition duration-500 ease-in-out">
                                     <img src={require(`../../Assets/images/${item.logo}`)} alt="logo" className="w-[150px]"/>
                                     <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[150%]">
                                         <div className="scale-y-0 flex justify-center group-hover:scale-y-100 transition duration-500 ease-in-out"><Link to={item.link} className="text-center font-bold rounded-[5px] border-solid border-[3px] border-[#fff] w-[200px] py-3 text-[#fff] transition duration-500 ease-in-out hover:bg-[#000]">Visit Site</Link></div>
                                         <div className="content-none bg-[#fff] scale-y-0 w-full h-[4px] mt-2 rounded-full group-hover:scale-y-100 transition duration-500 ease-in-out"></div>
                                     </div>
                                 </div>
                             </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center items-center"><Link to="/" className="px-10 py-4 border-[3px] border-[#000] border-solid rounded-[10px] text-[20px] transition duration-500 ease-in-out hover:text-white font-black shadow-[inset_0px_0px_0px_#000] hover:shadow-[inset_230px_0px_0px_#000]" style={{fontFamily: "Lemon, cursive"}}>View All Games</Link></div>
                </div>
                <div className="h-full bg-cover bg-no-repeat bg-center mt-10 shadow-[inset_0px_60px_150px_0px_#fff]" style={{backgroundImage: `url(${AboutInImages})`}}>
                    <div className="mx-auto container">
                        <div className="flex flex-col justify-center items-center">
                            <div><img src={AboutLogoImages} className="w-[200px]" alt="logoA"/></div>
                            <div className="bg-[#fff] px-4 py-2 rounded-[10px]"><p className="text-[30px] lemon font-black" style={{fontFamily: "Lemon, cursive"}}>ABOUT PRIME GAMES</p></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[rgba(0,0,0,.70)] pb-8 mt-7 w-[70%] rounded-[10px] h-full mb-10">
                                <div className="p-8"><p className="text-justify leading-[40px] text-white text-[20px]" style={{fontFamily: "Lacquer, cursive;"}}>Driven by passion, Prime Games is a global leader in digital interactive entertainment. Headquartered in Redwood City in Northern California, we develop and deliver high-quality games, content, and online services for Internet-connected consoles, mobile devices, and personal computers. With cutting-edge games, innovative services, and powerful technologies, we bring worlds with infinite possibilities to nearly 600 million active players and fans around the globe. Prime Games is recognized for a portfolio of critically acclaimed brands, including EA SPORTS™ FIFA, Battlefield™, Apex Legends™, The Sims™, Madden NFL, Need for Speed™, Titanfall®, and F1®.</p></div>
                                <div className="flex justify-center items-center mt-[-20px] flex-col">
                                    <Link className="group bg-[rgba(175,178,0)] px-10 p-3 rounded-[10px] font-black text-white text-[18px] hover:shadow-[inset_0px_500px_0px_0px_#000] transition duration-300 ease-in-out shadow-[inset_0px_0px_0px_0px_#000] hover:text-[#FFFF00]">
                                        VIEW MORE
                                        <div className="content-none bg-[#fff] w-full h-[3px] group-hover:bg-[#FFFF00]"></div>
                                    </Link>
                                </div>
                            </div>
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

export default Home;