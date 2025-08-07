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
        <div className=''>
            <section className='sticky top-0 w-full flex items-center justify-between px-4 bg-[#A89F94] shadow-md z-50'>
                <img className='h-23' src={IMAGE_URL} alt="logo" />
                <button className='p-4'>
                <i className="fa-solid fa-bars text-3xl text-[#D9D9D9]" onClick={toggleMenu} aria-label='Toggle Navigation'></i>
                </button>
            </section>
            <nav className = {`" absolute top-0 z-50 border-t border-[#d9d9d9] border-opacity-25 left-0 w-full text-[#D9D9D9] transition delay-150 duration-500 ease-in-out  " ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <ul className = "flex flex-col pt-5 pb-5 text-3xl bg-[#A89F94]">    
                    <Link
                        to="/"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]' onClick={toggleMenu}>
                            <li className = "">
                                Home
                            </li>   
                        </button>
                     </Link>
                    <Link
                        to="/about"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]' onClick={toggleMenu}>
                            <li className = "">
                                About
                            </li>   
                        </button>
                     </Link>
                    <Link
                        to="/courses"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]' onClick={toggleMenu}>
                            <li className = "">
                                Courses
                            </li>   
                        </button>
                    </Link>
                    <Link
                        to="/contact"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]' onClick={toggleMenu}>
                            <li className = "">
                                Contact
                            </li>   
                        </button>
                    </Link>
                    <Link
                        to="/resources"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                        >
                        <button className='w-full p-3 hover:bg-[#81292D] focus:bg-[#81292D]' onClick={toggleMenu}>
                            <li className = "">
                                Resources
                            </li>
                        </button>   
                    </Link>
                </ul>

                <button className=' bg-black opacity-80 left-50 rounded-full'>
                    <i className=" fa-solid fa-xmark text-2xl p-3 w-full " onClick={toggleMenu} aria-label='Close Navigation'></i>
                </button>
               
            </nav>
        </div>
    );
}

export default NavTabs; 