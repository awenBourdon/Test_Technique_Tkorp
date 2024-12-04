'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { data } from '../data/data';
import Pagination from '../components/Pagination';
import Link from 'next/link';

const itemsPerPage = 16;

const AllPersons = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pour diviser les données en pages
  const paginate = (items: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(data[0].persons.length / itemsPerPage);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h1 className="text-4xl font-bold text-center mb-8">Les Humains</motion.h1>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {paginate(data[0].persons).map((person) => (
            <motion.div
              key={person.id}
              className="bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src={`/placeholder.svg?text=${person.firstName}&height=200&width=300`}
                alt={person.firstName}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                {person.firstName} {person.lastName}
              </h2>
              <p>Email : {person.email}</p>
              <p>Téléphone : {person.phoneNumber}</p>
              <Link
                href={`/persons/${person.id}`}
                className="text-black hover:underline mt-4 block text-center"
              >
                Voir Profil
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AllPersons;

