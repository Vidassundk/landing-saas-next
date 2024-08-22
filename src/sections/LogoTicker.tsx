"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:p-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="Acme Logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="Quantum Logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="Echo Logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="Pulse Logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="Apex Logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="Celestial Logo"
            />
            {/* second set of logos */}

            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="Acme Logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="Quantum Logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="Echo Logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="Pulse Logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="Apex Logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="Celestial Logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
