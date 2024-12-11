'use client';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../graphql/PersonQueries';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../components/Pagination';
import LoadingMessage from '../components/LoadingMessage';
import ErrorMessage from '../components/ErrorMessage';
import { Person } from '../types/Person';

const AllPersons = () => {

  // Initializes the state to begin at the first page 
  const [currentPage, setCurrentPage] = useState(1);

  // Get the data from PersonQueries
  const { loading, error, data } = useQuery(GET_PERSONS);

  if (loading) return (
    <LoadingMessage/>
  );

  if (error) return (
    <ErrorMessage message={error.message} />
  );

  const itemsPerPage = 16;

  // Returns a slice of the items array for the current page 
  const paginate = (items: Person[]) => {
    const firstItemOfThePage = (currentPage - 1) * itemsPerPage;
    const lastItemOfThePage = firstItemOfThePage + itemsPerPage;
    return items.slice(firstItemOfThePage, lastItemOfThePage);
  };

  // Calculates the total pages and allow page navigation
  const totalPages = Math.ceil(data.persons.length / itemsPerPage);
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8  tracking-wider">Tous Les Propriétaires</h1>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />

        {/* Uses the paginate function to display a paginated list of persons items */}
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
                    className="border-2 rounded-md border-black"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2  text-center">
                {person.firstName} {person.lastName}
              </h2>

              <Link
                href={`/persons/${person.id}`}
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

export default AllPersons;


