import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/VOTRE_ID_FORMSPREE', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-4 text-center">Contact</h2>
        <p className="text-center text-gray-600 mb-10">
          Une question ? Un projet de création sur mesure ? N'hésitez pas à me contacter.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Nom</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-artisan-accent focus:border-transparent outline-none transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-artisan-accent focus:border-transparent outline-none transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-artisan-accent focus:border-transparent outline-none transition"></textarea>
          </div>
          <button type="submit" className="w-full bg-artisan-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Envoyer le message
          </button>
          
          {status === 'success' && <p className="text-green-600 text-center font-semibold">Message envoyé avec succès !</p>}
          {status === 'error' && <p className="text-red-600 text-center font-semibold">Erreur lors de l'envoi. Réessayez.</p>}
        </form>
        
        <div className="mt-8 text-center text-gray-600">
          <p>Soissons, Aisne (02), Hauts-de-France</p>
          <p className="text-sm mt-2">Retrouvez-moi sur Instagram : @marquax_hoare</p>
        </div>
      </div>
    </section>
  );
}
