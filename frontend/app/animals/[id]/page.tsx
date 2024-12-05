'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { notFound } from 'next/navigation';
import { GET_ANIMAL_BY_ID } from '@/app/graphql/AnimalQueries';
import LoadingMessage from '@/app/components/LoadingMessage';
import ErrorMessage from '@/app/components/ErrorMessage';
import Link from 'next/link';
import Image from 'next/image';

const Animal = () => {

  // Extracts the id in the URL to get a specific animal and with it extracts the data from GraphQL
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_ANIMAL_BY_ID, {
    variables: { id: Number(id) },
  });

  if (loading) return (
    <LoadingMessage/>
  );

  if (error) return (
    <ErrorMessage message={error.message} />
  );

  // Avoid Nextjs error page
  const animal = data?.animal;
  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8  tracking-wider">
          Profil de {animal.name}
        </h1>
        <div className="bg-white border-4 border-black p-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-[200px] h-[239px]">
              <Image
                src="/animal.png"
                alt={animal.name}
                fill
                className="border-2 rounded-md border-black"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4  text-center">{animal.name}</h2>
          <div className="space-y-2">
            <p className="text-xl"><span className="font-bold">Espèce :</span> {animal.species}</p>
            <p className="text-xl"><span className="font-bold">Race :</span> {animal.breed}</p>
            <p className="text-xl"><span className="font-bold">Couleur :</span> {animal.color}</p>
            <p className="text-xl"><span className="font-bold">Poids :</span> {(animal.weight / 1000).toFixed(2)} kg</p>
            {animal.owner ? (
              <p className="text-xl">
                <span className="font-bold">Propriétaire :</span>{' '}
                <Link
                  href={`/persons/${animal.owner.id}`}
                  className="font-bold bg-[#A7C7E7] border-2 rounded-md border-black px-2 py-1 inline-block transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                >
                  {animal.owner.firstName} {animal.owner.lastName}
                </Link>
              </p>
            ) : (
              <p className="text-xl"><span className="font-bold">Propriétaire :</span> Aucun propriétaire :( </p>
            )}
          </div>
        </div>
        <Link
          href="/animals"
          className="block mt-8 text-center bg-[#FD9745] border-4 border-black p-4 font-bold text-2xl  tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          Retour à la liste des animaux
        </Link>
      </div>
    </div>
  );
};

export default Animal;


