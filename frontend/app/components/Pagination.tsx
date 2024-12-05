'use client';
import { useState, useEffect } from 'react';

interface Pagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Pagination) => {

  // Initializes the state to `false` during the first render to avoid server-side error
  const [isClient, setIsClient] = useState(false);

  // Be sure the code runs on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Returns nothing until the client is ready
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 py-6 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-[#E0E0E0]  border-4 border-black font-bold  tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
      >
        Précédent
      </button>

      <div className="px-4 py-2 border-4 border-black font-bold text-lg">
        Page {currentPage} / {totalPages}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-[#E0E0E0]  border-4 border-black font-bold  tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;


