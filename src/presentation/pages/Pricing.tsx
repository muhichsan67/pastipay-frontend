import { Layout } from '../components/Layout';
import { useFaqs } from '../hooks/useFaqs';

export function Pricing() {
  const { faqs, loading } = useFaqs();

  return (
    <Layout>
      <section className="container py-5 text-center">
        <h1 className="fw-bold text-primary-custom display-5">Biaya Transparan Tanpa Kejutan</h1>
        <p className="text-muted">Bayar hanya untuk transaksi yang sukses digunakan.</p>
      </section>

      {/* FAQ Accordion Section */}
      <section className="container max-w-md py-5">
        <h2 className="text-center fw-bold text-primary-custom mb-4">Pertanyaan Umum</h2>
        {loading ? (
          <div className="text-center"><div className="spinner-border text-success"></div></div>
        ) : (
          <div className="accordion rounded-3xl overflow-hidden" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item bg-light" key={faq.id}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                    {faq.question}
                  </button>
                </h2>
                <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-variant-custom">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}