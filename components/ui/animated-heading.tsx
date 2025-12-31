import { motion } from "framer-motion";
import { Stroke } from "./stroke";
import { Strokee } from "./strokke";







interface AnimatedHeadingProps {
  heading: string;
  className?: string;
}

export const AnimatedHeading = ({ heading, className }: AnimatedHeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* The actual H2 text */}

<div className="relative height-auto flex bg-none ">
  <h2 className="">
        {heading}
      </h2>
{/* <Strokee className="text-red-500"/> */}
      <Stroke className={` text-text scale-110 absolute z-20  top-8 ${className}`} />
</div>

    
    </div>
  );
};