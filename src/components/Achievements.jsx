import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const handleViewCertificate = (certificateImage) => {
    window.open(certificateImage, '_blank');
  };

  return (
    <section id="achievements" className="section-padding bg-dark">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card card-hover group cursor-pointer relative overflow-hidden"
                onClick={() => handleViewCertificate(achievement.certificateImage)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 space-y-6">
                  {/* Award Badge */}
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      <span className="text-accent font-bold text-lg">{achievement.award}</span>
                    </div>
                    <button
                      className="p-3 bg-dark-200 rounded-lg border border-light/10 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      aria-label="View Certificate"
                    >
                      <svg className="w-5 h-5 text-light group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-light group-hover:text-accent transition-colors mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-accent/80 font-medium text-lg">{achievement.subtitle}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-light/90 font-medium text-lg">
                        "{achievement.paper}"
                      </p>
                      <p className="text-light/70">
                        {achievement.conference}
                      </p>
                      <p className="text-light/60 text-sm">
                        {achievement.date}
                      </p>
                    </div>
                  </div>

                  {/* View Certificate CTA */}
                  <div className="flex items-center gap-2 text-accent font-medium pt-4 border-t border-light/10">
                    <span>Click to view certificate</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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

export default Achievements;
