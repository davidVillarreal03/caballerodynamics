import '../Pistol/pistol.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function License() {
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
                    src="../../Images/ltcBanner.jpg"
                    alt="Pistol"
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover blur-sm"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text over banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-20">

                    {/* H1 - aligned left */}
                    <h1 data-aos="fade-left" className="oswald-font text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                        LICENSE TO CARRY
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

            {/* DESCRIPTION CONTENT */}
            <section data-aos="fade-down" className="px-4 mt-3 text-left max-w-3xl">
                <p className="text-lg leading-relaxed mb-5">
                    Our License to Carry (LTC) class follows the DPS guidelines and certifies
                    the student to carry in the state of Texas. The class will entail a 50 round
                    (store bought ammo only, no reloads or steel case ammo) qualification and lecture. Students are 
                    required to pass a proficiency test and a written exam.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 7 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">6 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                {/* <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3> */}

                {/* <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Loading and unloading the pistol</li>
                    <li data-aos="fade-right" data-aos-delay="200">How to clear malfunctions</li>
                    <li data-aos="fade-right" data-aos-delay="200">How to hit your target quickly and precisely</li>
                </ul> */}
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
                    <li data-aos="fade-right" data-aos-delay="200">50 rounds <span className="italic text-[#fffaa0]">store bought ammo only</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Serviceable pistol</li>
                    {/* <li data-aos="fade-right" data-aos-delay="200">Cleaning kit</li> */}
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Water and snacks</li>
                </ul>
            </section>
            <div>
                <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-2">low light pistol</h1>
            </div>
             <div data-aos="fade-down" className="w-full flex items-center gap-3 mt-6 px-4">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    description
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>
            <section data-aos="fade-down" className="px-4 mt-3 text-left max-w-3xl">
                <div className="mb-5 bg-[#a89f94] p-2 rounded-md shadow-md shadow-[black]">
                    <h3 className="text-lg font-bold text-[#eaeaea]">Prerequisite: LTC Course</h3>
                </div>
                <p className="text-lg leading-relaxed mb-5">
                    Many defensive shootings occur in low light or no light environments.
                    This can be shooting during the hours of darkness, or in an interior environment 
                    with limited ambient light. To better prepare for these types of situations, we are 
                    providing a course focused on low light, no light shooting tactics.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 2 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">1 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Use of flashlights and other forms of illumination.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Obtaining an acceptable sight picture.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Importance of target discrimination in defensive shootings.</li>
                </ul>
            </section>
             <div data-aos="fade-down" className="w-full flex items-center gap-3 px-4 mt-6 mb-2">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    required gear
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>

            {/* REQUIRED GEAR LIST */}
            <section className="px-4 mb-10">
                <ul className="text-lg list-disc ml-6 space-y-1 text-left max-w-3xl">
                    <li data-aos="fade-right" data-aos-delay="200">250 rounds</li>
                    <li data-aos="fade-right" data-aos-delay="200">Three magazines <span className="italic text-[#fffaa0]">minimum</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Sturdy Kydex Holster</li>
                    <li data-aos="fade-right" data-aos-delay="200">Hand held light with fresh batteries w/Spare.</li>
                    {/* <li data-aos="fade-right" data-aos-delay="200">Tactical light</li> */}
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit</li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing <span className="italic text-[#fffaa0]">Sunglasses and hat encouraged</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Plenty of water and snacks</li>
                </ul>
                <p className="text-lg leading-relaxed mt-5 font-bold">DISCLAIMER: If your weapon and holster will accommodate a weapon mounted light, bring that as well but do not substitute a weapon mounted light
                    for a hand held light.
                </p>
            </section>

        </div>
    );
}
