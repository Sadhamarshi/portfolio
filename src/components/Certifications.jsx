import { useState } from 'react';
import { certifications, workshops } from '../data/portfolioData';

const CertificateCard = ({ cert }) => {
  const handleViewCertificate = (e) => {
    if (cert.certificatePdf) {
      e.preventDefault();
      window.open(cert.certificatePdf, '_blank');
    }
  };

  return (
    <div 
      className={`card card-hover group ${cert.certificatePdf ? 'cursor-pointer' : ''}`}
      onClick={cert.certificatePdf ? handleViewCertificate : undefined}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-light group-hover:text-accent transition-colors line-clamp-2">
              {cert.title}
            </h3>
          </div>
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/30">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <p className="text-light/70 font-medium text-sm">{cert.issuer}</p>
          <p className="text-light/50 text-xs">{cert.date}</p>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-light/10 space-y-3">
          {cert.certificatePdf && (
            <div className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium group/link">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Certificate</span>
              <svg className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium group/link"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Verify Certificate</span>
              <svg className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [showWorkshops, setShowWorkshops] = useState(false);

  return (
    <section id="certifications" className="section-padding bg-dark-100">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Featured Certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications
              .filter((cert) => cert.featured)
              .map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
              ))}
          </div>

          {/* Workshops Section */}
          <div className="mt-16">
            <button
              onClick={() => setShowWorkshops(!showWorkshops)}
              className="flex items-center justify-center gap-3 mx-auto px-6 py-3 bg-dark-200 border border-light/10 rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F73B0B';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(247, 59, 11, 0.6), 0 0 40px rgba(247, 59, 11, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span className="text-light font-medium">
                {showWorkshops ? 'Hide' : 'View'} Workshop Certificates
              </span>
              <svg
                className={`w-5 h-5 text-accent transition-transform duration-300 ${
                  showWorkshops ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Workshops List */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showWorkshops ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshops.map((workshop, index) => (
                  <div 
                    key={index} 
                    className={`card group ${workshop.certificatePdf ? 'cursor-pointer card-hover' : ''}`}
                    onClick={workshop.certificatePdf ? () => window.open(workshop.certificatePdf, '_blank') : undefined}
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/30">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-light group-hover:text-accent transition-colors">
                        {workshop.title}
                      </h4>
                      <p className="text-light/70 text-sm">{workshop.event}</p>
                      {workshop.certificatePdf && (
                        <div className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium pt-2 border-t border-light/10">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>View Certificate</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
