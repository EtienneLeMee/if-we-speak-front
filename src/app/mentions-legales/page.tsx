import Link from "next/link";

// app/mentions-legales/page.tsx
export default function MentionsLegales() {
  return (
    <div className="relative max-w-3xl mx-auto px-8 py-8 my-32 text-white bg-white/15 backdrop-blur-sm rounded-4xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Le site <strong>If We Speak</strong> est un média indépendant, édité à titre personnel et bénévole par son fondateur.
        </p>
        <p className="mt-2">
          Aucune société ou structure juridique n&#39;est associée à la gestion ou à la publication du site.
        </p>
        <p className="mt-2">Contact : <Link href="mailto:ifwespeak98@gmail.com" className="underline">ifwespeak98@gmail.com</Link></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          <br />
          Site web : <a href="https://vercel.com" className="underline">vercel.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Responsabilité éditoriale</h2>
        <p>
          L’ensemble des contenus publiés sur If We Speak (textes, images, vidéos) sont rédigés ou sélectionnés par l’éditeur du site,
          dans une démarche personnelle, non commerciale et sans but lucratif.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          Sauf mention contraire, les contenus publiés sur If We Speak sont la propriété de leur auteur. Toute reproduction,
          même partielle, doit faire l’objet d’une demande préalable par email.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Absence de revenus</h2>
        <p>
          Le site If We Speak n’est associé à aucune publicité, partenariat rémunéré ou programme d’affiliation.
          Il a été conçu à titre personnel, sans aucune contrepartie financière ni apport en capital.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée ni stockée via le site, hormis celles éventuellement transmises par email
          dans le cadre d’un échange volontaire.
        </p>
      </section>
    </div>
  );
}
