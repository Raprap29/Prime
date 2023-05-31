import React from "react";
import BgNews from "../../Assets/images/hero-medium-console-7x2-xl.jpg.adapt.crop7x2.1920w.jpg";
import test from "../../Assets/images/4115856-residentevil4bluemedallionsguide-.jpg"
import ads from "../../Assets/images/3054198974460061172.jfif";
import latestImg from "../../Assets/images/diablo-fan-discount-store-find.png";
import imgLogoFooter from "../../Assets/Logo/LogoPrimeGames.png"
const News = () =>{
    return(
        <React.Fragment>
            <div className="pt-[75px] w-full h-[70vh] relative">
                <img className="w-full h-full object-cover" src={BgNews} alt="bg" />
                <div className="absolute bg-[#000] h-[70vh] w-full top-0 z-[-1]"></div>
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[20]">
                    <p className="text-[#fff] text-[70px] font-gillsanbold">GAMING NEWS</p>
                    <div className="flex justify-center">
                        <div className="bg-[#fff] w-[70%] h-[10px]"></div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-5 gap-4 mx-auto container mt-10">
                <div class="col-span-2 relative">
                    <img src={test} class="h-[370px] w-full object-cover rounded-[10px]" style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}} alt="Large" />
                    <div class="absolute bottom-0 left-[20px] w-[320px] h-[100px]">
                        <p class="text-white text-[20px] font-bold">Resident Evil 4 All Blue Medallions Guide</p>
                        <div className="bg-[#fff] w-full h-[5px] mt-[8px]"></div>
                    </div>
                </div>
                <div class="col-span-3 grid grid-cols-2 gap-5">
                    <div class="relative">
                        <img src={test} class="h-[175px] w-full object-cover rounded-[10px]" style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}} alt="Small" />
                        <div class="absolute top-[87px] left-[20px] w-[320px] h-full">
                            <p class="text-white text-[20px] font-bold">Resident Evil 4 All Blue Medallions Guide</p>
                            <div className="bg-[#fff] w-full h-[5px] mt-[8px]"></div>
                        </div>
                    </div>
                    <div class="relative">
                        <img src={test} class="h-[175px] w-full object-cover rounded-[10px]" style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}} alt="Small" />
                        <div class="absolute top-[87px] left-[20px] w-[320px] h-full">
                            <p class="text-white text-[20px] font-bold">Resident Evil 4 All Blue Medallions Guide</p>
                            <div className="bg-[#fff] w-full h-[5px] mt-[8px]"></div>
                        </div>
                    </div><div class="relative">
                        <img src={test} class="h-[175px] w-full object-cover rounded-[10px]" style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}} alt="Small" />
                        <div class="absolute top-[87px] left-[20px] w-[320px] h-full">
                            <p class="text-white text-[20px] font-bold">Resident Evil 4 All Blue Medallions Guide</p>
                            <div className="bg-[#fff] w-full h-[5px] mt-[8px]"></div>
                        </div>
                    </div><div class="relative">
                        <img src={test} class="h-[175px] w-full object-cover rounded-[10px]" style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}} alt="Small" />
                        <div class="absolute top-[87px] left-[20px] w-[320px] h-full">
                            <p class="text-white text-[20px] font-bold">Resident Evil 4 All Blue Medallions Guide</p>
                            <div className="bg-[#fff] w-full h-[5px] mt-[8px]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full mt-10 mb-5">
                <div className="max-w-[800px] mx-auto">
                    <img src={ads} className="rounded-[5px] border border-solid border-4 border-[#000]"  style={{boxShadow: "inset 0 -3px 20px 0px rgba(0,0,0,0.50), 5px 5px 10px 0 rgb(0,0,0)"}} alt="ads" />
                </div>
            </div>
            <div className="mx-auto container max-w-[1100px]">
                <div>
                    <span className="font-gillsanbold text-[30px] border-b-[7px] border-gray-500">LATEST</span>
                </div>
                <div className="mt-10">
                    <div className="flex gap-x-[20px]">
                        <img src={latestImg} alt="newsImg" />
                        <div className="relative">
                            <h1 className="font-gillsanbold text-[25px] underline">Diablo Fan Makes Incredible Find at Discount Store</h1>
                            <p className="text-[20px] font-bold mt-2">During a visit to a discount store, a Diablo fan takes home an incredible item, and fellow players are just as excited with the discovery.</p>
                            <p className="absolute bottom-[10px] text-[20px]">By <span className="underline font-bold">Jackie Arias</span></p>
                        </div>
                    </div>
                    <div className="bg-[#D2D2D2] w-full h-[4px] mt-[36px] mb-8"></div>
                    <div className="flex gap-x-[20px]">
                        <img src={latestImg} alt="newsImg" />
                        <div className="relative">
                            <h1 className="font-gillsanbold text-[25px] underline">Diablo Fan Makes Incredible Find at Discount Store</h1>
                            <p className="text-[20px] font-bold mt-2">During a visit to a discount store, a Diablo fan takes home an incredible item, and fellow players are just as excited with the discovery.</p>
                            <p className="absolute bottom-[10px] text-[20px]">By <span className="underline font-bold">Jackie Arias</span></p>
                        </div>
                    </div>
                    <div className="bg-[#D2D2D2] w-full h-[4px] mt-[36px] mb-8"></div>
                    <div className="flex gap-x-[20px]">
                        <img src={latestImg} alt="newsImg" />
                        <div className="relative">
                            <h1 className="font-gillsanbold text-[25px] underline">Diablo Fan Makes Incredible Find at Discount Store</h1>
                            <p className="text-[20px] font-bold mt-2">During a visit to a discount store, a Diablo fan takes home an incredible item, and fellow players are just as excited with the discovery.</p>
                            <p className="absolute bottom-[10px] text-[20px]">By <span className="underline font-bold">Jackie Arias</span></p>
                        </div>
                    </div>
                    <div className="mt-[36px] mb-4"></div>          
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

export default News;