import { data } from "@/app/data/data";
import { notFound } from "next/navigation";

const Person = ({ params }: { params: { id: string } }) => {

  const person = data[0].persons.find((person) => person.id === Number(params.id));

  if (!person) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Profil de {person.firstName} {person.lastName}
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src={`/placeholder.svg?text=${person.firstName}&height=200&width=300`}
            alt={person.firstName}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            {person.firstName} {person.lastName}
          </h2>
          <p>Email : {person.email}</p>
          <p>Téléphone : {person.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default Person
