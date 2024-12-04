// pages/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-lg mx-auto text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-8"
        >
          Bienvenue sur le Test Technique
        </motion.h1>

        {/* Les boutons pour naviguer */}
        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.button
            variants={itemVariants}
            className="px-8 py-4 bg-black text-white rounded-lg shadow-md text-xl w-full"
          >
            <Link href={"/persons"}>Voir les Humains</Link>
          </motion.button>
          
          <motion.button
            variants={itemVariants}
            className="px-8 py-4 bg-black text-white rounded-lg shadow-md text-xl w-full"
          >
            <Link href={"/animals"}>Voir les Animaux</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
