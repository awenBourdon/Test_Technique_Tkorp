'use client';
import Link from 'next/link';

const HomePage = () => {

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl border-4 border-black p-8">
        <h1
          className="text-5xl sm:text-6xl font-bold mb-12 tracking-tighter transition-opacity duration-500"

        >
          Hello Test Technique
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/persons" className="block">
            <button className="w-full px-8 py-6 bg-[#A7C7E7] text-2xl font-bold tracking-widest border-4 border-black transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 hover:shadow-[8px_8px_0_rgba(0,0,0,1)] active:shadow-none">
              Voir les Propriétaires
            </button>
          </Link>
          
          <Link href="/animals" className="block">
            <button className="w-full px-8 py-6 bg-[#A7C7E7] text-2xl font-bold tracking-widest border-4 border-black transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 hover:shadow-[8px_8px_0_rgba(0,0,0,1)] active:shadow-none">
              Voir les Animaux
            </button>
          </Link>
        </div>

        <div className="mt-16 text-4xl font-bold animate-glitch">
          <Link href="https://awenbourdon.fr/">
            Par Awen Bourdon
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;