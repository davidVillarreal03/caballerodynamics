import '../Pistol/pistol.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Carbine() {
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
                    src="../../Images/bannerImages/carbinePageBanner.jpg"
                    alt="Pistol"
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover blur-sm"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text over banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-20">

                    {/* H1 - aligned left */}
                    <h1 data-aos="fade-left" className="uppercase oswald-font text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                         carbine 1.0 training
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
                    This course will help the responsible citizen develop necessary skills
                    to employ a carbine in close quarters. The main objective for this
                    course will be to improve on weapons handling, speed and accuracy.
                    There will also be a focus on engaging targets within typical CQB 
                    (close quarter battle) ranges that most shooters will likely encounter
                    in an urban environment. We will focus on foot work needed to move and 
                    engage targets while on the move, increase shooter safety, and improve
                    target identification through drills.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 2 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">1 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Loading and unloading the carbine</li>
                    <li data-aos="fade-right" data-aos-delay="200">How to clear malfunctions</li>
                    <li data-aos="fade-right" data-aos-delay="200">How to hit your target quickly and precisely</li>
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
                    <li data-aos="fade-right" data-aos-delay="200">250 rifle rounds (Extra ammo encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Three magazines (minimum)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Reliable sighting system</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sling (Tactical)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Spare batteries for optics</li>
                    <li data-aos="fade-right" data-aos-delay="200">Magazine carrier: battle belt, chest rig, etc.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Case for rifle</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit</li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing (Sunglasses and hat encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Water and snacks</li>
                </ul>
            </section>
            <div>
                <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-2">CARBINE 2.0</h1>
            </div>
             <div data-aos="fade-down" className="w-full flex items-center gap-3 mt-6 px-4">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    description
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>
            <section data-aos="fade-down" className="px-4 mt-3 text-left max-w-3xl">
                <div className="mb-5 bg-[#a89f94] p-2 rounded-md shadow-md shadow-[black]">
                    <h3 className="text-lg font-bold text-[#eaeaea]">Prerequisite: Carbine 1.0</h3>
                </div>
                <p className="text-lg leading-relaxed mb-5">
                    This close-range, fast paced course will focus on multiple target engagements with speed and precision.
                    These tools are highly coveted among tactical and competitive shooters alike. Whether you are looking to 
                    enhance your carbine skills for home protection, thick brush country hunting or competitive shooting, this
                    course is for you.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 2 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">1 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Cover and enhance skillsets covered in Carbine 1.0.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Greater emphasis on target identification.</li>
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
                    <li data-aos="fade-right" data-aos-delay="200">250 rifle rounds (Extra ammo encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Three magazines (minimum)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Reliable sighting system</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sling (Tactical)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Spare batteries for optics</li>
                    <li data-aos="fade-right" data-aos-delay="200">Magazine carrier: battle belt, chest rig, etc.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Case for rifle</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit</li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing (Sunglasses and hat encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Water and snacks</li>
                </ul>
            </section>
            
            <div>
                <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-2">CARBINE 3.0</h1>
            </div>
             <div data-aos="fade-down" className="w-full flex items-center gap-3 mt-6 px-4">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    description
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>
            <section data-aos="fade-down" className="px-4 mt-3 text-left max-w-3xl">
                <div className="mb-5 bg-[#a89f94] p-2 rounded-md shadow-md shadow-[black]">
                    <h3 className="text-lg font-bold text-[#eaeaea]">Prerequisites: Carbine 2.0</h3>
                </div>
                <p className="text-lg leading-relaxed mb-5">
                    This course will take you through a wide variety of unconventional shooting positions.
                    We do not live in a perfect world and cannot expect to be shooting a rifle from 
                    a bench or prone. This will benefit those who participate in Run and Gun races or operate
                    in and around vehicles.
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 2 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">1 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">1 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Teaching a strong set of marksmenship fundamentals.</li>
                    <li data-aos="fade-right" data-aos-delay="200">The ability to move, get down and get back up swiftly.</li>
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
                    <li data-aos="fade-right" data-aos-delay="200">250 rifle rounds (Extra ammo encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Three magazines (minimum)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Reliable sighting system</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sling (Tactical)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Spare batteries for optics</li>
                    <li data-aos="fade-right" data-aos-delay="200">Magazine carrier: battle belt, chest rig, etc.</li>
                    <li data-aos="fade-right" data-aos-delay="200">Case for rifle</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit</li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and ear protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing (Sunglasses and hat encouraged)</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Water and snacks</li>
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
