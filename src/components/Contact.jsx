import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display heading-gradient mb-6">
              Let's Build Something Meaningful.
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-light/70 max-w-2xl mx-auto">
              Interested in AI, data, and practical problem solving? Let's connect.
            </p>
          </div>

          {/* Primary CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-bold text-lg rounded-xl hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 mb-16 group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get In Touch</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Contact Links */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="card card-hover group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30 group-hover:border-accent transition-all">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-light group-hover:text-accent transition-colors mb-1">
                    Email
                  </h3>
                  <p className="text-light/70 text-sm break-all">{personalInfo.email}</p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30 group-hover:border-accent transition-all">
                  <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-light group-hover:text-accent transition-colors mb-1">
                    GitHub
                  </h3>
                  <p className="text-light/70 text-sm">@Sadhamarshi</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30 group-hover:border-accent transition-all">
                  <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-light group-hover:text-accent transition-colors mb-1">
                    LinkedIn
                  </h3>
                  <p className="text-light/70 text-sm">Connect with me</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
