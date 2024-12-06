import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" border-b-4 border-black p-4 ">
      <ul className="flex justify-center space-x-4 md:space-x-8">

        <li className="relative group">
          <Link href={"/"} className="block">
            <div className="px-4 py-2 text-lg md:text-xl font-bold  tracking-wider bg-[#FD9745] border-4 border-black transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              Accueil
            </div>
          </Link>
        </li>

        <li className="relative group">
          <Link href={"/persons"} className="block">
            <div className="px-4 py-2 text-lg md:text-xl font-bold  tracking-wider bg-[#FD9745] border-4 border-black transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              Propriétaires
            </div>
          </Link>
        </li>

        <li className="relative group">
          <Link href={"/animals"} className="block">
            <div className="px-4 py-2 text-lg md:text-xl font-bold  tracking-wider bg-[#FD9745] border-4 border-black transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              Animaux
            </div>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
