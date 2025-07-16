import './home.css'
export default function Home() {
    return (
        <div className='absolute top-19 left-0'>
        
            <section>
                <img className='relative brightness-30'src='../../Images/heroimage.jpg'>
                </img>
                <article className='absolute uppercase top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <h2 className='w-100 font-bold'>Welcome to</h2> <span className='black-ops-one-regular text-3xl text-black'>Caballero <span className='text-red-500'>Dynamics</span></span>
                <p className='font-bold w-100 normal-case'>At Caballero Dynamics, we're dedicated to helping you sharpen your skills and build confidence.</p>
                </article>
                <article className='absolute top-93 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                    <span className='black-ops-one-regular'><h2 className='w-100 text-2xl uppercase'>Here to help</h2></span>
                    <span className='black-ops-one-regular'><h2 className='w-100 text-2xl font-bold uppercase'>Foster Safe Gun Handling</h2></span>
                    <p className='font-bold'>
                        whether you’re military, law enforcement, or a civilian focused on home defense. Our mission is to deliver training that meets you where you are and takes you to the next level.
                    </p>
                </article>
                <button className='absolute top-120 left-1/7 border-single border-red-600 border-3 w-1/4 h-10'>COURSES</button>
                <button className='absolute top-120 right-1/7 border-single border-red-600 border-3 w-1/4 h-10'>RESOURCES</button>
            </section>
            {/* <h1 >Home</h1> */}
            <img src='https://wakatime.com/badge/user/97b58457-081b-4940-99c7-9888a9b41405/project/5ebb0fbe-3003-4f2a-a33c-8ef116da8a29.svg'></img>
        </div>
    )
}