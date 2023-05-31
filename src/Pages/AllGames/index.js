import React, { useState } from "react";
import backgroundHomeVideo from "../../Assets/videoplayback.mp4";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { dataGames } from "./data";
import imgLogoFooter from "../../Assets/Logo/LogoPrimeGames.png"

const AllGames = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemPerPage = 6;
    const totalItems = dataGames.length;
    const totalPages = Math.ceil(totalItems / itemPerPage);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const itemShow = dataGames.slice(startIndex, endIndex);
    const handleNextPage = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleLastClick = () => {
        setCurrentPage(totalPages);
      };
    
      const handleFirstClick = () => {
        setCurrentPage(1);
      };

      const handlePageClick = (page) => {
        setCurrentPage(page);
      };
    
      const getPaginationNumbers = () => {
        const paginationNumbers = [];
        let startPage, endPage;
    
        if (totalPages <= 3) {
          // less than 5 total pages so show all
          startPage = 1;
          endPage = totalPages;
        } else {
          // more than 5 total pages so calculate start and end pages
          if (currentPage <= 1) {
            startPage = 1;
            endPage = 3;
          } else if (currentPage + 1 >= totalPages) {
            startPage = totalPages - 2;
            endPage = totalPages;
          } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
          }
        }
    
        // add the first and last pages
        if (startPage > 1) {
          paginationNumbers.push(
            <button onClick={() =>handlePageClick(1)} className='px-7 rounded-[10px] py-2 bg-[#000] text-[#fff] hover:bg-[#FAFF00] border boder-solid border-2 hover:border-[#000] transition duration-300 ease-in-out font-bold hover:text-[#000]'>{1}</button>);
          if (startPage > 2) {
            paginationNumbers.push(  
            <button key="left-ellipsis" className="ellipsis" disabled>
            ...
          </button>);
          }
        }
    
        // create an array of pages to ng-repeat in the pager control
        for (let i = startPage; i <= endPage; i++) {
          paginationNumbers.push(
            <button onClick={() =>handlePageClick(i)} className={`px-7 rounded-[10px] py-2 border boder-solid border-2 hover:bg-[#FAFF00] hover:border-[#000] hover:text-[#000] font-bold transition duration-300 ease-in-out ${currentPage === i ? 'bg-[#FAFF00] text-[#000] font-bold border boder-solid border-2 border-[#000]' : 'bg-[#000] text-[#fff]'}`}>{i}</button>
          );
        }
    
        // add the last page
        if (endPage < totalPages) {
          if (endPage < totalPages - 1) {
            paginationNumbers.push(
                <button key="left-ellipsis" className="ellipsis" disabled>
                ...
              </button>
            );
          }
          paginationNumbers.push(
            <button onClick={() =>handlePageClick(totalPages)}  className='px-7 rounded-[10px] py-2 bg-[#000] text-[#fff] hover:bg-[#FAFF00] border boder-solid border-2 hover:border-[#000] transition duration-300 ease-in-out font-bold hover:text-[#000]'>{totalPages}</button>);
        }
    
        return paginationNumbers;
      };

     return(
        <React.Fragment>
            <div className="pt-[75px] w-full h-[80vh] relative">
                <video className="w-full h-full object-cover" src={backgroundHomeVideo} autoPlay loop muted />
                <div className="absolute bg-[#000] h-[80vh] w-full top-0 z-[-1]"></div>
            </div>
              <div className="w-full h-[70px] bg-[#DEDEDE]" style={{boxShadow: "inset 0 -3px 10px 0 rgba(0, 0, 0, .25), -3px 0 10px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}}>
                <div className="flex justify-center items-center h-[70px] p-5">
                    <div className="group h-full">
                        <Link to="/" className="text-black font-semibold w-full h-full px-10 py-7" style={{fontFamily: "lemon, cursive"}}>Latest Games</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full scale-x-0 group-hover:scale-100 transition duration-300 ease-in-out h-[6px] bg-[#FF7A00] rounded-full"></div>
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
                        <Link to="/allgames" className="text-black px-10 py-7 font-semibold pointer-events-none" style={{fontFamily: "Lemon, cursive"}}>All Games</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full h-[6px] bg-[#FF7A00] rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                </div>
            </div>
            <div className="container mx-auto">
            <div className="flex justify-center items-center mt-8">
                <p className="px-[70px] py-4 bg-[#05D61A] text-[#fff] font-gillsanbold rounded-[20px] text-[20px] border-2 border-solid border-[#CAF64A]" style={{boxShadow: "inset 0 -3px 10px 0 rgba(0, 0, 0, .25), -3px 0 10px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}}>
                    ALL GAMES
                </p>
            </div>
                <div className="h-[99vh] flex-col flex items-center">
                   <div className="grid grid-cols-3 gap-[40px] mt-8">
                        {itemShow.map((items, index)=>(
                            <div key={index} className="group relative bg-cover h-[300px] w-[250px] flex flex-col items-center" style={{backgroundImage: `url(${require(`../../Assets/images/${items.image}`)})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
                                <div className="bg-[rgba(0,0,0,0.60)] w-full h-full absolute top-0"></div>
                                <img className="h-[150px] w-[150px] z-[2]" src={require(`../../Assets/Logo/${items.logo}`)} alt="logo" />
                                <Link className="absolute bottom-10 text-white p-1 flex justify-center items-center border border-solid border-[5px] border-[#FFF] rounded-[50px]">
                                    <FaAngleRight className="text-[40px]" />
                                    <span className="opacity-0 group-hover:opacity-100 w-0 group-hover:w-full transition duration-300 overflow-hidden">Download</span>
                                </Link>
                            </div>
                        ))}
                   </div>
                </div>
                <div className="flex justify-center items-center p-8 gap-5">
                    {currentPage < 4 ? "" : <button onClick={handleFirstClick} className="bg-[#000] hover:bg-[#FAFF00] border boder-solid border-2 border-[#000] hover:border-[#000] transition duration-300 ease-in-out rounded-[10px] text-[#fff] px-7 py-2 font-bold hover:text-[#000]">First</button>}
                    {currentPage === 1 ? "" : <button onClick={handlePrevPage} className="bg-[#000] hover:bg-[#FAFF00] border boder-solid border-2 border-[#000] hover:border-[#000] transition duration-300 ease-in-out rounded-[10px] text-[#fff] px-7 py-2 font-bold hover:text-[#000]">Prev</button>}
                    {getPaginationNumbers().map((page)=>(
                        <div>{page}</div>
                    ))}
                   {currentPage === totalPages ? "" :  <button onClick={handleNextPage} className="bg-[#000] hover:bg-[#FAFF00] border boder-solid border-2 border-[#000] hover:border-[#000] transition duration-300 ease-in-out rounded-[10px] text-[#fff] px-7 py-2 font-bold hover:text-[#000]">Next</button>}
                    {currentPage < totalPages - 2 ? <button onClick={handleLastClick} className="bg-[#000] hover:bg-[#FAFF00] border boder-solid border-2 border-[#000] hover:border-[#000] transition duration-300 ease-in-out rounded-[10px] text-[#fff] px-7 py-2 font-bold hover:text-[#000]">Last</button> : ""}
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

export default AllGames;