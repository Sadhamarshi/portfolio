import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="card card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-light/10">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:animate-pulse"></div>
                    <h3 className="text-lg font-semibold text-light group-hover:text-accent transition-colors">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-dark-200 text-light/80 text-sm rounded-lg border border-light/10 hover:border-accent/50 hover:text-accent transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
