import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../constants';
import { useState } from 'react';

function NavTabs() {
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex'>
            <section className='flex items-center justify-between w-full px-4 py-2 fixed top-0 left-0 w-full bg-[#A89F94] shadow-md z-50'>
                <img className='h-23' src={IMAGE_URL} alt="logo"></img>
                <button className='flex items-center'>
                <i className="fa-solid fa-bars text-3xl text-[#D9D9D9] p-4" onClick={toggleMenu} aria-label='Toggle Navigation'></i>
                </button>

            </section>
            <nav className = {`"flex flex-col fixed z-30 top-19 border-t w-full border-[#d9d9d9] border-opacity-25 left-0 w-full h-100 text-[#D9D9D9] transition delay-150 duration-500 ease-in-out  " ${isOpen ? "translate-y-0" : "translate-y-[-800%]"}`}>
                <ul className = "pt-5 pb-5 text-3xl bg-[#A89F94] flex flex-col">    
                    <Link
                        to="/about"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]'>
                            <li className = "">
                                About
                            </li>   
                        </button>
                     </Link>
                    <Link
                        to="/courses"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]'>
                            <li className = "">
                                Courses
                            </li>   
                        </button>
                    </Link>
                    <Link
                        to="/contact"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]'>
                            <li className = "">
                                Contact
                            </li>   
                        </button>
                    </Link>
                    <Link
                        to="/resources"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]'>
                            <li className = "">
                                Resources
                            </li>
                        </button>   
                    </Link>
                </ul>

                <button className='absolute bg-black opacity-80 left-50 rounded-full'>
                    <i className="relative fa-solid fa-xmark text-2xl p-3 w-full " onClick={toggleMenu} aria-label='Close Navigation'></i>
                </button>
               
            </nav>
        </div>
    );
}

export default NavTabs; 