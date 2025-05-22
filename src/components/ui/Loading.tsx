"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
interface LoadingProps {
  size?: number;
  color?: string;
  className?: string;
  overlay?: boolean; // New prop
  backdropBlur?: boolean; // New prop
}

const Loading: React.FC<LoadingProps> = ({
  size = 48,
  color = "#3B82F6",
  className,
  overlay = false,
  backdropBlur = false,
}: LoadingProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        overlay && "fixed inset-0 bg-background/80",
        backdropBlur && "backdrop-blur-sm",
        className,
      )}
    >
      <motion.div
        className="rounded-full border-b-2 border-t-2"
        style={{
          width: size,
          height: size,
          borderColor: color,
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            border: `${size / 12}px solid ${color}`,
            borderTopColor: "transparent",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
