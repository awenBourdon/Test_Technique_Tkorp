'use client';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../graphql/PersonQueries';
import Pagination from '../components/Pagination';
import Link from 'next/link';
import Image from 'next/image';

const itemsPerPage = 16;

const AllPersons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_PERSONS);

  const paginate = (items: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-4xl font-bold uppercase tracking-wider bg-[#FFA500] border-4 border-black p-4">
        Chargement...
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-4xl font-bold uppercase tracking-wider bg-[#FFA500] border-4 border-black p-4">
        Erreur: {error.message}
      </div>
    </div>
  );

  const totalPages = Math.ceil(data.persons.length / itemsPerPage);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 uppercase tracking-wider">Tout Les Humains</h1>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {paginate(data.persons).map((person) => (
            <div
              key={person.id}
              className="bg-white border-4 border-black p-4 transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-[200px] h-[239px]">
                  <Image
                    src="/person.png"
                    alt={person.firstName}
                    fill
                    className="border-2 border-black"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 uppercase text-center">
                {person.firstName} {person.lastName}
              </h2>

              <Link
                href={`/persons/${person.id}`}
                className="block mt-4 text-center bg-[#FFA500] border-2 border-black p-2 font-bold uppercase tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Voir Profil
              </Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPersons;


