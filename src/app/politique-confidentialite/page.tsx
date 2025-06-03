import Link from "next/link";

// app/politique-de-confidentialite/page.tsx
export default function PolitiqueConfidentialite() {
  return (
    <div className="relative isolate px-8">
    <div className="relative max-w-3xl mx-auto my-8 p-8 sm:my-48 lg:my-24 lg:py-242 text-white bg-white/15 backdrop-blur-sm rounded-4xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Collecte des données personnelles</h2>
        <p className="text-justify">
          Le site <strong>If We Speak</strong> ne collecte aucune donnée personnelle à l’insu des utilisateurs.
          Aucun formulaire de contact, inscription ou commentaire n’est proposé, et aucune information nominative n’est requise.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Utilisation des cookies</h2>
        <p className="text-justify">
          Le site n’utilise aucun cookie à des fins publicitaires ou statistiques. Seuls les cookies strictement nécessaires
          au bon fonctionnement technique du site peuvent être utilisés.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Outils tiers</h2>
        <p className="text-justify">
          Aucun service tiers (comme Google Analytics, Facebook Pixel ou autres outils de tracking) n’est intégré à ce site.
          La navigation est entièrement privée et non suivie.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Responsable du traitement</h2>
        <p className="text-justify">
          Ce site étant un projet personnel et non commercial, aucune structure juridique ne traite de données au sens du RGPD.
          Pour toute question, vous pouvez contacter l’éditeur : <Link href="mailto:ifwespeak98@gmail.com" className="underline">ifwespeak98@gmail.com</Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Droits des utilisateurs</h2>
        <p className="text-justify">
          Conformément au RGPD, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition
          concernant ses éventuelles données. Toutefois, aucune donnée n’étant collectée, ces droits n’ont pas lieu d’être appliqués
          dans le cadre de ce site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Modifications</h2>
        <p className="text-justify">
          La présente politique de confidentialité peut être mise à jour sans préavis, en fonction de l’évolution du site.
        </p>
      </section>
    </div>
    </div>
  );
}
