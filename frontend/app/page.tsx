'use client';
import { data } from './data/data';
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const itemsPerPage = 16;

export default function AnimatedPage() {
  const [activeSection, setActiveSection] = useState<"persons" | "animals" | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Pour diviser les données en page
  const paginate = (items: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  // Calcule le nombre de pages selon total/10
  const totalPagesPersons = Math.ceil(data[0].persons.length / itemsPerPage);
  const totalPagesAnimals = Math.ceil(data[0].animals.length / itemsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen  p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-8"
        >
          Bonjour je suis un test technique
        </motion.h1>

        <div className="flex justify-center space-x-4 mb-8">
          <button onClick={() => setActiveSection("persons")}>Voir les Humains</button>
          <button onClick={() => setActiveSection("animals")}>Voir les Animaux</button>
        </div>

        {/* Affiche la pagination si un state est activé */}
        {activeSection && (
          <div className="flex justify-center pb-8">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-black text-white rounded-md mr-2 disabled:opacity-50"
            >
              Précédent
            </button>
            <span className="px-4 py-2">
              Page {currentPage} / {activeSection === "persons" ? totalPagesPersons : totalPagesAnimals}
            </span>
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={
                currentPage === (activeSection === "persons" ? totalPagesPersons : totalPagesAnimals)
              }
              className="px-4 py-2 bg-black text-white rounded-md ml-2 disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        )}

        {activeSection === "persons" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6"
          >
            {paginate(data[0].persons).map((person) => (
              <motion.div
                key={person.id}
                variants={itemVariants}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <motion.img
                  src={`/placeholder.svg?text=${person.firstName}&height=200&width=300`}
                  alt={person.firstName}
                  className="w-full h-48 object-cover rounded mb-4"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {person.firstName} {person.lastName}
                </h2>
                <p>Email : {person.email}</p>
                <p>Téléphone : {person.phoneNumber}</p>
                <Link
                  href={`/persons/${person.id}`}
                  className="text-black hover:underline mt-4 block text-center"
                >
                  Voir Profil
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeSection === "animals" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6"
          >
            {paginate(data[0].animals).map((animal) => (
              <motion.div
                key={animal.id}
                variants={itemVariants}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <motion.img
                  src={`/placeholder.svg?text=${animal.name}&height=200&width=300`}
                  alt={animal.name}
                  className="w-full h-48 object-cover rounded mb-4"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <h2 className="text-xl font-semibold mb-2">{animal.name}</h2>
                <p>Espèce : {animal.species}</p>
                <p>Race : {animal.breed}</p>
                <p>Couleur : {animal.color}</p>
                <p>Poids : {(animal.weight / 1000).toFixed(2)} kg</p>
                <Link
                  href={`/animals/${animal.id}`}
                  className="text-black hover:underline mt-4 block text-center"
                >
                  Voir Profil
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
