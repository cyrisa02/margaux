export default function Footer() {
  return (
    <footer className="bg-artisan-text text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-serif text-xl font-bold">Margaux Hoare</p>
          <p className="text-sm text-gray-400">Artiste textile & artisane à Soissons</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/marquax_hoare/" target="_blank" rel="noopener noreferrer" className="hover:text-artisan-accent transition-colors">Instagram</a>
          <a href="/contact" className="hover:text-artisan-accent transition-colors">Contact</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Margaux Hoare. Tous droits réservés.
      </div>
    </footer>
  );
}
