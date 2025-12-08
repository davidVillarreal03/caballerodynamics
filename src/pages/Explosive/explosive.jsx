import '../Pistol/pistol.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Explosive() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        }
      );
      }, []);
    return (
        <div className="flex flex-col w-full">

            {/* BANNER */}
            <div className="relative w-full">
                <img
                    src="../../Images/bannerImages/explosiveMovementPageBanner.jpg"
                    alt="Pistol"
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover blur-sm"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text over banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-20">

                    {/* H1 - aligned left */}
                    <h1 data-aos="fade-left" className="uppercase oswald-font text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                         explosive movement training
                    </h1>

                    {/* H2 - aligned right */}
                    <h2 data-aos="fade-right" className="text-[#BFBFBF] text-lg sm:text-2xl md:text-3xl self-end">
                        Master precision and control
                    </h2>

                </div>
            </div>

            {/* SECTION HEADER */}
            <div data-aos="fade-down" className="w-full flex items-center gap-3 mt-6 px-4">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    description
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>
            {/* <span className='font-bold underline underline-offset-3'>DISCLAIMER: Course is considered intermediate level.</span>
            <span className='font-bold underline underline-offset-3'>RECOMMENDED: "Fundamentals course" for beginners.</span> */}

            {/* DESCRIPTION CONTENT */}
            <section data-aos="fade-down" className="px-4 mt-3 text-left max-w-3xl">
                <div className="mb-5 bg-[#a89f94] p-2 rounded-md shadow-md shadow-[black]">
                    <h3 className="text-lg font-bold text-[#eaeaea]">Prerequisites: Carbine 2.0, Concealed Carry 1.0 and must have a valid Texas LTC</h3>
                </div>
                <p className="text-lg leading-relaxed mt-2 mb-5">
                    This class is all about shooting on the move and putting
                    hits on target. Can be done with either a pistol or a carbine. This course will benefit anyone who is serious about home 
                    defense.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 2 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">1 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Accessorizing your shotgun</li>
                    <li data-aos="fade-right" data-aos-delay="200">Ammo types</li>
                    <li data-aos="fade-right" data-aos-delay="200">Barrel length</li>
                    <li data-aos="fade-right" data-aos-delay="200">Home defense considerations</li>
                </ul>
            </section>

            {/* REQUIRED GEAR HEADER */}
            <div data-aos="fade-down" className="w-full flex items-center gap-3 px-4 mt-6 mb-2">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    required gear
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>

            {/* REQUIRED GEAR LIST */}
            <section className="px-4 mb-10">
                <ul className="text-lg list-disc ml-6 space-y-1 text-left max-w-3xl">
                    <li data-aos="fade-right" data-aos-delay="200">Carbine w/ reliable sighting system and sling <span className="italic text-[#fffaa0]">Tactical</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Spare batteries for optics</li>
                    <li data-aos="fade-right" data-aos-delay="200">Bring 3 magazines <span className="italic text-[#fffaa0]">minimum</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Magazine carrier: battle belt, chest rig, etc.</li>
                    <li data-aos="fade-right" data-aos-delay="200">250 rounds of ammunition</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit and oil</li>
                    <li data-aos="fade-right" data-aos-delay="200">Case for carbine</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing <span className="italic text-[#fffaa0]">Sun glasses and hat encouraged</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunscreen and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Plenty of food and water</li>
                </ul>
            </section>
            {/* <div data-aos="fade-down" className="w-full flex items-center gap-3 px-4 mt-6 mb-2">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    recommended gear
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>
               <section className='px-4 mb-10'>
                    <ul className='text-lg list-disc ml-6 space-y-1 text-left max-w-3xl'>
                        <li data-aos="fade-right" data-aos-delay="200">Tactical light w/ mount</li>
                        <li data-aos="fade-right" data-aos-delay="200">Extra ammunition</li>
                        <li data-aos="fade-right" data-aos-delay="200">Different loads of buckshot to pattern in your shotgun</li>
                    </ul>
               </section> */}

        </div>
    );
}
