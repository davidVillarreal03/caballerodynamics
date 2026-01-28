import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../constants';
import { useState } from 'react';

function NavTabs() {
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
        setIsOptionsOpen(false);
    }
    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    }

    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

const toggleResources = () => {
  setIsResourcesOpen((prev) => !prev);
};



    return (
        <div className='' id='top'>
                <section className='sticky top-0 w-full flex items-center justify-between px-4 bg-[#A89F94] shadow-md z-50'>
           <Link to="/">
                    <img className='h-23' src={IMAGE_URL} alt="logo" />
           </Link>
                    <button className='p-4'>
                    <i className="fa-solid fa-bars text-3xl text-[#D9D9D9]" onClick={toggleMenu} aria-label='Toggle Navigation'></i>
                    </button>
                </section>
            <nav className = {`" absolute z-30 border-t border-[#d9d9d9] border-opacity-25 left-0 w-full text-[#D9D9D9] transition delay-150 duration-500 ease-in-out  " ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <ul className = "flex flex-col items-start justify-start text-3xl bg-[#A89F94]">    
                    <li className="w-full">
                        <Link
                            to="/"
                            onClick={toggleMenu}
                            className={`block w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D] ${
                            currentPage === "/" ? "nav-link active" : "nav-link"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            to="/about"
                            onClick={toggleMenu}
                            className={`block w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D] ${
                            currentPage === "/" ? "nav-link active" : "nav-link"
                            }`}
                        >
                            About
                        </Link>
                    </li>

                        <li className="w-full">
                        <button
                            onClick={toggleOptions}
                            aria-expanded={isOptionsOpen}
                            aria-controls="courses-submenu"
                            className="w-full px-3 py-3 sm:py-4 flex items-center justify-center hover:bg-[#81292D] focus:bg-[#81292D] focus:outline-none focus:ring-2 focus:ring-[#f8f6f0]/50"
                        >
                            <span>Courses</span>
                            <i
                            className={`fa-solid fa-caret-down m-1 text-xl relative top-[1px] transition-transform duration-300 ${
                                isOptionsOpen ? "rotate-180" : ""
                            }`}
                            />
                        </button>



                        <ul
                            className={`overflow-hidden transition-all duration-300 bg-[#9f968b]
                            ${isOptionsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
                            `}
                        >
                            {[
                                ["LTC", "/courses/ltc"],
                                ["Fundamentals", "/courses/pistol"],
                                ["Concealed Carry", "/courses/carry"],
                                ["Defensive Carbine", "/courses/carbine"],
                                ["Defensive Shotgun", "/courses/shotgun"],
                                ["Explosive Movement", "/courses/explosive"],
                                ["Marksman", "/courses/marksman"],
                                ].map(([label, path]) => (
                                <li key={path} className="w-full">
                                    <Link
                                    to={path}
                                    onClick={toggleMenu}
                                    className="block w-full pl-8 pr-9 py-3 hover:bg-[#81292D] focus:bg-[#81292D]"
                                    >
                                    {label}
                                    </Link>
                                </li>
                                ))}

                        </ul>
                        </li>
                      <li className="w-full">
  {/* Resources toggle */}
  <button
    onClick={toggleResources}
    aria-expanded={isResourcesOpen}
    aria-controls="resources-submenu"
    className="w-full px-3 py-3 flex items-center justify-center gap-2 hover:bg-[#81292D] focus:bg-[#81292D]"
  >
    <span className="leading-none">Resources</span>
    <i
      className={`fa-solid fa-caret-down text-xl relative top-[1px] transition-transform duration-300 ${
        isResourcesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* Resources submenu */}
  <ul
    id="resources-submenu"
    className={`overflow-hidden transition-all duration-300 bg-[#9f968b]
      ${isResourcesOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
    `}
  >
    <li>
      <a
        href="https://www.dps.texas.gov/section/handgun-licensing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggleMenu}
        className="block w-full pl-8 pr-9 py-3 hover:bg-[#81292D]"
      >
        LTC
      </a>
    </li>

    <li>
      <a
        href="https://angelfireammo.com/#spencer"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggleMenu}
        className="block w-full pl-8 pr-9 py-3 hover:bg-[#81292D]"
      >
        Bulk Ammo
      </a>
    </li>
  </ul>
</li>




                    {/* </Link> */}
                    {/* <Link
                        to="/contact"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]' onClick={toggleMenu}>
                            <li className = "">
                                Contact
                            </li>   
                        </button>
                    </Link> */}
                    {/* <li className="w-full">
                        <Link
                            to="/resources"
                            onClick={toggleMenu}
                            className="block w-full p-3 border-b border-[#d9d9d9] border-opacity-25 hover:bg-[#81292D] focus:bg-[#81292D]"
                        >
                            Resources
                        </Link>
                    </li> */}

                </ul>

                <button className=' bg-black opacity-80 left-50 rounded-full'>
                    <i className=" fa-solid fa-xmark text-2xl p-3 w-full " onClick={toggleMenu} aria-label='Close Navigation'></i>
                </button>
               
            </nav>
        </div>
    );
}

export default NavTabs; 