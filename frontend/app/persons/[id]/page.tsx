'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { notFound } from 'next/navigation';
import { GET_PERSON_BY_ID } from '@/app/graphql/PersonQueries';
import { GET_ANIMALS } from '@/app/graphql/AnimalQueries';
import LoadingMessage from '@/app/components/LoadingMessage';
import ErrorMessage from '@/app/components/ErrorMessage';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Person = () => {

  // Extracts the id in the URL to get a specific person and with it extracts the data from GraphQL
  const params = useParams();
  const { id: personId } = params;
  const { loading: personLoading, error: personError, data: personData } = useQuery(GET_PERSON_BY_ID, {
    variables: { id: Number(personId) },
  });

  // GraphQL Querie to know if the person has animal(s)
  const { loading: animalsLoading, error: animalsError, data: animalsData } = useQuery(GET_ANIMALS);

  if (personLoading || animalsLoading) return <LoadingMessage />;
  if (personError) return <ErrorMessage message={personError.message} />;
  if (animalsError) return <ErrorMessage message={animalsError.message} />;

  // Avoid Nextjs error page
  const person = personData?.person;
  if (!person) {
    notFound();
  }

  // Filter to get the animal(s) person owned 
  const animalsOwned = animalsData?.animals.filter(
    (animal: { ownerId: number; }) => animal.ownerId === Number(personId)
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 tracking-wider">
          Profil de {person.firstName} {person.lastName}
        </h1>
        <div className="bg-white border-4 border-black p-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-[200px] h-[239px]">
              <Image
                src="/person.png"
                alt={person.firstName}
                fill
                className="border-2 rounded-md border-black"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-center">{person.firstName} {person.lastName}</h2>
          <div className="space-y-2">
            <p className="text-xl"><span className="font-bold">Email :</span> {person.email}</p>
            <p className="text-xl"><span className="font-bold">Téléphone :</span> {person.phoneNumber}</p>
            {animalsOwned && animalsOwned.length > 0 ? (
              <p className="text-xl">
                <span className="font-bold">Animaux :</span>{' '}
                {animalsOwned.map((animal) => (
                  <Link
                    key={animal.id}
                    href={`/animals/${animal.id}`}
                    className="font-bold bg-[#A7C7E7] border-2 rounded-md border-black px-2 py-1 inline-block transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] mr-2"
                  >
                    {animal.name}
                  </Link>
                ))}
              </p>
            ) : (
              <p className="text-xl"><span className="font-bold">Animaux :</span> Aucun animal trouvé pour ce propriétaire.</p>
            )}
          </div>
        </div>
        <Link
          href="/persons"
          className="block mt-8 text-center bg-[#FD9745] border-4 border-black p-4 font-bold text-2xl tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          Retour à la liste des propriétaires
        </Link>
      </div>
    </div>
  );
};

export default Person;
