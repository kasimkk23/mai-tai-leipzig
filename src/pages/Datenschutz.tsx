import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { restaurant } from '../data/restaurant'

// This page's content is intentionally kept in German always (see the
// notice banner below) — legally-relevant information should not be
// machine-translated. Only the browser tab title/meta description and the
// explanatory notice itself follow the visitor's chosen UI language.
export default function Datenschutz() {
  const { t, i18n } = useTranslation()
  const isGerman = i18n.language === 'de'

  return (
    <>
      <SEO
        titleKey="legal.datenschutzSeoTitle"
        descriptionKey="legal.datenschutzSeoDescription"
        path="/datenschutz"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <p className="text-eyebrow text-jade">Rechtliches</p>
            <h1 className="mt-4 font-display text-4xl font-medium text-charcoal md:text-5xl">
              Datenschutzerklärung
            </h1>

            {!isGerman && (
              <p className="mt-5 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 text-sm text-charcoal/70">
                {t('legal.onlyGermanNotice')}
              </p>
            )}

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm leading-relaxed text-charcoal/70">
              <strong className="text-charcoal">Hinweis (Platzhalter-Inhalt):</strong>{' '}
              Dies ist eine Standardvorlage für eine Datenschutzerklärung
              eines deutschen Restaurantbetriebs. Sie ersetzt keine
              Rechtsberatung. Bitte vor Livegang von einem/einer
              Rechtsanwält:in prüfen und an die tatsächlich eingesetzten
              Dienste (z. B. Formular-Backend, Analyse-Tools, Karten-Einbindung)
              anpassen lassen.
            </div>

            <div className="prose-legal mt-10 space-y-8 text-charcoal/75">
              <section>
                <h2 className="font-display text-2xl text-charcoal">1. Verantwortlicher</h2>
                <p className="mt-3 leading-relaxed">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                  (DSGVO) ist:
                  <br />
                  {restaurant.owner}
                  <br />
                  {restaurant.address.street}, {restaurant.address.zip}{' '}
                  {restaurant.address.city}
                  <br />
                  Telefon: {restaurant.phone} · E-Mail:{' '}
                  <a href={`mailto:${restaurant.email}`} className="text-jade underline underline-offset-2">
                    {restaurant.email}
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">
                  2. Allgemeines zur Datenverarbeitung
                </h2>
                <p className="mt-3 leading-relaxed">
                  Wir verarbeiten personenbezogene Daten unserer Nutzer
                  grundsätzlich nur, soweit dies zur Bereitstellung einer
                  funktionsfähigen Website sowie unserer Inhalte und
                  Leistungen erforderlich ist. Die Verarbeitung
                  personenbezogener Daten erfolgt regelmäßig nur nach
                  Einwilligung des Nutzers oder auf Grundlage berechtigter
                  Interessen (Art. 6 Abs. 1 lit. a, b und f DSGVO).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">
                  3. Bereitstellung der Website und Server-Logfiles
                </h2>
                <p className="mt-3 leading-relaxed">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem
                  Endgerät zum Einsatz kommenden Browser automatisch
                  Informationen an den Server unserer Website gesendet
                  (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp
                  und -version, verwendetes Betriebssystem, Referrer-URL).
                  Diese Daten werden vorübergehend in einem sogenannten
                  Logfile gespeichert, um die technische Sicherheit und
                  Stabilität des Angebots zu gewährleisten (Art. 6 Abs. 1
                  lit. f DSGVO).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">
                  4. Reservierungsformular
                </h2>
                <p className="mt-3 leading-relaxed">
                  Wenn Sie über unser Online-Formular eine Tischreservierung
                  anfragen, erheben wir die von Ihnen eingegebenen Daten
                  (Name, E-Mail-Adresse, Telefonnummer, gewünschtes Datum,
                  Uhrzeit, Personenanzahl sowie freiwillige Angaben). Diese
                  Daten werden ausschließlich zur Bearbeitung Ihrer
                  Reservierungsanfrage sowie für Rückfragen verwendet
                  (Art. 6 Abs. 1 lit. b DSGVO) und nicht an Dritte
                  weitergegeben, außer dies ist zur Vertragserfüllung
                  erforderlich (z. B. technischer Dienstleister für den
                  Formularversand).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">5. Cookies</h2>
                <p className="mt-3 leading-relaxed">
                  Unsere Website verwendet nach aktuellem Stand keine
                  Tracking- oder Marketing-Cookies. Sollten technisch
                  notwendige Cookies (z. B. zur Speicherung von
                  Anzeigepräferenzen) zum Einsatz kommen, erfolgt dies auf
                  Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">
                  6. Eingebundene Kartendarstellung
                </h2>
                <p className="mt-3 leading-relaxed">
                  Zur Anzeige unseres Standorts binden wir eine
                  Kartendarstellung eines Drittanbieters ein. Beim Aufruf der
                  entsprechenden Seite kann eine Verbindung zu den Servern des
                  Anbieters hergestellt und dabei Ihre IP-Adresse übermittelt
                  werden. Weitere Informationen entnehmen Sie bitte der
                  Datenschutzerklärung des jeweiligen Anbieters.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">
                  7. Ihre Rechte
                </h2>
                <p className="mt-3 leading-relaxed">
                  Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                  Löschung oder Einschränkung der Verarbeitung Ihrer
                  gespeicherten personenbezogenen Daten, ein
                  Widerspruchsrecht gegen die Verarbeitung sowie ein Recht auf
                  Datenübertragbarkeit. Zudem steht Ihnen ein
                  Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
                  Wenden Sie sich hierzu gerne an{' '}
                  <a href={`mailto:${restaurant.email}`} className="text-jade underline underline-offset-2">
                    {restaurant.email}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-charcoal">
                  8. Speicherdauer
                </h2>
                <p className="mt-3 leading-relaxed">
                  Wir speichern personenbezogene Daten nur so lange, wie dies
                  für die Erfüllung der jeweiligen Zwecke erforderlich ist
                  oder gesetzliche Aufbewahrungsfristen dies vorschreiben.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
