import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <main className='bg-white min-h-screen'>
      <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/90 border-b border-gray-100'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Image
                src='/logo-full1.png'
                alt='NomadGym Logo'
                width={350}
                height={150}
                className='hidden md:block h-14 object-cover'
                priority
              />

              <Image
                src='/logo-small.png'
                alt='NomadGym Logo'
                width={350}
                height={150}
                className='md:hidden h-12 w-12 object-cover'
                priority
              />
            </Link>
            <Link
              href='/'
              className='text-prim hover:text-acc transition-colors font-medium'>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16'>
        <h1 className='text-4xl sm:text-5xl font-bold text-sec mb-4'>
          Privacy Policy
        </h1>
        <p className='text-gray-600 mb-8'>
          Last updated: {new Date().toLocaleDateString('en-GB')}
        </p>

        <div className='prose prose-lg max-w-none'>
          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              1. Introduction
            </h2>
            <p className='text-gray-700 mb-4'>
              Welcome to NomadGym (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;). We are committed to protecting your personal data
              and respecting your privacy rights in accordance with the General
              Data Protection Regulation (GDPR) and other applicable data
              protection laws.
            </p>
            <p className='text-gray-700 mb-4'>
              This Privacy Policy explains how we collect, use, store, and
              protect your personal information when you use our website and
              services.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              2. Data Controller
            </h2>
            <p className='text-gray-700 mb-4'>
              NomadGym is the data controller responsible for your personal
              data.
            </p>
            <p className='text-gray-700 mb-4'>
              <strong>Contact information:</strong>
              <br />
              Email: infonomadgym@gmail.com
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              3. What Personal Data We Collect
            </h2>
            <p className='text-gray-700 mb-4'>
              We may collect and process the following personal data:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                <strong>Waitlist Registration:</strong> Email address, timestamp
                of registration
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information, cookies and similar technologies
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website and services
              </li>
              <li>
                <strong>Communication Data:</strong> Any correspondence you send
                to us via email or contact forms
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              4. Legal Basis for Processing
            </h2>
            <p className='text-gray-700 mb-4'>
              Under GDPR, we process your personal data based on the following
              legal grounds:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                <strong>Consent:</strong> When you sign up for our waitlist or
                subscribe to our communications, you provide explicit consent
                for us to process your data
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To improve our services,
                analyze website usage, and communicate about our business
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with applicable
                laws and regulations
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              5. How We Use Your Personal Data
            </h2>
            <p className='text-gray-700 mb-4'>
              We use your personal data for the following purposes:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                To notify you about the launch of NomadGym services in Spain
              </li>
              <li>
                To send you updates, newsletters, and marketing communications
                (only with your consent)
              </li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website, services, and user experience</li>
              <li>To analyze usage patterns and website performance</li>
              <li>To comply with legal obligations and prevent fraud</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              6. Data Storage and Security
            </h2>
            <p className='text-gray-700 mb-4'>
              <strong>Storage Location:</strong> Your waitlist data is stored
              securely in our Appwrite database on secure servers within the
              European Economic Area (EEA) or with service providers that comply
              with GDPR requirements.
            </p>
            <p className='text-gray-700 mb-4'>
              <strong>Security Measures:</strong> We implement appropriate
              technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or
              destruction. These include:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Staff training on data protection principles</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              7. Data Retention
            </h2>
            <p className='text-gray-700 mb-4'>
              We will retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law.
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                <strong>Waitlist Data:</strong> Retained until service launch
                and for up to 12 months after, or until you withdraw consent
              </li>
              <li>
                <strong>Marketing Communications:</strong> Retained until you
                unsubscribe or withdraw consent
              </li>
              <li>
                <strong>Legal Compliance:</strong> Some data may be retained
                longer if required by law
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              8. Sharing Your Personal Data
            </h2>
            <p className='text-gray-700 mb-4'>
              We do not sell your personal data. We may share your information
              with:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                <strong>Service Providers:</strong> Third-party companies that
                help us operate our website and services (e.g., email service
                providers, hosting providers) under strict data processing
                agreements
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, or governmental authority
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any
                merger, sale, or acquisition of all or part of our business
              </li>
            </ul>
            <p className='text-gray-700 mb-4'>
              All third parties we work with are GDPR-compliant and committed to
              protecting your data.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              9. International Data Transfers
            </h2>
            <p className='text-gray-700 mb-4'>
              Your personal data will primarily be stored and processed within
              the European Economic Area (EEA). If we transfer data outside the
              EEA, we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                Standard Contractual Clauses approved by the European Commission
              </li>
              <li>
                Transfer to countries with an adequacy decision from the EU
              </li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              10. Your Rights Under GDPR
            </h2>
            <p className='text-gray-700 mb-4'>
              As a data subject under GDPR, you have the following rights:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                <strong>Right to Access:</strong> Request a copy of the personal
                data we hold about you
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of
                inaccurate or incomplete data
              </li>
              <li>
                <strong>
                  Right to Erasure (&quot;Right to be Forgotten&quot;):
                </strong>{' '}
                Request deletion of your personal data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Request that we
                limit how we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Request a copy of
                your data in a machine-readable format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing based on
                legitimate interests or for direct marketing
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent at
                any time (where processing is based on consent)
              </li>
              <li>
                <strong>Right to Lodge a Complaint:</strong> File a complaint
                with your local data protection authority
              </li>
            </ul>
            <p className='text-gray-700 mb-4'>
              To exercise any of these rights, please contact us at{' '}
              <a
                href='mailto:infonomadgym@gmail.com'
                className='text-prim hover:underline'>
                infonomadgym@gmail.com
              </a>
              . We will respond to your request within one month.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              11. Cookies and Tracking Technologies
            </h2>
            <p className='text-gray-700 mb-4'>
              Our website uses cookies and similar tracking technologies to
              enhance your experience. Cookies are small text files stored on
              your device.
            </p>
            <p className='text-gray-700 mb-4'>
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors use our website
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences
              </li>
            </ul>
            <p className='text-gray-700 mb-4'>
              You can control and delete cookies through your browser settings.
              However, disabling cookies may affect website functionality.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              12. Children&apos;s Privacy
            </h2>
            <p className='text-gray-700 mb-4'>
              Our services are not directed to individuals under the age of 16.
              We do not knowingly collect personal data from children. If you
              believe we have collected data from a child, please contact us
              immediately so we can delete it.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              13. Third-Party Links
            </h2>
            <p className='text-gray-700 mb-4'>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              14. Changes to This Privacy Policy
            </h2>
            <p className='text-gray-700 mb-4'>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. We will notify you of any significant changes by:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-4'>
              <li>Posting the updated policy on our website</li>
              <li>
                Updating the &quot;Last updated&quot; date at the top of this
                page
              </li>
              <li>
                Sending an email notification (if you are on our waitlist)
              </li>
            </ul>
            <p className='text-gray-700 mb-4'>
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>
              15. Data Protection Authority
            </h2>
            <p className='text-gray-700 mb-4'>
              If you have concerns about how we handle your personal data, you
              have the right to lodge a complaint with your local data
              protection authority.
            </p>
            <p className='text-gray-700 mb-4'>
              <strong>
                Spain - Agencia Española de Protección de Datos (AEPD):
              </strong>
              <br />
              Website:{' '}
              <a
                href='https://www.aepd.es'
                target='_blank'
                rel='noopener noreferrer'
                className='text-prim hover:underline'>
                www.aepd.es
              </a>
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>16. Contact Us</h2>
            <p className='text-gray-700 mb-4'>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <p className='text-gray-700 mb-4'>
              <strong>Email:</strong>{' '}
              <a
                href='mailto:infonomadgym@gmail.com'
                className='text-prim hover:underline'>
                infonomadgym@gmail.com
              </a>
            </p>
            <p className='text-gray-700 mb-4'>
              We will respond to your inquiry as soon as possible, and in any
              case within one month of receiving your request.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-sec mb-4'>17. Consent</h2>
            <p className='text-gray-700 mb-4'>
              By using our website and submitting your email address to join our
              waitlist, you acknowledge that you have read and understood this
              Privacy Policy and consent to the collection, use, and processing
              of your personal data as described herein.
            </p>
            <p className='text-gray-700 mb-4'>
              You can withdraw your consent at any time by contacting us or
              clicking the unsubscribe link in our emails.
            </p>
          </section>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-200'>
          <Link
            href='/'
            className='inline-flex items-center text-prim hover:text-acc transition-colors font-medium'>
            ← Back to Home
          </Link>
        </div>
      </div>

      <footer className='bg-sec text-white py-12 mt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} NomadGym. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
