"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="relative w-[450px] h-[280px] rounded-md cursor-pointer z-0 perspective group"
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {/* Front Side (Image) */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="absolute w-full h-full bg-cover bg-center text-white rounded-lg p-4 backface-hidden"
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 rounded-md transition-opacity duration-300" />

          {/* Learn More Text */}
          <div className="absolute inset-0 flex items-center justify-center text-[20px] pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn more &gt;
          </div>
        </div>

        {/* Back Side (Description) */}
        <div
          className="absolute w-full h-full bg-gray-900 text-white rounded-lg p-4 flex flex-col justify-center items-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-gray-200 text-lg mt-4">{text}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
