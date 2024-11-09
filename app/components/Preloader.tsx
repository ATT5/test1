"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "@/app/assets/animation";
import "../globals.css";
("../styles/globals.css");
export function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const words = [
    "Hola",
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo",
  ];

  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="introduction"
    >
      {dimension.height > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {"*" + words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              d={initialPath}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
