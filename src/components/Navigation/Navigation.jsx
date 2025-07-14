import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../constants';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className='flex fixed top-0 left-0 w-full bg-[#A89F94] shadow-md'>
            <section className='flex items-center justify-between w-full px-4 py-2'>
            <img className='h-16' src={IMAGE_URL} alt="logo"></img>
            <button className='flex items-center'>
            <i class="fa-solid fa-bars text-2xl text-[#D9D9D9] p-4"></i>
            </button>

            </section>
            {/* <nav className = "">
                <ul className = "flex gap-4 p-4">    
                    <li className = "b">
                        <Link
                            to="/"
                            className={currentPage === "/" ? "nav-link active" : "nav-link"}
                            >
                            About
                        </Link>
                    </li>   
                    <li className = "nav-item">
                        <Link
                            to="/Portfolio"
                            className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Courses
                        </Link>
                    </li>   
                    <li className = "nav-item">
                        <Link
                            to="/Contact"
                            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                        >
                        Contact
                        </Link>
                    </li>   
                    <li className = "nav-item">
                        <Link
                            to="/Resume"
                            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                        >
                        Resources
                        </Link>
                    </li>   
                </ul>
            </nav> */}
        </div>
    );
}

export default NavTabs; 