import './home.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    }
  );
  }, []);
  const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center w-full'>
        
        <section className="flex flex-col items-center justify-center">

          <div data-aos='fade-up' className="flex flex-col p-10 bg-[url('../../Images/heroimage.jpg')] bg-cover bg-center items-center justify-center text-center text-white">
            <article className="flex flex-col items-center justify-center w-full">
            <h2 className="text-md font-bold uppercase">Welcome to</h2>
            <span className="black-ops-one-regular text-3xl text-black">
              Caballero <span className="text-red-500">Dynamics</span>
            </span>
            </article>
          <div className="bg-[#2b2b2b] opacity-80 rounded-md">
            
              <p className="font-bold normal-case p-5 m-2 w-full">
                We’re dedicated to helping you sharpen your skills and build confidence,
                whether you’re military, law enforcement, or a civilian focused on home defense.
                Our mission is to deliver training that meets you where you are and takes you to the next level.
              </p>
          </div>

            <div className="flex justify-between w-full p-3">
              <a href="#courses" data-aos='fade-right' data-aos-delay='500'>
                <button className="bg-[#81292D] px-6 py-3 rounded-tl-lg rounded-br-lg font-semibold">
                  COURSES
                </button>
              </a>
              <a href="#resources" data-aos='fade-left' data-aos-delay='500'>
                <button className="bg-[#81292D] px-6 py-3 rounded-tl-lg rounded-br-lg font-semibold">
                  RESOURCES
                </button>
              </a>
            </div>
          </div>
        </section>

        <article className="flex flex-col items-center w-full mt-5 p-5">
          <h1 className="text-3xl uppercase black-ops-one-regular mb-5">Instructor</h1>

          <figure data-aos='fade-up' className="relative w-full h-96 bg-[url('../../Images/instructor.jpg')] bg-cover bg-center rounded-md overflow-hidden shadow-lg">
          
              <button data-aos='fade-left' data-aos-delay='500' onClick={() => navigate('/about')} className="absolute top-0 right-0 bg-[#2b2b2b] rounded-bl-lg px-4 py-3">
                <span className="text-[#f8f6f0] font-bold text-lg px-3">
                  <i className="fa-solid fa-location-arrow"></i>
                </span>
              </button>
          <figcaption className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white p-4">
  <h1 className="text-lg md:text-xl uppercase black-ops-one-regular">Jaime C. Spencer</h1>
  <p className="text-sm md:text-base">
    DPS‑Certified Instructor • Veteran of Afghanistan & Iraq
  </p>
  <p className="text-sm md:text-base font-semibold mt-3 normal-case">
    Jaime thrives on teaching and helping students grow as shooters, building safe, confident, and skilled marksmen for defense or recreation.
  </p>

  {/* Arrow button in bottom-right corner */}
</figcaption>

          </figure>
        </article>

        <section className="flex flex-col items-center w-full mt-1 p-5">
          <article className="flex flex-col items-center w-full p-5">
            <h1 className="text-3xl uppercase black-ops-one-regular mb-5" id='resources'>Resources</h1>
            <div className="flex items-center justify-between w-full p-5 bg-[#2b2b2b] w-full">
                <span className="flex flex-col items-center justify-center w-full">
                  <a data-aos="fade-left" href='https://www.dps.texas.gov/section/handgun-licensing'><button className='bg-[#f8f6f0] rounded-md text-[#2b2b2b] px-4 py-3 font-bold og uppercase mb-2 shimmer-on-press'>Texas LTC <i class="fa-solid fa-id-card"></i></button></a>
                  <a href='resources/targets' data-aos="fade-left"><button className='bg-[#f8f6f0] rounded-md text-[#2b2b2b] px-4 py-3 font-bold og uppercase mb-2 shimmer-on-press'>Targets <i class="fa-solid fa-bullseye"></i></button></a>
                </span>
                <span className="flex flex-col items-center justify-center w-full">
                  <a href='resources/tickets' data-aos="fade-left"><button className='bg-[#f8f6f0] rounded-md text-[#2b2b2b] px-4 py-3 font-bold og uppercase mb-2 shimmer-on-press' data-aos="fade-left">Tickets <i class="fa-solid fa-ticket"></i></button></a>
                  <a href='https://angelfireammo.com/#spencer' data-aos="fade-left"><button className='bg-[#f8f6f0] shimmer-on-press rounded-md text-[#2b2b2b] px-4 py-3 font-bold og uppercase mb-2'>Bulk Ammo</button></a>
                </span>
            </div>
          </article>
        </section>

        <section className="flex flex-col items-center w-full mt-1 p-5">
          <h1 className="text-3xl uppercase black-ops-one-regular mb-5" id='courses'>COURSES</h1>
          <div className='flex flex-col items-center gap-4 justify-center w-full p-5'>
            <button data-aos='zoom-out-right' onClick={() => navigate('/courses/pistol')} className="bg-[url('../../Images/pistol.jpg')] bg-cover bg-center shadow-xl/30 text-[#f8f6f0] w-full p-7 font-bold uppercase mb-2 hover:scale-105 transition-transform duration-200 focus:outline-none active:scale-100"><span className='text-xl bg-[#2b2b2b] px-2 py-1 rounded-md opacity-70'>Pistol</span></button>
            <button data-aos='zoom-out-right' onClick={() => navigate('/courses/carbine')} className="bg-[url('../../Images/carbine.jpg')] bg-cover bg-center shadow-xl/30 text-[#f8f6f0] w-full p-7 font-bold uppercase mb-2 hover:scale-105 transition-transform duration-200"><span className='text-xl bg-[#2b2b2b] px-2 py-1 rounded-md opacity-70'>defensive carbine</span></button>
            <button data-aos='zoom-out-right' onClick={() => navigate('/courses/carry')} className="bg-[url('../../Images/conceal.jpg')] bg-cover bg-center shadow-xl/30 text-[#f8f6f0] w-full p-7 font-bold uppercase mb-2 hover:scale-105 transition-transform duration-200"><span className='text-xl bg-[#2b2b2b] px-2 py-1 rounded-md opacity-70'>concealed carry</span></button>
            <button data-aos='zoom-out-right' onClick={() => navigate('/courses/shotgun')} className="bg-[url('../../Images/screen.png')] bg-cover bg-center shadow-xl/30 text-[#f8f6f0] w-full p-7 font-bold uppercase mb-2 hover:scale-105 transition-transform duration-200"><span className='text-xl bg-[#2b2b2b] px-2 py-1 rounded-md opacity-70'>defensive shotgun</span></button>
            <button data-aos='zoom-out-right' onClick={() => navigate('/courses/explosive')} className="bg-[url('../../Images/explosive.jpg')] bg-cover bg-center shadow-xl/30 text-[#f8f6f0] w-full p-7 font-bold uppercase mb-2 hover:scale-105 transition-transform duration-200"><span className='text-xl bg-[#2b2b2b] px-2 py-1 rounded-md opacity-70'>explosive movement</span></button>
      
          </div>
        </section>
            {/* <h1 >Home</h1> */}
            {/* <img src='https://wakatime.com/badge/user/97b58457-081b-4940-99c7-9888a9b41405/project/5ebb0fbe-3003-4f2a-a33c-8ef116da8a29.svg'></img> */}
        </div>
    )
}