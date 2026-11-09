import { Helmet } from 'react-helmet-async';

export default function Remarques() {
  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Remarques & Documentation | Margaux Hoare</title>
        <meta name="description" content="Documentation complète, spécifications SEO et feuille de route du site de Margaux Hoare." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* En-tête */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-artisan-text">
            Journal de bord & Spécifications
          </h1>
          <p className="text-lg text-gray-600">
            Cette page regroupe toutes les informations, les choix techniques, le SEO et la feuille de route pour les évolutions futures du site de Margaux Hoare.
          </p>
        </div>

        {/* 1. Identité & Contenu */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif font-bold mb-6 text-artisan-text border-b pb-4">
            1. Identité & Contenu
          </h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <strong>Nom :</strong> Margaux Hoare
            </li>
            <li>
              <strong>Localisation :</strong> Soissons (02200), Aisne, Hauts-de-France.
            </li>
            <li>
              <strong>Spécialités :</strong> Tissage, feutrage, art textile poétique et visionnaire (créatures, motifs celtiques, mandalas).
            </li>
            <li>
              <strong>Dimension spirituelle :</strong> Pratiquante et maître <strong>Reiki Usui</strong> (tradition Mikao Usui), mentionnée dans sa bio Instagram. Cette dimension est intégrée dans la section "À propos" pour donner de la profondeur à son univers.
            </li>
            <li>
              <strong>Accessibilité :</strong> L'artiste est en fauteuil roulant (<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">#wheelchairuser</code>). Le site doit donc respecter les normes d'accessibilité (contrastes suffisants, navigation clavier, etc.). Des efforts ont été faits en ce sens (focus visibles).
            </li>
            <li>
              <strong>Réseaux sociaux :</strong> 
              <br />- Instagram : <a href="https://www.instagram.com/margaux_hoare/" target="_blank" rel="noopener noreferrer" className="text-artisan-accent hover:underline">@margaux_hoare</a>
              <br />- Facebook : <a href="https://www.facebook.com/margaux.hoare" target="_blank" rel="noopener noreferrer" className="text-artisan-accent hover:underline">margaux.hoare</a>
            </li>
          </ul>
        </div>

        {/* 2. Architecture du site & SPA */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif font-bold mb-6 text-artisan-text border-b pb-4">
            2. Architecture du site (SPA)
          </h2>
          <p className="text-gray-700 mb-4">
            Le site est une <strong>Single Page Application (SPA)</strong> développée avec React et Vite. Le routage est géré par <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">react-router-dom</code>.
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li><strong>Accueil :</strong> Section "Hero" d'introduction et Galerie (œuvres).</li>
            <li><strong>À propos :</strong> Parcours de l'artiste, démarche artistique, mise en avant du Reiki Usui.</li>
            <li><strong>Contact :</strong> Formulaire de contact (via Formspree) pour les demandes de commandes sur mesure ou d'expositions.</li>
            <li><strong>Remarques :</strong> Cette page de documentation.</li>
          </ul>
          <p className="text-gray-700 mt-4 text-sm bg-blue-50 p-4 rounded-lg border border-blue-100">
            <em>Note sur le routage :</em> Bien qu'il y ait plusieurs pages, c'est bien une SPA. Le navigateur ne recharge pas la page lors de la navigation. Un fichier <code className="bg-white px-1 rounded text-xs font-mono">vercel.json</code> est présent à la racine pour rediriger toutes les routes vers <code className="bg-white px-1 rounded text-xs font-mono">index.html</code> afin d'éviter les erreurs 404 si on actualise la page.
          </p>
        </div>

        {/* 3. SEO */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif font-bold mb-6 text-artisan-text border-b pb-4">
            3. Le SEO : qu'as-tu mis en méta ?
          </h2>
          <p className="text-gray-700 mb-6">
            Voici ce qui a été intégré dans le code (dans <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">index.html</code> et <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">App.jsx</code>) :
          </p>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li><strong>Title :</strong> "Margaux Hoare | Artiste Textile & Artisane à Soissons"</li>
            <li><strong>Description :</strong> "Margaux Hoare, artiste textile à Soissons. Tissage, feutrage, art visionnaire. Découvrez son univers poétique."</li>
            <li><strong>Keywords :</strong> "artisane, tissage, textile, Soissons, Aisne, Hauts-de-France, art visionnaire, Reiki, Margaux Hoare"</li>
            <li><strong>Open Graph (OG) :</strong> Titre et description pour un beau partage sur les réseaux sociaux.</li>
            <li><strong>Langue :</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">&lt;html lang="fr"&gt;</code> (important pour le SEO local).</li>
            <li><strong>Alt des images :</strong> Descriptions précises (ex: "Œil Cosmique - Tissage mural...").</li>
            <li><strong>JSON-LD (Données structurées) :</strong> Intégré dans <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">App.jsx</code> pour indiquer à Google qu'il s'agit d'une activité locale (LocalBusiness) à Soissons.</li>
          </ul>
        </div>

        {/* 4. Fonctionnalités & Formulaire */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif font-bold mb-6 text-artisan-text border-b pb-4">
            4. Fonctionnalités & Formulaire
          </h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <strong>Formulaire de contact :</strong> Pas de vente en ligne. Le formulaire utilise le service tiers gratuit <strong>Formspree</strong> pour envoyer les messages directement par email, sans avoir besoin d'un serveur backend.
            </li>
            <li>
              <strong>Galerie d'images :</strong> Pour le moment, elle utilise des images de remplacement (Unsplash). Les vraies photos de Margaux viendront remplacer ces liens.
            </li>
            <li>
              <strong>Liens réseaux sociaux :</strong> Intégrés dans le Footer avec les icônes (via <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600">react-icons</code>) et les bonnes URL.
            </li>
            <li>
              <strong>Pas de vente en ligne :</strong> Le site est une vitrine. Les clients potentiels doivent passer par le formulaire de contact.
            </li>
          </ul>
        </div>

        {/* 5. Feuille de route & Améliorations Futures */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif font-bold mb-6 text-artisan-text border-b pb-4">
            5. Feuille de route & Améliorations
          </h2>
          
          <div className="space-y-8">
            {/* SEO & Performance */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-artisan-accent">1. SEO & Performance (Le plus important pour être trouvé sur Google)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Compression et format des images (WebP/AVIF) :</strong> Les photos d'artisanat sont souvent lourdes. Une fois les vraies photos ajoutées, il faudra les convertir au format WebP (beaucoup plus léger que le JPG) pour que le site charge instantanément, surtout sur mobile. Des outils comme Squoosh ou TinyPNG font ça très bien.</li>
                <li><strong>Balises alt ultra-descriptives :</strong> Pour le SEO et l'accessibilité (très important vu qu'elle est en fauteuil), ne te contente pas de "Tissage". Mets plutôt : <em>alt="Tissage mural en laine mérinos aux motifs celtiques, créé à Soissons par Margaux Hoare"</em>.</li>
                <li><strong>Le fichier sitemap.xml et robots.txt :</strong> Ajoute ces fichiers à la racine de ton dossier <code className="bg-gray-100 px-1 rounded text-sm font-mono">public/</code> pour dire à Google quelles pages explorer.</li>
                <li><strong>Google Search Console :</strong> Une fois le site sur Vercel, inscris-le sur Google Search Console pour soumettre ton sitemap et voir comment Google indexe le site.</li>
                <li><strong>Google Business Profile (Fiche d'établissement) :</strong> C'est crucial pour le SEO local. Crée une fiche pour "Margaux Hoare Artiste Textile" à Soissons, avec le lien vers le site et les photos. C'est ce qui la fera apparaître sur Google Maps quand on cherche un artisan à Soissons.</li>
              </ul>
            </div>

            {/* UX & Design */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-artisan-accent">2. UX & Design (Une fois les photos en place)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Une Lightbox (Galerie interactive) :</strong> Quand on clique sur une photo dans la galerie, elle s'ouvre en grand avec un fond sombre, et on peut passer à la suivante avec des flèches. C'est indispensable pour une artiste.</li>
                <li><strong>Le "Lazy Loading" natif :</strong> J'ai déjà mis l'attribut <code className="bg-gray-100 px-1 rounded text-sm font-mono">loading="lazy"</code> sur les images de la galerie dans le code. C'est bien. Mais avec les vraies photos, tu pourras ajouter un effet de "flou" (blur-up) qui se précise quand l'image charge, pour un rendu très pro.</li>
                <li><strong>Agrandir le texte "À propos" avec ses vraies créations :</strong> Au lieu d'une simple photo d'elle, tu pourrais mettre une photo d'elle en train de tisser (si tu en as une), ou une photo d'une de ses œuvres phares.</li>
              </ul>
            </div>

            {/* Artisan & Commandes */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-artisan-accent">3. L'aspect "Artisan & Commandes" (Fonctionnel)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Un formulaire de contact plus "pro" :</strong> Au lieu de juste Nom/Email/Message, ajoute un menu déroulant : "Type de demande" avec les options "Achat d'une œuvre existante", "Commande sur mesure", "Exposition / Événement", "Autre". Ça te permettra de filtrer les demandes.</li>
                <li><strong>Une page "Presse / Expositions" :</strong> Si Margaux a déjà exposé quelque part, ou si elle a été dans un journal local (L'Aisne Nouvelle, etc.), une petite section "Ils parlent de moi" avec les logos est un super gage de crédibilité pour le SEO et les futurs clients.</li>
                <li><strong>Les mentions légales :</strong> Obligatoire en France pour un site pro. Une page simple avec son statut (auto-entrepreneur ?), son SIRET, et l'hébergeur (Vercel).</li>
              </ul>
            </div>

            {/* Techniques */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-artisan-accent">4. Techniques (Si tu veux pousser plus loin)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Animations au scroll (Framer Motion) :</strong> Faire apparaître les photos de la galerie en douceur quand on scrolle. Ça rend le site plus "vivant" et poétique, en accord avec son univers.</li>
                <li><strong>Un CDN pour les images :</strong> Si elle a des dizaines de photos, utiliser un service comme Cloudinary (gratuit jusqu'à un certain point) ou Vercel Image Optimization (inclus) permet de servir automatiquement la bonne taille d'image selon l'écran du visiteur.</li>
                <li><strong>Passer de SPA à Next.js (Plus tard) :</strong> Le jour où tu voudras un SEO absolument parfait (rendu côté serveur), tu pourras migrer vers Next.js. Mais pour un MVP, React + Vite + Helmet est très bien.</li>
              </ul>
            </div>

            {/* To-Do List finale */}
            <div className="mt-8 p-6 bg-artisan-accent/5 rounded-xl border border-artisan-accent/20">
              <h3 className="text-xl font-bold mb-4 text-artisan-text">En résumé, ta prochaine "To-Do List" :</h3>
              <ol className="list-decimal list-inside text-gray-800 space-y-2 font-medium">
                <li>Remplacer les images Unsplash par les siennes (compressées en WebP).</li>
                <li>Créer la fiche Google Business.</li>
                <li>Ajouter la Lightbox sur la galerie.</li>
                <li>Mettre à jour le formulaire de contact avec un menu déroulant.</li>
              </ol>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
