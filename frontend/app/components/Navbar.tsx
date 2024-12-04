import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg animate-fadeIn">
      <ul className="flex justify-center space-x-8 text-white">
        <li className="hover:text-yellow-500 transition-colors duration-300">
          <Link href={"/"}>Accueil</Link>
        </li>
        <li className="hover:text-yellow-500 transition-colors duration-300">
          <Link href={"/persons"}>Personnes</Link>
        </li>
        <li className="hover:text-yellow-500 transition-colors duration-300">
          <Link href={"/animals"}>Animaux</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;