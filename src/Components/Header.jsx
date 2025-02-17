import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <header className="bg-[#1F1F1F] text-white pt-20 pb-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl text-[#F5F5F5] font-extrabold mb-6 transition-transform transform hover:scale-105 duration-300">
            Full-stack Developer
          </h1>
          <p className="text-lg text-[#B2B2B2] mb-8 max-w-lg mx-auto md:mx-0 md:text-xl">
            I build high-performance web applications using the MERN Stack.
            Proficient in Vercel and Render, I ensure seamless deployments and
            cloud efficiency, focusing on backend optimization, API performance,
            and role-based access.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 mt-4 text-xl text-[#1F1F1F] bg-[#FF5733] rounded-lg transition-all transform hover:scale-105 duration-300"
          >
            Contact Me
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
    </header>
  );
};

export default Header;
