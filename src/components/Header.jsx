import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-artisan-text hover:text-artisan-accent transition-colors">
          Margaux Hoare
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-artisan-accent transition-colors">Accueil</Link>
          <Link to="/a-propos" className="hover:text-artisan-accent transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-artisan-accent transition-colors">Contact</Link>
        </nav>
        <Link to="/contact" className="md:hidden bg-artisan-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
          Me contacter
        </Link>
      </div>
    </header>
  );
}
