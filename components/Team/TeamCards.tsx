"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import ImageCard from "../Common/ImageCard";
import SectionTitle from "../Common/SectionTitle";

const TeamCards = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="Meet Our Brilliant Team"
        paragraph="A passionate group of innovators, creators, and problem-solvers dedicated to excellence and success."
        center
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 text-slate-900 sm:grid-cols-2 md:grid-cols-3">
        <TiltCard
          title="Fasahat Ahmad"
          description="CEO"
          image="/images/team/fasi2.jpg"
        />
        <TiltCard
          title="Maria Nadeem"
          description="COO"
          image="/images/team/maya.jpg"
        />
        <TiltCard
          title="Wajahat Ahmad"
          description="CTO"
          image="/images/team/waji.jpg"
        />
      </div>
    </section>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, description, image }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="to-black-300 relative h-96 w-72 rounded-xl bg-gradient-to-br from-blue-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4  place-content-center rounded-xl bg-white shadow-lg"
      >
        <ImageCard title={title} description={description} imageUrl={image} />
      </div>
    </motion.div>
  );
};

export default TeamCards;
