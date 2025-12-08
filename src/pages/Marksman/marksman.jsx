import '../Pistol/pistol.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Pistol() {
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
                    src="../../Images/bannerImages/marksmanBanner.jpg"
                    alt="Pistol"
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover blur-sm"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text over banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-20">

                    {/* H1 - aligned left */}
                    <h1 data-aos="fade-left" className="oswald-font text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                        Marksman Training
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
                    The Designated Marksman class will cover a variety of topics that support engaging targets well beyond your typical carbine distances.
                    This course is intended for LPVOs, but prism and MPVOs are welcome. We will also discuss the difference between a sniper and a designated marksman.
                    The range portion of the course will have students extending out 500 yards. There will be a variety of drills focusing on accuracy and rapid engagements.
                    This course is popular with run-n-gun enthusiasts, hunters, and anyone else looking to extend their range with a carbine. 
                    <span className="italic text-[#fffaa0]"> We ask that students bring a reticle print out and an owner's manual for their respective scope.</span>
                </p>

                <h3 className="text-lg font-bold text-[#eaeaea]">Length: 8-10 hours</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">2 hour lecture</li>
                    <li data-aos="fade-right" data-aos-delay="200">6-8 hour course of fire</li>
                </ul>

                <h3 className="text-lg font-bold text-[#eaeaea]">Topics Covered:</h3>

                <ul className="text-lg mb-5 list-disc ml-6">
                    <li data-aos="fade-right" data-aos-delay="200">Scope and reticle selection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range estimation formulas</li>
                    <li data-aos="fade-right" data-aos-delay="200">Internal/external ballistics</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cover a variety of positions and realistic shooting scenarios</li>
                    <li data-aos="fade-right" data-aos-delay="200">How to get the most out of your rifle, ammo and optic combination</li>
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
                    <li data-aos="fade-right" data-aos-delay="200">Carbine with optic</li>
                    <li data-aos="fade-right" data-aos-delay="200">2 point sling optic: LPVO, Prism, Fixed power with Mil, MOA, or ballistic reticles</li>
                    <li data-aos="fade-right" data-aos-delay="200">Pistol with holster</li>
                    <li data-aos="fade-right" data-aos-delay="200">200 rifle match, 200 rifle ball, 100 pistol match</li>
                    <li data-aos="fade-right" data-aos-delay="200">3 magazines for rifle and pistol</li>
                    <li data-aos="fade-right" data-aos-delay="200">Battle belt and or chest rig to manage rifle mags</li>
                    <li data-aos="fade-right" data-aos-delay="200">Medium/Small back pack</li>
                    <li data-aos="fade-right" data-aos-delay="200">Gloves</li>
                    <li data-aos="fade-right" data-aos-delay="200">Knee pads or pants with knee pad inserts</li>
                    <li data-aos="fade-right" data-aos-delay="200">Eye and hearing protection</li>
                    <li data-aos="fade-right" data-aos-delay="200">Tools for optics and mount</li>
                    <li data-aos="fade-right" data-aos-delay="200">Chair/Stool</li>
                    <li data-aos="fade-right" data-aos-delay="200">Notebook and a pen</li>
                    <li data-aos="fade-right" data-aos-delay="200">3x5 Note cards</li>
                    <li data-aos="fade-right" data-aos-delay="200">Reticle printout</li>
                    <li data-aos="fade-right" data-aos-delay="200">Owner's manual to your respective optic</li>
                    <li data-aos="fade-right" data-aos-delay="200">Cleaning kit with oil</li>
                    <li data-aos="fade-right" data-aos-delay="200">Range appropriate clothing</li>
                    <li data-aos="fade-right" data-aos-delay="200">Sunblock and bug spray</li>
                    <li data-aos="fade-right" data-aos-delay="200">Enough water and snacks for 10 hours</li>
                    <li data-aos="fade-right" data-aos-delay="200">Shooting mat <span className="italic text-[#fffaa0]">optional</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Rear Bag <span className="italic text-[#fffaa0]">optional</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Bi-pod <span className="italic text-[#fffaa0]">optional</span></li>
                    <li data-aos="fade-right" data-aos-delay="200">Tri-pod <span className="italic text-[#fffaa0]">optional</span></li>
                </ul>
            </section>
           

        </div>
    );
}
