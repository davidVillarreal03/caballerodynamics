export default function About() {
    return (
        <div>
               <div className="relative w-full">
                <img
                    src="../../Images/bannerImages/aboutBanner.jpg"
                    alt="Pistol"
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px]"
                    />

                {/* Text over banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-20 ml-15">

                    <h2 data-aos="fade-left" className="text-[#4B5563] text-lg sm:text-2xl md:text-3xl self-middle font-bold">
                        Jaime C. Spencer
                    </h2>

                </div>
            </div>
                    {/* <h1>Jaime C. Spencer</h1> */}
            <div data-aos="fade-down" className="w-full flex items-center gap-3 px-4 mt-6 mb-2">
                <h2 className="uppercase text-xl orbitron-font whitespace-nowrap">
                    INSTRUCTOR INFO
                </h2>
                <div className="flex-1 border-t border-[#a89f94]" />
            </div>

            {/* REQUIRED GEAR LIST */}
            <section className="px-4 mb-10">
                <ul className="text-lg list-disc ml-6 space-y-1 text-left max-w-3xl">
                    <li data-aos="fade-right" data-aos-delay="200">Career Army Infantry Soldier with 22 years + of experience
                    teaching and training basic and advanced marksmanship.</li>
                    <li data-aos="fade-right" data-aos-delay="200">DPS Certified License To Carry Instructor</li>
                    <li data-aos="fade-right" data-aos-delay="200">NRA Certified Pistol Instuctor, Range Safety Officer</li>
                    <li data-aos="fade-right" data-aos-delay="200">Attended Mountain Leaders Advanced Rifle Marksmanship Course</li>
                    <li data-aos="fade-right" data-aos-delay="200">Trained designated marksmen during first Afghan deployment</li>
                    <li data-aos="fade-right" data-aos-delay="200">Augmented sniper teams while serving overseas</li>
                    <li data-aos="fade-right" data-aos-delay="200">Multiple overseas tours; Two Tours in Afghanistan and two in Iraq</li>
                    <li data-aos="fade-right" data-aos-delay="200">Experienced with urban operations</li>
                    <li data-aos="fade-right" data-aos-delay="200">Trained and led several personnel security detachments</li>
                    <li data-aos="fade-right" data-aos-delay="200">Coached a team that won first place in Regionals in 2017 
                    for Rifle Marksmanship</li>
                    <li data-aos="fade-right" data-aos-delay="200">Numerous military accolades to include the Bronze Star and Army Commendation
                    Medal with Valor</li>
                    <li data-aos="fade-right" data-aos-delay="200">Avid Competitor for 3-gun, 2-gun, Biathlon and Tactical games</li>
                    <li data-aos="fade-right" data-aos-delay="200">Provided training for several South Texas Police Departments</li>
                </ul>
            </section>        
        </div>
    )
}