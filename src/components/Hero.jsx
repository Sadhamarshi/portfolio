import { personalInfo } from '../data/portfolioData';
import { useState, useEffect } from 'react';

const TypewriterSequence = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState('typing'); // 'typing', 'fadeOut', 'static'
  const fullText = 'Machine Learning • Data Analytics • Artificial Intelligence';

  useEffect(() => {
    if (currentPhase === 'typing') {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Wait a bit, then fade out
          setTimeout(() => {
            setCurrentPhase('fadeOut');
          }, 500);
        }
      }, 60); // Faster typing speed
      return () => clearInterval(interval);
    } else if (currentPhase === 'fadeOut') {
      // Trigger fade out and then show static
      setTimeout(() => {
        setCurrentPhase('static');
      }, 500);
    }
  }, [currentPhase, fullText]);

  if (currentPhase === 'typing' || currentPhase === 'fadeOut') {
    return (
      <div className={`text-lg md:text-xl text-gray-muted font-medium transition-opacity duration-500 ${
        currentPhase === 'fadeOut' ? 'opacity-0' : 'opacity-100'
      }`}>
        {displayedText}
        <span className="animate-pulse text-accent">|</span>
      </div>
    );
  }

  // Static display with glow effect
  return (
    <div className="text-lg md:text-xl text-gray-muted font-medium animate-glow-pop">
      <div className="flex items-center justify-center flex-wrap gap-3">
        <span className="inline-block hover:text-accent transition-all duration-300 cursor-default hover:scale-110" 
              style={{ transition: 'all 0.3s ease', textShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 20px rgba(247, 59, 11, 0.8), 0 0 40px rgba(247, 59, 11, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}>
          Machine Learning
        </span>
        <span className="inline-block text-accent">•</span>
        <span className="inline-block hover:text-accent transition-all duration-300 cursor-default hover:scale-110"
              style={{ transition: 'all 0.3s ease', textShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 20px rgba(247, 59, 11, 0.8), 0 0 40px rgba(247, 59, 11, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}>
          Data Analytics
        </span>
        <span className="inline-block text-accent">•</span>
        <span className="inline-block hover:text-accent transition-all duration-300 cursor-default hover:scale-110"
              style={{ transition: 'all 0.3s ease', textShadow: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 20px rgba(247, 59, 11, 0.8), 0 0 40px rgba(247, 59, 11, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}>
          Artificial Intelligence
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in-up">

          {/* Name - Large, Bold, Centered, Single Line */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none text-light">
              {personalInfo.name.toUpperCase()}
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-accent">
            {personalInfo.title}
          </h2>

          {/* Subtitle with continuous typewriter then glow effect */}
          <div className="min-h-[2rem] flex items-center justify-center">
            <TypewriterSequence />
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-light/70 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => scrollToSection('#projects')}
              className="hero-cta-btn px-8 py-3 bg-accent text-white font-semibold rounded-lg transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="hero-cta-btn-secondary px-8 py-3 border-2 border-accent text-light font-semibold rounded-lg transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>

          {/* GitHub Icon Only */}
          <div className="pt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-github-icon inline-flex items-center justify-center w-12 h-12 bg-dark-200/50 border border-light/10 rounded-full text-light/70 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
