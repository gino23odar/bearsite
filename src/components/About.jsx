import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="bearinfo" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="L<b>oo</b>k at this<br /> very <b>weird</b> b<b>ea</b>r"
          containerClass="mt-5 !text-black text-center"
        />
        <p className="font-general text-xl uppercase md:text-[24px]">
          Bear info coming up...
        </p>
        <div className="about-subtext">
          <p>Do not be confused! this is a bear, not a svinka.</p>
          <p className="text-gray-500">
            Answers to:
          </p>
          <RotatingText
            texts={['Svinka', 'Shawty', 'Vertically Challenged', 'вонючий', 'smelly Farta', 'коротышка (yes, again)']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#a26bdb] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
