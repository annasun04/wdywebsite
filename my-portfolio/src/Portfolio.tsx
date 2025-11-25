import React, { useState, useEffect, useRef } from 'react'; 
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Palette, Layers, ChevronDown, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Global mouse tracker for spotlight and parallax
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Solid base background */}
      <div className="absolute inset-0 bg-[#0a0a0a] z-0"></div>

      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
        {/* Blobs */}
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[55vw] h-[55vw] bg-indigo-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute bottom-[-30%] left-[15%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

        {/* Mouse spotlight */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(129, 140, 248, 0.05), transparent 80%)`
          }}
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Glass Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:to-purple-400 transition-all duration-300">
              Anna Sun
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            {['About', 'Work', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="relative text-slate-400 hover:text-white transition-colors py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center px-6 relative max-w-7xl mx-auto pt-20 z-10">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Computer Science Student
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-none">
              <span className="block mb-2">Software</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">
                Engineer.
              </span>
            </h1>
          </div>
          
          <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed">
            I craft digital experiences where <span className="text-indigo-300">design meets engineering</span>. 
            Specializing in performant, accessible, and visually stunning interfaces using modern React & WebGL.
          </p>
          
          <div className="pt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('work')} className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              View Projects
              <ArrowUpRight size={20} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown size={24} />
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        {/* Tech Stack / Stats */}
        <ScrollReveal>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
    {[
      {
        label: 'Languages',
        items: 'Python (Pandas, NumPy, PyTorch), Java, C++, SQL, C, JavaScript, R',
        icon: <Code2 className="text-indigo-400" />,
      },
      {
        label: 'Tools & Frameworks',
        items: 'React, Docker, Kubernetes, Node.js, GitHub, Bash, React Native, REST APIs',
        icon: <Layers className="text-cyan-400" />,
      },
      {
        label: 'Systems',
        items: 'Spark, Kafka, Hadoop, Cassandra',
        icon: <Palette className="text-pink-400" />,
      },
      {
        label: 'Other Skills',
        items: 'Team Collaboration, Public Speaking, Project Management, Leadership',
        icon: <Sparkles className="text-yellow-400" />,
      },
    ].map((skill, i) => (
      <div key={i} className="space-y-2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          {skill.icon}
          <span className="font-bold text-white">{skill.label}</span>
        </div>
        <p className="text-sm text-slate-400 font-mono">{skill.items}</p>
      </div>
    ))}
  </div>
</ScrollReveal>

        {/* Work Section */}
        <section id="work">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Work</h2>
              
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TiltCard 
              title="IPO Momentum Trading System"
              category="Design System"
              description="A comprehensive React component library focusing on accessibility and glassmorphism design trends."
              color="from-pink-500/20 to-rose-500/20"
              tags={['React', 'Storybook', 'A11y']}
            />
             <TiltCard 
              title="Chatbot"
              category="SaaS Platform"
              description="Real-time analytics dashboard with WebGL data visualization and customizable widget layouts."
              color="from-indigo-500/20 to-blue-500/20"
              tags={['Next.js', 'WebGL', 'Socket.io']}
            />
            <TiltCard 
              title="Cloud Data Pipeline"
              category="SaaS Platform"
              description="Real-time analytics dashboard with WebGL data visualization and customizable widget layouts."
              color="from-indigo-500/20 to-blue-500/20"
              tags={['Next.js', 'WebGL', 'Socket.io']}
            />
            <TiltCard 
              title="Bit by Bit"
              category="E-Commerce"
              description="High-performance e-commerce frontend with fluid page transitions and optimistic UI updates."
              color="from-cyan-500/20 to-teal-500/20"
              tags={['Vue 3', 'Tailwind', 'Stripe']}
            />
            
             <TiltCard 
              title="Flappy Bird"
              category="SaaS Platform"
              description="Real-time analytics dashboard with WebGL data visualization and customizable widget layouts."
              color="from-indigo-500/20 to-blue-500/20"
              tags={['Next.js', 'WebGL', 'Socket.io']}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Code2 size={120} />
                </div>
                <p className="text-indigo-400 font-mono mb-6">02. Who am I?</p>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Design-driven Engineer based in San Francisco.
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  I bridge the gap between design and engineering. My journey started in graphic design, which naturally evolved into web development. I believe the best digital products are built at the intersection of aesthetic beauty and robust engineering.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  When I'm not coding, you can find me experimenting with generative art, exploring 35mm photography, or brewing the perfect cup of coffee.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Experience
                </h4>
                <ul className="space-y-8 border-l border-white/10 ml-1 pl-8">
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-indigo-500"></span>
                    <p className="text-white font-bold">Software Engineer Intern</p>
                    <p className="text-sm text-slate-500 mb-2">IBM • May 2025 - Aug 2025</p>
                    <p className="text-slate-400 text-sm">chatbot</p>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Undergraduate Teaching Assistant</p>
                    <p className="text-sm text-slate-500 mb-2">CS • Sep 2024 - Present</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Undergraduate Researcher</p>
                    <p className="text-sm text-slate-500 mb-2">Theory • Jan 2025 - May 2025</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>

                   <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Lab Coordinator</p>
                    <p className="text-sm text-slate-500 mb-2">Undergraduate Projects Lab • Jan 2024 - Present</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Academy of Math and Programming Fellow</p>
                    <p className="text-sm text-slate-500 mb-2">Jane Street • Jun 2023 - Aug 2023</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Barista</p>
                    <p className="text-sm text-slate-500 mb-2">Starbucks • Jun 2023 - Aug 2023</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Tennis Attendant</p>
                    <p className="text-sm text-slate-500 mb-2">RTC • Jun 2023 - Aug 2023</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                    <p className="text-white font-bold">Petsitter</p>
                    <p className="text-sm text-slate-500 mb-2">Rover • Jun 2023 - Aug 2023</p>
                    <p className="text-slate-400 text-sm">Developed award-winning marketing sites with heavy animation and WebGL features.</p>
                  </li>

                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>
        

      <section id="events" className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Events
              </h4>
              <ul className="space-y-8 border-l border-white/10 ml-1 pl-8">
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-indigo-500"></span>
                  <p className="text-white font-bold">Madhacks</p>
                  <p className="text-sm text-slate-500 mb-2">2025</p>
                  <p className="text-slate-400 text-sm">Won 1st place for innovative Web3 UI.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">ICPC North Central Regionals</p>
                  <p className="text-sm text-slate-500 mb-2">International Collegiate Programming Contest • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Grace Hopper</p>
                  <p className="text-sm text-slate-500 mb-2">2022</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Prosperity</p>
                  <p className="text-sm text-slate-500 mb-2">2022</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">UChicago Trading Competition</p>
                  <p className="text-sm text-slate-500 mb-2">University of Chicago • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Georgia Tech Trading Competition</p>
                  <p className="text-sm text-slate-500 mb-2">Georgia Institute of Technology • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">ICPC North Central Regionals</p>
                  <p className="text-sm text-slate-500 mb-2">International Collegiate Programming Contest • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Madhacks</p>
                  <p className="text-sm text-slate-500 mb-2">Forte Foundatation • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>

                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Northwestern Trading Competition</p>
                  <p className="text-sm text-slate-500 mb-2">Northwestern University• Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Wall Street Bound</p>
                  <p className="text-sm text-slate-500 mb-2">Wall Street Bound • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Madhacks</p>
                  <p className="text-sm text-slate-500 mb-2">Forte Foundatation • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-slate-800 bg-slate-600"></span>
                  <p className="text-white font-bold">Fast Track To Finance</p>
                  <p className="text-sm text-slate-500 mb-2">Forte Foundatation • Feb 2024</p>
                  <p className="text-slate-400 text-sm">Led a hands-on workshop on React 18 features and Suspense.</p>
                </li>



              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>



        

        {/* Contact CTA */}
        <section id="contact" className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">extraordinary.</span>
            </h2>
            {/*<p className="text-slate-400 text-xl mb-12">
              Currently available for freelance projects and open to full-time opportunities.
            </p>*/}
            <div className="flex justify-center gap-6">
              <SocialButton icon={<Mail />} href="mailto:asun.wisc@gmail.com" label="Email" />
              <SocialButton icon={<Github />} href="https://github.com/annasun04" label="GitHub" />
              <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/annasun04/" label="LinkedIn" />
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm">
        <p>© 2024 Jordan Smith. Crafted with React & Tailwind.</p>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
};

// --- Components ---
interface ScrollRevealProps { children: React.ReactNode; delay?: number; }
const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface TiltCardProps { title: string; category: string; description: string; color: string; tags: string[]; }
const TiltCard: React.FC<TiltCardProps> = ({ title, category, description, color, tags }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: -yPct * 20, y: xPct * 20 });
  };

  const handleMouseLeave = () => { setRotation({ x: 0, y: 0 }); setIsHovered(false); };

  return (
    <div className="perspective-1000">
      <div 
        ref={ref}
        onMouseMove={(e) => { handleMouseMove(e); setIsHovered(true); }}
        onMouseLeave={handleMouseLeave}
        className="relative h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-200 ease-out group overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-white/20"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
            <Layers className="text-indigo-400" size={24} />
          </div>
          <span className="text-slate-400 font-mono text-sm">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-indigo-400 font-mono">
          {tags.map((tag, i) => <span key={i} className="px-2 py-1 bg-white/5 rounded">{tag}</span>)}
        </div>
      </div>
    </div>
  );
};

interface SocialButtonProps { icon: React.ReactNode; href: string; label: string; }
const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, label }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300">
    {icon} <span>{label}</span>
  </a>
);

export default Portfolio;
