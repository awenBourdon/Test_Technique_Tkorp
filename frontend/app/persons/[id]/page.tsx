'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { GET_PERSON_BY_ID } from '../../graphql/PersonQueries';

const Person = () => {
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_PERSON_BY_ID, {
    variables: { id: Number(id) },
  });

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

  console.table(data);
  const person = data?.person;
  if (!person) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 uppercase tracking-wider">
          Profil de {person.firstName} {person.lastName}
        </h1>
        <div className="bg-white border-4 border-black p-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-[200px] h-[239px]">
              <Image
                src="/person.png"
                alt={person.firstName}
                fill
                className="border-2 border-black"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 uppercase text-center">{person.firstName} {person.lastName}</h2>
          <div className="space-y-2">
            <p className="text-xl"><span className="font-bold">Email :</span> {person.email}</p>
            <p className="text-xl"><span className="font-bold">Téléphone :</span> {person.phoneNumber}</p>
          </div>
        </div>
        <Link
          href="/persons"
          className="block mt-8 text-center bg-[#FFA500] border-4 border-black p-4 font-bold text-2xl uppercase tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          Retour à la liste des humains
        </Link>
      </div>
    </div>
  );
};

export default Person;