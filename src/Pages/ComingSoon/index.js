import React, { useState } from "react";
import backgroundHomeVideo from "../../Assets/videoplayback.mp4";
import { Link } from "react-router-dom";
import dataComming from "../ComingSoon/data";
const ComingSoon = () =>{
    const [currentPage, setCurrentPage] = useState(1);

    const itemPerPage = 6;
    const totalItems = dataComming.length;
    const totalPages = Math.ceil(totalItems / itemPerPage);
    
    const startIndex = (currentPage - 1) * itemPerPage;
    const lastIndex = startIndex + itemPerPage;
    const itemShowCom = dataComming.slice(startIndex, lastIndex);
    
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
                        <Link to="/comingsoon" className="text-black px-10 py-7 font-semibold pointer-events-none" style={{fontFamily: "Lemon, cursive"}}>Coming Soon</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full h-[6px] bg-[#FF7A00] rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                    <div className="group h-full">
                        <Link to="/allgames" className="text-black font-semibold w-full h-full px-10 py-7" style={{fontFamily: "lemon, cursive"}}>All Games</Link>
                        <div className="px-6 mt-2">
                            <div className="content-none w-full scale-x-0 group-hover:scale-100 transition duration-300 ease-in-out h-[6px] bg-[#FF7A00] rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-[rgba(0,0,0,0.50)]"></div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-center items-center mt-8">
                    <p className="px-[70px] py-4 bg-[#05D61A] text-[#fff] font-gillsanbold rounded-[20px] text-[20px] border-2 border-solid border-[#CAF64A]" style={{boxShadow: "inset 0 -3px 10px 0 rgba(0, 0, 0, .25), -3px 0 10px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}}>
                       COMING SOON
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center mt-[40px]">
                <div className="mx-auto grid grid-cols-2 justify-center items-center gap-[40px]">
                    {itemShowCom.map((item,index)=>(
                        <div key={index}>
                            <div className="w-[300px] h-[350px]"><img className="w-full h-full" src={require(`../../Assets/images/${item.img}`)} alt="logo" /></div>
                            <div className="w-[300px] flex flex-col gap-[5px]">
                                <div className="mt-[4px]">
                                    <p className="font-bold">{item.title}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Release Date: {item.releaseDate}</p>
                                    <div className="bg-[#D9D9D9] w-full h-[10px] mt-[5px]"></div>
                                </div>
                                <div>
                                    <p className="font-bold">Type: {item.type}</p>
                                    <div className="bg-[#D9D9D9] w-full h-[10px] mt-[5px]"></div>
                                </div>
                                <div>
                                    <p className="font-bold">Publisher: {item.Publisher}</p>
                                    <div className="bg-[#D9D9D9] w-full h-[10px] mt-[5px]"></div>
                                </div>
                                <Link to="/" className="py-3 text-center text-[#000] font-bold mt-3 text-[20px] border-[2px] rounded-[10px] border border-solid border-[#000] hover:shadow-[inset_0px_500px_0px_0px_#000] hover:text-[#fff] transition duration-300 ease-in-out shadow-[inset_0px_0px_0px_0px_#000]">Visit Site</Link>
                            </div>
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
        </React.Fragment>
    )
}

export default ComingSoon;