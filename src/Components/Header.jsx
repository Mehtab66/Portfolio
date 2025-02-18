import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <section id="home" className="bg-[#1F1F1F] text-white pt-40 pb-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl text-[#F5F5F5] font-extrabold mb-6 transition-transform transform hover:scale-105 duration-300">
            Full-stack Developer
          </h1>
          <p className="text-lg text-[#B2B2B2]  mb-8 max-w-lg mx-auto md:mx-0 md:text-xl">
            I specialize in building scalable, high-performance web applications
            using the MERN stack.I optimize database queries, enhance API
            performance, and implement secure, role-based access. I design
            responsive UIs and integrate advanced features like real-time
            analytics. Let’s create efficient, innovative solutions together.
          </p>
          <a
            onClick={() => alert("Downloaded")}
            href="https://drive.google.com/uc?export=download&id=1-PqR2FtjYpx4x66Q6zH7tbjP5wpL0QRl"
            className="inline-block px-8 py-3 mt-4 text-xl text-[#1F1F1F] bg-[#FF5733] rounded-lg transition-all transform hover:scale-105 duration-300"
          >
            Download CV
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <DotLottieReact
            src="https://lottie.host/fd0a20e5-1c91-408e-b30c-ca7f3fb4fa3c/rc9NiEJhKZ.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
