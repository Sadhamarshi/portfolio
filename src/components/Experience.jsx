import { experience } from '../data/portfolioData';

const Experience = () => {
  const handleViewCertificate = (certificatePdf) => {
    if (certificatePdf) {
      window.open(certificatePdf, '_blank');
    }
  };

  return (
    <section id="experience" className="section-padding bg-dark">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-4 h-4 bg-accent rounded-full border-4 border-dark transform -translate-x-1.5 hidden md:block"></div>

                {/* Content Card */}
                <div className="md:ml-12 card card-hover">
                  <div className="space-y-4">
                    {/* Header with Duration and Certificate Button */}
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </div>

                      {/* Certificate Button */}
                      {exp.certificatePdf && (
                        <button
                          onClick={() => handleViewCertificate(exp.certificatePdf)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent transition-all duration-300 text-accent text-sm font-medium group"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>View Certificate</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-2xl font-bold text-light mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium text-lg">
                        {exp.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-light/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
