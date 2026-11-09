export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          {/* Remplace par une vraie photo de Margaux dans public/images/margaux.jpg */}
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80" 
            alt="Portrait de Margaux Hoare, artiste textile à Soissons" 
            className="rounded-3xl shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif font-bold mb-6">À propos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Basée à <strong>Soissons</strong>, dans l'Aisne (Hauts-de-France), je suis une artiste et artisane textile. Mon travail explore la poésie des matières et la spiritualité des formes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            À travers le <strong>tissage</strong>, le <strong>feutrage</strong> et l'<strong>art visionnaire</strong>, je crée des pièces uniques qui invitent au voyage intérieur. Mes créations sont imprégnées de symboles celtiques, de motifs organiques et d'une recherche constante d'harmonie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            En tant que praticienne <strong>Reiki Usui</strong>, je mets une intention particulière dans chaque œuvre, pour qu'elle soit non seulement belle, mais aussi porteuse d'énergie apaisante.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-artisan-secondary/10 text-artisan-secondary px-4 py-2 rounded-full text-sm font-semibold">Tissage</span>
            <span className="bg-artisan-secondary/10 text-artisan-secondary px-4 py-2 rounded-full text-sm font-semibold">Feutrage</span>
            <span className="bg-artisan-secondary/10 text-artisan-secondary px-4 py-2 rounded-full text-sm font-semibold">Art Visionnaire</span>
            <span className="bg-artisan-secondary/10 text-artisan-secondary px-4 py-2 rounded-full text-sm font-semibold">Reiki Usui</span>
          </div>
        </div>
      </div>
    </section>
  );
}
