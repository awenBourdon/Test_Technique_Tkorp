'use client';

import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center space-x-4 py-6"
    >
      
      <motion.button
        variants={buttonVariants}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-black text-white rounded-md disabled:opacity-50"
      >
        Précédent
      </motion.button>

      
      <span className="px-4 py-2 hidden sm:inline-block">
        Page {currentPage} / {totalPages}
      </span>

      
      <motion.button
        variants={buttonVariants}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-black text-white rounded-md disabled:opacity-50"
      >
        Suivant
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
