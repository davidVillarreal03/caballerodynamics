import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Link, useLocation } from 'react-router-dom';
function Footer() {

        return (
            
            <footer className="relative overflow-hidden flex flex-col items-center justify-center w-full bg-black text-white text-center p-4">
    {/* Particles Background */}
    

    <img className="pl-1 h-45" src="../../Images/altLogo.jpg" alt="Logo" />

    {/* Contact Form */}
    <form
        className="flex flex-col items-center justify-center w-full p-4"
        action="https://formsubmit.co/jaime@caballerodynamics.com"
        method="POST"
    >
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_next" value="https://caballerodynamics.netlify.app/thankyou" />
        <input type="hidden" name="_template" value="table" />

        <input className="p-2 bg-[#2b2b2b] rounded-sm w-full m-2" type="text" id="name" name="name" placeholder="Your full name" required />
        <input className="p-2 bg-[#2b2b2b] rounded-sm w-full m-2" type="email" id="email" name="email" placeholder="Email" required />
        <input className="p-2 bg-[#2b2b2b] rounded-sm w-full m-2" type="tel" id="phone" name="phone" placeholder="(xxx) xxx-xxxx" required />
        <textarea className="p-2 bg-[#2b2b2b] rounded-sm w-full m-2" id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>

        <button className="p-2 bg-[#a89f94] text-[#2b2b2b] rounded-sm w-full m-2" type="submit">
            Send Message
        </button>
    </form>

    {/* Footer Links */}
    <section className="flex items-center justify-between w-full p-4 relative z-10">
        <div className="flex flex-col items-start">
            <h1 className="mb-2 font-bold">CONTACT US</h1>
            <a href="tel:(910) 308-5294"><p>(910) 308-5294</p></a>
            <p>P.O. Box 1272</p>
            <p>Helotes, TX 78023</p>
        </div>
        <div className="flex flex-col items-start">
            <h1 className="mb-2 font-bold">QUICK LINKS</h1>
            <Link to = "/about" className="mb-1 text-lg underline">
            About
            </Link>
            <a href="/" className="mb-1 text-lg underline">Home</a>
        </div>
    </section>

    <a href="#top" className="mb-2 text-lg underline relative z-10">Back to Top</a>
    <p className="text-sm relative z-10">
        © Copyright Caballero Dynamics Firearms Training LLC – All rights reserved
    </p>
</footer>
        )
    }
    

export default Footer;