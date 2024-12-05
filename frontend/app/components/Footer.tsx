import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-4 border-black py-6 mt-8  relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold uppercase tracking-wider">
              © 2024 Test Technique Tkorp
            </p>
            <p className="text-sm mt-1">Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="relative group">
              <span className="text-lg font-bold uppercase tracking-wider bg-[#FFA500] border-2 border-black px-3 py-1 transition-transform duration-200 inline-block hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                Confidentialité
              </span>
            </Link>
            <Link href="/terms" className="relative group">
              <span className="text-lg font-bold uppercase tracking-wider bg-[#FFA500] border-2 border-black px-3 py-1 transition-transform duration-200 inline-block hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                Conditions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;