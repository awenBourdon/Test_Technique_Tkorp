import { notFound } from "next/navigation";
import { data } from "@/app/data/data";
import Link from 'next/link';

const Animal = ({ params }: { params: { id: string } }) => {
    const animal = data[0].animals.find((animal) => animal.id === Number(params.id));


  if (!animal) {
    notFound();
  }


  return (
    <div className="min-h-screen  p-8">
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
          {animal.personId ? (
                <p>
                  Propriétaire :{" "}
                  <Link href={`/persons/${animal.personId}`}>
                    {data[0].persons.find(person => person.id === animal.personId)?.firstName}
                  </Link>
                </p>
              ) : (
                <p>N&apos;a pas de propriétaire :(</p>
              )}
        </div>
      </div>
    </div>
  );
}

export default Animal

