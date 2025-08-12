function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full bg-black text-white text-center p-4">
            <img className='pl-1 h-45' src='../../Images/altLogo.jpg'></img>
            <form className='flex flex-col items-center justify-center w-full p-4' action="https://formsubmit.co/jaime@caballerodynamics.com" method="POST">
                                <input type="hidden" name="_subject" value="New Contact Form Submission"></input>
                                <input type="hidden" name="_next" value="https://caballerodynamics.netlify.app/thankyou"></input>
                                <input type="hidden" name="_template" value="table"></input>

                                {/* <label for="name">Name:</label> */}
                                <input className='p-2 bg-[#2b2b2b] rounded-sm w-full m-2' type='text' id='name' name="name" placeholder='Your full name' required></input>

                                {/* <label for="email">Email:</label> */}
                                <input className='p-2 bg-[#2b2b2b] rounded-sm w-full m-2' type='email' id='email' name="email" placeholder='Email' required></input>
                                
                                {/* <label for="phone">Phone:</label> */}
                                <input className='p-2 bg-[#2b2b2b] rounded-sm w-full m-2' type='tel' id='phone' name="phone" placeholder='(xxx) xxx-xxxx' required></input>

                                {/* <label for="message">Message:</label> */}
                                <textarea className='p-2 bg-[#2b2b2b] rounded-sm w-full m-2' type='text' id='message' name="message" rows='5' placeholder='Type your message here...' required></textarea>
                            
                                <button className='p-2 bg-[#a89f94] text-[#2b2b2b] rounded-sm w-full m-2'type='submit' value="Submit">Send Message</button>
                            {/* <p className='note'>This form will send a message straight to my email.</p> */}
             </form>
             <section className='flex items-center justify-between w-full p-4'>
                
                <div className='flex flex-col items-start justify-center'>
                    <h1 className="mb-2 font-bold">CONTACT US</h1>
                    <a href="tel:(910) 308-5294"><p>(910) 308-5294</p></a>
                    <p>P.O. Box 1272</p>
                    <p>Helotes, TX 78023</p>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <h1 className="mb-2 font-bold">QUICK LINKS</h1>
                    <a href='/about' className="mb-1 text-lg underline"><p>About</p></a>
                    <a href='/courses' className="mb-1 text-lg underline"><p>Courses</p></a>
                    <a href='/contact' className="mb-1 text-lg underline"><p>Contact</p></a>
                    <a href='/resources' className="mb-1 text-lg underline"><p>Resources</p></a>
                </div>
               
                
             </section>
             <p className='text-sm'>© Copyright Caballero Dynamics Firearms Training LLC – All rights reserved</p>
        </footer>
    )
}

export default Footer;