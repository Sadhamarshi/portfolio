import { useEffect } from 'react';

const CertificateViewer = ({ certificate, onClose }) => {
  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative max-w-5xl w-full max-h-[95vh] bg-dark-100 rounded-2xl border border-light/20 overflow-hidden flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light/10">
          <div>
            <h3 className="text-2xl font-bold text-light">{certificate.title}</h3>
            <p className="text-light/70 mt-1">{certificate.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-dark-200 transition-colors group"
            aria-label="Close certificate viewer"
          >
            <svg className="w-6 h-6 text-light/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Certificate Image */}
        <div className="p-6 bg-dark flex-1 overflow-auto">
          <div className="relative bg-dark-200 rounded-lg border border-light/10 flex items-center justify-center p-4">
            <img
              src={certificate.certificateImage}
              alt={`${certificate.title} Certificate`}
              className="w-full h-auto object-contain rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if image doesn't load */}
            <div className="hidden flex-col items-center justify-center min-h-[400px] p-12 text-center">
              <svg className="w-20 h-20 text-accent/50 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-light/70 text-lg mb-2">Certificate image not available</p>
              <p className="text-light/50 text-sm">Please add the certificate image to the public/certificates folder</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-light/10 bg-dark-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-light/70">
              <p><strong className="text-light">Award:</strong> {certificate.award}</p>
              <p><strong className="text-light">Date:</strong> {certificate.date}</p>
            </div>
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
