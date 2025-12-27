import Header from "@/components/header";

export default function TermsOfService() {
  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-2xl w-full">
        <Header />

        <h1 className="text-2xl font-semibold mt-4 mb-2">Terms of Service</h1>
        <p className="text-sm text-neutral-400 mb-6">
          Last Updated: December 27, 2024
        </p>

        <div className="space-y-6 text-sm text-neutral-300">
          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">1. Acceptance of Terms</h2>
            <p className="mb-3">
              By accessing and using any services provided by Linus Kang, including but not limited to websites and applications at bubblymaps.org, linuskang.au, linus.id.au, lkang.au, and any other related domains or services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">2. Services Provided &quot;As Is&quot;</h2>
            <p className="mb-3">
              All Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. I make no warranty that the Services will be uninterrupted, timely, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">3. Limitation of Liability</h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Your use or inability to use the Services</li>
              <li>Any unauthorized access to or use of the Services</li>
              <li>Any interruption or cessation of the Services</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted through the Services</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content made available via the Services</li>
            </ul>
            <p className="mb-3">
              You agree not to sue, claim against, or seek any legal remedy from Linus Kang or any associated parties for any issues arising from your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">4. Right to Restrict Access</h2>
            <p className="mb-3">
              I reserve the right, at my sole discretion, to ban, suspend, or terminate your access to any or all Services at any time, for any reason or no reason, without prior notice. This includes, but is not limited to, violations of these Terms of Service, abusive behavior, or any conduct I deem inappropriate or harmful to the Services or other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">5. Acceptable Use</h2>
            <p className="mb-3">
              You agree not to use the Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Services. You agree not to attempt to gain unauthorized access to any part of the Services, other accounts, computer systems, or networks connected to the Services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">6. Intellectual Property</h2>
            <p className="mb-3">
              All content and materials available through the Services, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of Linus Kang and are protected by applicable copyright and trademark law. You may not reproduce, distribute, or create derivative works from any content without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">7. Changes to Terms</h2>
            <p className="mb-3">
              I reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Services following the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">8. Governing Law</h2>
            <p className="mb-3">
              These Terms of Service shall be governed by and construed in accordance with the laws applicable to the jurisdiction where the service provider is located, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">9. Contact Information</h2>
            <p className="mb-3">
              If you have any questions, complaints, or concerns regarding these Terms of Service, please contact me at:
            </p>
            <p className="mb-3">
              <a href="mailto:site.terms@lkang.au" className="text-neutral-100 hover:text-neutral-300 transition-colors underline">
                site.terms@lkang.au
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">10. Severability</h2>
            <p className="mb-3">
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms of Service shall otherwise remain in full force and effect.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
