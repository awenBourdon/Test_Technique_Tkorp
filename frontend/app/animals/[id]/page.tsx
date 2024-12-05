'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GET_ANIMAL_BY_ID } from '@/app/graphql/AnimalQueries';
import Image from 'next/image';

const Animal = () => {
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_ANIMAL_BY_ID, {
    variables: { id: Number(id) },
  });
  console.table(data);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center font-mono">
      <div className="text-4xl font-bold uppercase tracking-wider bg-[#FFA500] border-4 border-black p-4">
        Chargement...
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center font-mono">
      <div className="text-4xl font-bold uppercase tracking-wider bg-[#FFA500] border-4 border-black p-4">
        Erreur: {error.message}
      </div>
    </div>
  );

  const animal = data?.animal;
  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 uppercase tracking-wider">
          Profil de {animal.name}
        </h1>
        <div className="bg-white border-4 border-black p-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-[200px] h-[239px]">
              <Image
                src="/animal.png"
                alt={animal.name}
                fill
                className="border-2 border-black"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 uppercase text-center">{animal.name}</h2>
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
                  className="bg-[#FFA500] border-2 border-black px-2 py-1 inline-block transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                >
                  {animal.owner.firstName} {animal.owner.lastName}
                </Link>
              </p>
            ) : (
              <p className="text-xl"><span className="font-bold">Propriétaire :</span> Aucun propriétaire</p>
            )}
          </div>
        </div>
        <Link
          href="/animals"
          className="block mt-8 text-center bg-[#FFA500] border-4 border-black p-4 font-bold text-2xl uppercase tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          Retour à la liste des animaux
        </Link>
      </div>
    </div>
  );
};

export default Animal;


