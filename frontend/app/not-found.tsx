import Link from 'next/link';

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-12 tracking-tighter">Erreur 404. Page non trouvée.</h1>
      <p className="text-2xl font-semibold mb-12 tracking-tighter"> La page que vous recherchez n&apos;existe pas.</p>
      <Link href={"/"} 
        className="block mt-4 text-lg text-center bg-[#FD9745] border-2 rounded-md border-black p-2 font-bold  tracking-wider transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
};

export default Error404;