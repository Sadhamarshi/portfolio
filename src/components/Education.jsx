import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark-100">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Education
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Line (except for last item) */}
                {index !== education.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-accent/20 hidden md:block"></div>
                )}
                
                {/* Content */}
                <div className="card card-hover">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-grow space-y-2">
                      <h3 className="text-xl font-bold text-light">
                        {edu.degree}
                      </h3>
                      <p className="text-light/70 font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="text-accent font-medium">{edu.duration}</span>
                        <span className="text-light/50">•</span>
                        <span className="text-light/80 font-semibold">{edu.grade}</span>
                      </div>
                    </div>
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

export default Education;
