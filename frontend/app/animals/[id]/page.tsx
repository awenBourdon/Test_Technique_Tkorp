'use client';

import { useParams } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const GET_ANIMAL = gql`
  query GetAnimal($id: Int!) {
    animal(id: $id) {
      id
      name
      species
      breed
      color
      weight
      owner {
        id
        firstName
        lastName
      }
    }
  }
`;

const Animal = () => {
  const params = useParams();
  const { id } = params;

  const { loading, error, data } = useQuery(GET_ANIMAL, {
    variables: { id: Number(id) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const animal = data?.animal;

  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Profil de {animal.name}
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src={`/placeholder.svg?text=${animal.name}&height=200&width=300`}
            alt={animal.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{animal.name}</h2>
          <p>Espèce : {animal.species}</p>
          <p>Race : {animal.breed}</p>
          <p>Couleur : {animal.color}</p>
          <p>Poids : {(animal.weight / 1000).toFixed(2)} kg</p>

          {animal.owner ? (
            <p>
              Propriétaire :{' '}
              <Link href={`/persons/${animal.owner.id}`}>
                {animal.owner.firstName} {animal.owner.lastName}
              </Link>
            </p>
          ) : (
            <p>Aucun propriétaire</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Animal;

