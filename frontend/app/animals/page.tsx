'use client';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIMALS } from '../graphql/AnimalQueries';
import Pagination from '../components/Pagination';
import LoadingMessage from '../components/LoadingMessage';
import ErrorMessage from '../components/ErrorMessage';
import Link from 'next/link';
import Image from 'next/image';

const AllAnimals = () => {

  // Initializes the state to begin at the first page
  const [currentPage, setCurrentPage] = useState(1);

  // Gets the data from AnimalQueries
  const { loading, error, data } = useQuery(GET_ANIMALS);

  if (loading) return (
    <LoadingMessage/>
  );

  if (error) return (
    <ErrorMessage message={error.message} />
  );

  const itemsPerPage = 16;

  // Returns a slice of the items array for the current page 
  const paginate = (items: any[]) => {
    const firstItemOfThePage = (currentPage - 1) * itemsPerPage;
    const lastItemOfThePage = firstItemOfThePage + itemsPerPage;
    return items.slice(firstItemOfThePage, lastItemOfThePage);
  };

  // Calculates the total pages and allows page navigation
  const totalPages = Math.ceil(data.animals.length / itemsPerPage);
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8  tracking-wider">Tous Les Animaux</h1>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">

          {/* Uses the paginate function to display a paginated list of animals items */}
          {paginate(data.animals).map((animal) => (
            <div
              key={animal.id}
              className="bg-white border-4 border-black p-4 transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-[200px] h-[239px]">
                  <Image
                    src="/animal.png"
                    alt={animal.name}
                    fill
                    className="border-2 rounded-md border-black"
                  />
                </div>

              </div>
              <h2 className="text-2xl font-bold mb-2  text-center">{animal.name}</h2>
              <p className="font-bold text-center">Espèce : <span className="font-normal">{animal.species}</span></p>
              <Link
                href={`/animals/${animal.id}`}
                className="block mt-4 text-center bg-[#A7C7E7] border-2 rounded-md border-black p-2 font-bold  tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
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

export default AllAnimals;