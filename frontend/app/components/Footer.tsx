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

const Footer = () => {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-gray-800 text-white py-6 mt-8"
    >
      <div className="text-center">
        <p className="text-sm">
          © 2024 Test Technique. Tous droits réservés.
        </p>
        <div className="mt-2">
          <Link href="/privacy" className="text-sm hover:underline">
            Politique de confidentialité
          </Link>
          {" | "}
          <Link href="/terms" className="text-sm hover:underline">
            Conditions d'utilisation
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
