import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact'; // Import ajouté
import Remarques from './components/Remarques';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Margaux Hoare | Artiste Textile & Artisane à Soissons</title>
        <meta name="description" content="Margaux Hoare, artiste textile à Soissons. Tissage, feutrage, art visionnaire. Découvrez son univers poétique." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Helmet>
                  <title>Accueil | Margaux Hoare</title>
                  <script type="application/ld+json">
                    {`
                      {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Margaux Hoare - Artiste Textile",
                        "url": "https://margaux-hoare.vercel.app",
                        "address": {
                          "@type": "PostalAddress",
                          "addressLocality": "Soissons",
                          "addressRegion": "Hauts-de-France",
                          "postalCode": "02200",
                          "addressCountry": "FR"
                        },
                        "description": "Créations textiles poétiques et visionnaires. Tissage, feutrage, art visionnaire à Soissons.",
                        "sameAs": [
                          "https://www.instagram.com/margaux_hoare/",
                          "https://www.facebook.com/margaux.hoare"
                        ]
                      }
                    `}
                  </script>
                </Helmet>
                <Hero />
                <Gallery />
              </>
            } />
            <Route path="/a-propos" element={
              <>
                <Helmet>
                  <title>À propos | Margaux Hoare</title>
                  <meta name="description" content="Découvrez le parcours de Margaux Hoare, artiste textile à Soissons, et sa démarche artistique." />
                </Helmet>
                <About />
              </>
            } />
            {/* Route Contact ajoutée */}
            <Route path="/contact" element={
              <>
                <Helmet>
                  <title>Contact | Margaux Hoare</title>
                  <meta name="description" content="Contactez Margaux Hoare pour une commande personnalisée ou une exposition." />
                </Helmet>
                <Contact />
              </>
            } />
            <Route path="/remarques" element={
              <Remarques />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
