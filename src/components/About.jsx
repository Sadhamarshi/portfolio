import { about } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Description */}
            <p className="text-lg md:text-xl text-light/80 leading-relaxed">
              {about.description}
            </p>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="card space-y-3">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Degree</h3>
                <p className="text-light font-medium">{about.degree}</p>
              </div>

              <div className="card space-y-3">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">University</h3>
                <p className="text-light font-medium">{about.university}</p>
              </div>

              <div className="card space-y-3">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">CGPA</h3>
                <p className="text-light font-medium text-2xl">{about.cgpa}</p>
              </div>

              <div className="card space-y-3">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">Graduation</h3>
                <p className="text-light font-medium text-2xl">{about.graduation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
