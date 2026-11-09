export default function Hero() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-artisan-text">
          L'art textile <span className="text-artisan-accent">poétique</span> & visionnaire
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Margaux Hoare, artiste et artisane à Soissons. Je crée des pièces uniques en tissage, feutrage et art visionnaire, où chaque fil raconte une histoire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#galerie" className="bg-artisan-text text-white px-8 py-3 rounded-full font-semibold hover:bg-artisan-accent transition-colors">
            Découvrir la galerie
          </a>
          <a href="/contact" className="border-2 border-artisan-text px-8 py-3 rounded-full font-semibold hover:bg-artisan-text hover:text-white transition-colors">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
