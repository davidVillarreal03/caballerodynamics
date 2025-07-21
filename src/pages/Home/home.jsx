import './home.css'
export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
        
        <section className="flex flex-col items-center justify-center">

          <div className="flex flex-col p-10 bg-[url('../../Images/heroimage.jpg')] bg-cover bg-center items-center justify-center text-center text-white">
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
              <button className="bg-[#81292D] px-6 py-3 rounded-tl-lg rounded-br-lg font-semibold">
                COURSES
              </button>
              <button className="bg-[#81292D] px-6 py-3 rounded-tl-lg rounded-br-lg font-semibold">
                RESOURCES
              </button>
            </div>
          </div>
        </section>

        <article className="flex flex-col items-center w-full mt-5 p-5">
  <h1 className="text-3xl uppercase black-ops-one-regular mb-5">Instructor</h1>

  <figure className="relative w-full h-96 bg-[url('../../Images/instructor.jpg')] bg-cover bg-center rounded-md overflow-hidden shadow-lg">
    <figcaption className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white p-4">
      <h1 className="text-lg md:text-xl uppercase black-ops-one-regular">Jaime C. Spencer</h1>
      <p className="text-sm md:text-base">
    DPS‑Certified Instructor • Veteran of Afghanistan & Iraq
  </p>
      <p className="text-sm md:text-base font-semibold mt-3 normal-case">
      Jaime thrives on teaching and helping students grow as shooters, building safe, confident, and skilled marksmen for defense or recreation.
      </p>
    </figcaption>
  </figure>
</article>


            {/* <h1 >Home</h1> */}
            <img src='https://wakatime.com/badge/user/97b58457-081b-4940-99c7-9888a9b41405/project/5ebb0fbe-3003-4f2a-a33c-8ef116da8a29.svg'></img>
        </div>
    )
}