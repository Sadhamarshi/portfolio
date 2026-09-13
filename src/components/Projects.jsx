import { projects } from '../data/portfolioData';

const ProjectCard = ({ project }) => {
  return (
    <div className="card card-hover group h-full flex flex-col">
      <div className="space-y-6 flex-grow flex flex-col">
        {/* Project Number */}
        <div className="flex items-center justify-between">
          <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
            {project.id}
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-200 rounded-lg border border-light/10 hover:border-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="View on GitHub"
          >
            <svg className="w-6 h-6 text-light group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Project Info */}
        <div className="space-y-4 flex-grow">
          <h3 className="text-2xl md:text-3xl font-bold text-light group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-light/70 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-light/10">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-200 text-accent/90 text-sm font-medium rounded-lg border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-light hover:text-accent transition-colors group/link font-medium"
          >
            <span>View Project</span>
            <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark-100">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
            <p className="text-light/70 text-lg mt-6 max-w-2xl">
              Practical applications showcasing my work in AI, machine learning, and data science
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* GitHub Link */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/Sadhamarshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-light/70 hover:text-accent transition-colors group"
            >
              <span className="text-lg">View all projects on GitHub</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
