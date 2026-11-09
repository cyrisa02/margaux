import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-artisan-text text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="font-serif text-2xl font-bold">Margaux Hoare</p>
          <p className="text-sm text-gray-400 mt-1">Artiste textile & artisane à Soissons</p>
        </div>
        
        <div className="flex space-x-6 items-center">
          <a 
            href="https://www.instagram.com/margaux_hoare/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-artisan-accent transition-colors"
            aria-label="Suivez Margaux Hoare sur Instagram"
          >
            <FaInstagram size={20} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          
          <a 
            href="https://www.facebook.com/margaux.hoare" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-artisan-accent transition-colors"
            aria-label="Suivez Margaux Hoare sur Facebook"
          >
            <FaFacebook size={20} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          
          <a href="/contact" className="hover:text-artisan-accent transition-colors font-semibold">
            Contact
          </a>
          <a href="/remarques" className="hover:text-artisan-accent transition-colors font-semibold">
            Remarques
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Margaux Hoare. Tous droits réservés.
      </div>
    </footer>
  );
}
