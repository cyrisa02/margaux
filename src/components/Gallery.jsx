// Placeholders : remplace les chemins par les vraies images dans le dossier public/images
const artworks = [
  { id: 1, title: "Œil Cosmique", desc: "Tissage mural, techniques mixtes", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80" },
  { id: 2, title: "Pieuvre Céleste", desc: "Feutrage et broderie", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80" },
  { id: 3, title: "Masque de Fleurs", desc: "Art textile, perles", img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80" },
  { id: 4, title: "Mandala de Plumes", desc: "Tissage et éléments naturels", img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&q=80" },
  { id: 5, title: "Attrape-Rêves", desc: "Tissage circulaire et fleurs séchées", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80" },
  { id: 6, title: "Motif Celtique", desc: "Impression sur tissu", img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&q=80" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-4">Galerie</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Un aperçu de mes créations. Chaque pièce est unique et réalisée à la main.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div key={art.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={art.img} 
                alt={`${art.title} - ${art.desc}`} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-serif font-bold">{art.title}</h3>
                  <p className="text-gray-200 text-sm">{art.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
