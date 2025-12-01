import '../Pistol/pistol.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Shotgun() {
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
                    src="../../Images/shotgun.jpg"
                    alt="Pistol"
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover blur-sm"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text over banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-20">

                    {/* H1 - aligned left */}
                    <h1 data-aos="fade-left" className="uppercase oswald-font text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                         shotgun training
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
                <p className="text-lg leading-relaxed mb-5">
                    This course will take you throught the fundamentals of home defense
                    shotgun. There will be an intensive live fire portion of the class that
                    will cover: patterning loads, multiple round engagements, reloading,
                     multiple threats, and the use of cover and concealment. Course will
                     cover broad range of topics and will dispel some commone myths behind
                     one of the most common home defense tools in America.
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
            <section className="px-4 mb-5">
                <ul className="text-lg list-disc ml-6 space-y-1 text-left max-w-3xl">
                    <li data-aos="fade-right" data-aos-delay="200">Pump or semi-automatic shotgun</li>
                    <li data-aos="fade-right" data-aos-delay="200">75 rounds buckshot (discount on Angel Fire Ammo)</li>
                    <li data-aos="fade-right" data-aos-delay="200">5 rounds foster/deer slug (purchase available in store)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Closed to shoes</li>
                    <li data-aos="fade-right" data-aos-delay="200">Side saddle or slip over shell carrier</li>
                </ul>
            </section>
            <div data-aos="fade-down" className="w-full flex items-center gap-3 px-4 mt-6 mb-2">
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
               </section>
               <div>
                <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Home Defense</h1>
            </div>
             <div data-aos="fade-down" className="w-full flex items-center gap-3 mt-6 px-4">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    description
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>
            <section data-aos="fade-down" className="px-4 mt-3 text-left max-w-3xl">
                <div className="mb-5 bg-[#a89f94] p-2 rounded-md shadow-md shadow-[black]">
                    <h3 className="text-lg font-bold text-[#eaeaea]">Prerequisite: 1.0 Course of any firearm: Shotgun, Rifle, Pistol, etc.</h3>
                </div>
                <p className="text-lg leading-relaxed mb-5">
                    This course will on skills necessary to fend off a potential home invasion and protect your family.
                    Course is shooter dependent, bring the firearm you rely on for home defense: Shotgun, Rifle, Pistol, etc.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 2 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">1 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Storage/Accessability of your firearms.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Use of cover and concealment.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Techniques for moving and engaging targets at close distance.</li>
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
                    <li data-aos="fade-right" data-aos-delay="200">Three magazines (minimum)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sturdy Kydex Holster</li>
                    <li data-aos="fade-right" data-aos-delay="200">Gun case or mini vault</li>
                    <li data-aos="fade-right" data-aos-delay="200">Tactical light</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit</li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing (Sunglasses and hat encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Plenty of water and snacks</li>
                </ul>
            </section>

        </div>
    );
}
