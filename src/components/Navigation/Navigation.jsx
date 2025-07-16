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
            <section className='flex items-center justify-between w-full px-4 py-2 fixed top-0 left-0 w-full bg-[#A89F94] shadow-md'>
                <img className='h-15' src={IMAGE_URL} alt="logo"></img>
                <button className='flex items-center'>
                <i className="fa-solid fa-bars text-2xl text-[#D9D9D9] p-4" onClick={toggleMenu} aria-label='Toggle Navigation'></i>
                </button>

            </section>
            <nav className = {`"flex flex-col fixed bottom-0 left-0 w-full h-100 text-[#D9D9D9] transition delay-150 duration-300 ease-in-out  " ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
                <i className="fa-solid fa-xmark text-2xl p-3 w-full " onClick={toggleMenu} aria-label='Close Navigation'></i>
                <ul className = "pt-5 pb-40 text-3xl bg-[#A89F94] ">    
                    <li className = "w-full pt-4 pb-4">
                        <Link
                            to="/"
                            className={currentPage === "/" ? "nav-link active" : "nav-link"}
                            >
                            About
                        </Link>
                    </li>   
                    <li className = "w-full pb-4">
                        <Link
                            to="/Portfolio"
                            className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Courses
                        </Link>
                    </li>   
                    <li className = "w-full pb-4">
                        <Link
                            to="/Contact"
                            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                        >
                        Contact
                        </Link>
                    </li>   
                    <li className = "w-full pb-4">
                        <Link
                            to="/Resume"
                            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                        >
                        Resources
                        </Link>
                    </li>   
                </ul>
            </nav>
        </div>
    );
}

export default NavTabs; 