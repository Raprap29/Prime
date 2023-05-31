import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo/LogoPrimeGames.png";
const Navbar = () =>{
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [Text, setText] = React.useState([]);
    const [showBox, setshowBox] = React.useState(false);
    const [inputValue, setinputValue] = React.useState(""); 
    const dictionary = [
        {
            word: "Dead space",
            logo: "dead-space-game-box-logo.svg",
            image: "dead-space-game-box-key-art.jpg.adapt.crop1x1.767p.jpg"
        },
        {
            word: "Dead space",
            logo: "dead-space-game-box-logo.svg",
            image: "dead-space-game-box-key-art.jpg.adapt.crop1x1.767p.jpg"
        },
        {
            word: "Resident evil 4",
            logo: "redisent4.png",
            image: "4115856-residentevil4bluemedallionsguide-.jpg"
        },
        {
            word: "Fifa23",
            logo: "fifa23-logo-white-stacked.svg",
            image: "eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg"
        },
      ];
      
    const handleRemove = () =>{
        setshowBox(false);
        setinputValue("");
    }

    const SearchGame = (e) => {
        const searching = e.target.value;
        setinputValue(searching);
        if (searching) { // add null check
            const matches = dictionary.filter(item => 
                item.word.toLowerCase().startsWith(searching.toLowerCase())
            );
            if (matches.length > 0) {
                setshowBox(true);
                setText(matches.map((match) => match));
            } else {
                setshowBox(false);
                setText([]);
            }
        }else{
            setshowBox(false);
            setText([]);
        }
    }

    return (
        <nav className="flex flex-wrap items-center px-2 justify-between bg-[#111111] fixed w-screen z-50 items-center" style={{boxShadow: "0 4px 4px 2px #111111"}}>
        <div className="container px-4 mx-auto flex flex-wrap items-center">
          <div className="lg:flex flex-grow items-center" id="example-navbar-danger">
          <ul className="flex list-none items-center mx-auto container justify-between">
            <div className="flex items-center gap-x-10">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link
                    to="/"
                >
                    <img className="w-[80px]" src={Logo} alt="logo"/>
                </Link>
                <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <i className="fas fa-bars"></i>
                </button>
                </div>
                <li className="nav-item">
                    <Link
                        className="px-3 py-7 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/"
                    >
                        <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="px-3 py-7 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/about"
                    >
                        <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="px-3 py-7 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/news"
                    >
                        <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">News</span>
                    </Link>
                </li>
            </div>
            <div className="flex items-center gap-x-10">
                <li className="nav-item">
                <form class="flex items-center">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input onChange={SearchGame} value={inputValue} type="text" id="simple-search" class="w-[350px] outline-none bg-[rgba(0,0,0,0.50)] border border-black text-sm rounded-full transition duration-300 ease-in-out hover:focus:ring-blue-500 focus:border-[#fff] block pl-10 p-2.5 text-white" placeholder="Search games" />
                        <div className={`absolute top-[50px] bg-[rgba(0,0,0,0.70)] p-[20px] w-full rounded-[10px] ${showBox ? 'block' : 'hidden'}`}>
                            {Text.map((item, index) => (
                                <>
                                    <Link to="/about" className="group flex flex-col mb-[40px] mt-[20px]" onClick={handleRemove}>
                                       <div className="flex items-center justify-between">
                                            <img alt="logo" className="w-[70px] ml-[10px]" src={require(`../../Assets/Logo/${item.logo}`)} />
                                            <div>
                                                <h1 className="text-white font-bold mr-[10px]" key={index}>{item.word}</h1>
                                            </div>
                                       </div>
                                       <div className="hidden group-hover:block bg-[#fff] w-full h-[2px] mt-2"></div>
                                    </Link>   
                                </>
                            ))}
                        </div>
                    </div>
                </form>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="px-9 py-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 font-black bg-[rgba(0,0,0,0.50)] rounded-xl">SIGN IN</Link>
                </li>     
            </div>
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar;