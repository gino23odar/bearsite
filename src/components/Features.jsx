import { useState, useRef } from "react";
import { TfiLocationArrow } from "react-icons/tfi";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font text-black">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm text-black md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section id="vault" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="text-center px-5 py-32">
        <p className="font-circular-web text-xl text-blue-50">
          Now to the real thing.
        </p>
        <p className="font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding blob where birds
          <br />
          get mapped to create a unique and rewarding experience
          <br />
          on your own bird world.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              V<b>aul</b>t
            </>
          }
          description="A unique colection of shots from birds you can find in Peru."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[85vh] w-full grid-cols-2 grid-rows-2 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                B<b>ird</b>s
              </>
            }
            description="Just pick a bird and the AI generation type, and you're ready to go."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                B<b>ui</b>lder
              </>
            }
            description="Create your own unique bird"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <a href="https://docs.google.com/forms/d/1bzdTdtWYxA9HcTdyM347yyCdFkfyXGcUlSvVM-XJYyM/edit" target="_blank" rel="noopener noreferrer">
            <div className="flex size-full flex-row-reverse justify-between bg-[#a26bdb] p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                Think<b> of</b> more <b>feat</b>ures t<b>o</b> build.
              </h1>

              <TfiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </a>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
