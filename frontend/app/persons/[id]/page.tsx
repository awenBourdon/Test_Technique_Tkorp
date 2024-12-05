'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { notFound } from 'next/navigation';
import { GET_PERSON_BY_ID } from '../../graphql/PersonQueries';
import Link from 'next/link';
import Image from 'next/image';
import LoadingMessage from '@/app/components/LoadingMessage';
import ErrorMessage from '@/app/components/ErrorMessage';

const Person = () => {

  // Extracts the id in the URL to get a specific person and with it extracts the data from GraphQL
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_PERSON_BY_ID, {
    variables: { id: Number(id) },
  });

  if (loading) return (
    <LoadingMessage/>
  );

  if (error) return (
    <ErrorMessage message={error.message} />
  );

  // Avoids Nextjs error page
  const person = data?.person;
  if (!person) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8  tracking-wider">
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
          <h2 className="text-4xl font-bold mb-4  text-center">{person.firstName} {person.lastName}</h2>
          <div className="space-y-2">
            <p className="text-xl"><span className="font-bold">Email :</span> {person.email}</p>
            <p className="text-xl"><span className="font-bold">Téléphone :</span> {person.phoneNumber}</p>
          </div>
        </div>
        <Link
          href="/persons"
          className="block mt-8 text-center bg-[#FD9745] border-4 border-black p-4 font-bold text-2xl  tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          Retour à la liste des humains
        </Link>
      </div>
    </div>
  );
};

export default Person;