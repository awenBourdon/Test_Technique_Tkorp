'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation for the glitch effect
const glitchVariants = {
  animate: {
    x: [0, -2, 2, -2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const HomePage = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-8 ">
      <div className="w-full max-w-4xl border-4 border-black p-8">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-12  tracking-tighter "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello Test Technique
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/persons" className="block">
            <motion.button
              className="w-full px-8 py-6 bg-[#A7C7E7]  text-2xl font-bold  tracking-widest border-4 border-black transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
              whileHover={{ boxShadow: "8px 8px 0 rgba(0, 0, 0, 1)" }}
              whileTap={{ boxShadow: "0px 0px 0 rgba(0, 0, 0, 1)" }}
            >
              Voir Tous les Humains
            </motion.button>
          </Link>
          
          <Link href="/animals" className="block">
            <motion.button
              className="w-full px-8 py-6 bg-[#A7C7E7]  text-2xl font-bold  tracking-widest border-4 border-black transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
              whileHover={{ boxShadow: "8px 8px 0 rgba(0, 0, 0, 1)" }}
              whileTap={{ boxShadow: "0px 0px 0 rgba(0, 0, 0, 1)" }}
            >
              Voir Tous les Animaux
            </motion.button>
          </Link>
        </div>

        <motion.div
          className="mt-16 text-4xl font-bold "
          variants={glitchVariants}
          animate="animate"
        >
          <Link href="https://awenbourdon.fr/">
          Par Awen Bourdon
          </Link>
        </motion.div>
      </div>

    </div>
  );
}

export default HomePage
