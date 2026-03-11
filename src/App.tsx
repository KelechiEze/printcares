/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Search,
  ChevronDown,
  Play,
  Check
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/03/jdhsgh-removebg-preview.png" 
              alt="PrintCare Academy CIC Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-white">
            <span className="font-medium cursor-pointer hover:text-lime-500 transition-colors">Home</span>
            <span className="font-medium cursor-pointer hover:text-lime-500 transition-colors">About us</span>
            <span className="font-medium cursor-pointer hover:text-lime-500 transition-colors">services</span>
            <span className="font-medium cursor-pointer hover:text-lime-500 transition-colors">contact us</span>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-white">
            <Search size={20} className="cursor-pointer hover:text-lime-500 transition-colors" />
            <button className="bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-700 transition-colors">
              Get In Touch
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden text-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="font-medium py-2 border-b border-gray-800 cursor-pointer hover:text-lime-500">Home</div>
              <div className="font-medium py-2 border-b border-gray-800 cursor-pointer hover:text-lime-500">About us</div>
              <div className="font-medium py-2 border-b border-gray-800 cursor-pointer hover:text-lime-500">services</div>
              <div className="font-medium py-2 cursor-pointer hover:text-lime-500">contact us</div>
              <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/gru1.avif",
      title: "TRAINING",
      subtitle: "PRINTING DESIGNING",
      suffix: "COMMUNITY SUPPORT",
      tag: {
        white1: "Empowering communities",
        lime1: "through creative",
        lime2: "skills and",
        white2: "wellbeing"
      }
    },
    {
      image: "/gru2.avif",
      title: "EMPOWERING",
      subtitle: "CREATIVE SKILLS",
      suffix: "WELLBEING",
      tag: {
        white1: "Training Printing",
        lime1: "Designing",
        lime2: "Community",
        white2: "Support"
      }
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="relative min-h-screen flex items-center pt-12 pb-48">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide].image} 
                alt="Hero Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-6">
                  <p className="text-lg md:text-xl font-semibold leading-tight">
                    <span className="text-white">{slides[currentSlide].tag.white1} </span>
                    <span className="text-lime-400">{slides[currentSlide].tag.lime1}</span>
                    <br />
                    <span className="text-lime-400">{slides[currentSlide].tag.lime2} </span>
                    <span className="text-white">{slides[currentSlide].tag.white2}</span>
                  </p>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-[80px] lg:text-[100px] font-light leading-[0.9] tracking-tighter mb-10">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white block"
                  >
                    {slides[currentSlide].title}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white block ml-6 sm:ml-12 md:ml-24"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lime-400 block ml-3 sm:ml-6 md:ml-12"
                  >
                    {slides[currentSlide].suffix}
                  </motion.span>
                </h1>

                <p className="text-white/90 text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
                  Discover proven strategies designed to accelerate performance and guide your business toward sustainable success
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <button className="bg-orange-600 text-white px-12 py-5 rounded-md font-extrabold text-xl hover:bg-orange-700 transition-all transform hover:scale-105 shadow-2xl relative z-30">
                    Get Started
                  </button>
                  
                  <div className="flex space-x-3">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          currentSlide === idx ? 'bg-lime-400 w-12' : 'bg-white/20 w-6 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Social Links Sidebar */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 text-white/50 font-light tracking-[0.1em] text-[10px] uppercase z-20">
          <span className="cursor-pointer hover:text-lime-400 transition-colors">TikTok</span>
          <span className="cursor-pointer hover:text-lime-400 transition-colors">RB BORDERS TV</span>
          <span className="cursor-pointer hover:text-lime-400 transition-colors">Twitter</span>
          <span className="cursor-pointer hover:text-lime-400 transition-colors">Facebook</span>
        </div>
      </div>

      {/* Wavy Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-32 text-white fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V120H0Z"></path>
        </svg>
      </div>
    </section>
  );
};


const FeaturesGrid = () => {
  const features = [
    { id: '01', title: 'Cricut and vinyl skills', desc: 'Master the art of precision cutting and vinyl application for various creative projects.', dark: true },
    { id: '02', title: 'Sublimation and heat press', desc: 'Learn professional heat transfer techniques for high-quality custom merchandise.' },
    { id: '03', title: 'T shirt and gift customisation', desc: 'Personalise apparel and unique gifts with creative designs and professional finishes.' },
    { id: '04', title: 'Digital design basics', desc: 'Build a strong foundation in digital tools and graphic design principles.' },
    { id: '05', title: 'Small business start up guidance', desc: 'Get expert advice on launching and managing your own creative enterprise.' },
    { id: '06', title: 'Administrative skills training', desc: 'Develop essential office and management skills for professional growth.' },
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <p className="text-gray-900 font-light tracking-widest text-sm uppercase">TRAINING PROGRAMMES</p>
          <h2 className="text-4xl md:text-6xl font-light max-w-2xl leading-tight">
            Empowering communities through creative skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Large Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#110F0E] text-white p-12 h-full rounded-sm flex flex-col justify-between group cursor-pointer hover:bg-black transition-colors">
              <div>
                <span className="text-lime-500 text-2xl font-light mb-8 block">01</span>
                <h3 className="text-4xl font-light mb-6">Cricut and vinyl skills</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Master the art of precision cutting and vinyl application for various creative projects.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(1).map((feature) => (
              <div key={feature.id} className="bg-white p-12 rounded-sm hover:shadow-xl transition-all group cursor-pointer border border-gray-100">
                <span className="text-gray-300 text-2xl font-light mb-8 block group-hover:text-lime-500 transition-colors">{feature.id}</span>
                <h3 className="text-3xl font-light mb-6">{feature.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ITPartner = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto">
            PRINTING AND <span className="text-lime-500">DESIGN</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: The "P" Masked Image */}
          <div className="flex-1 relative w-full aspect-square max-w-[600px]">
            <div className="absolute inset-0 z-10" style={{
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10,5 L10,95 L45,95 L45,60 L80,60 C95,60 95,20 80,20 L45,20 L45,5 Z' fill='black' /%3E%3C/svg%3E")`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10,5 L10,95 L45,95 L45,60 L80,60 C95,60 95,20 80,20 L45,20 L45,5 Z' fill='black' /%3E%3C/svg%3E")`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}>
              <img 
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/03/jiro.png" 
                alt="Printing and Design" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 relative w-full">
            <p className="text-gray-900 text-2xl md:text-3xl font-light mb-8 md:mb-16">Professional creative solutions</p>
            
            <div className="mb-12 md:mb-20">
              <h3 className="text-4xl md:text-5xl font-light mb-6 md:mb-10">Our Services</h3>
              <ul className="space-y-4 md:space-y-8">
                {[
                  'Custom apparel printing',
                  'Promotional merchandise',
                  'Corporate branding',
                  'Event printing',
                  'Graphic design service'
                ].map((item) => (
                  <li key={item} className="text-2xl md:text-4xl font-light text-gray-300 hover:text-gray-900 transition-all cursor-pointer">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative pr-0 md:pr-12">
              <div className="mb-8">
                <p className="text-xl md:text-2xl font-light mb-4">Mission</p>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md">
                  To empower individuals through creative education and supportive programmes that build confidence, independence and sustainable opportunities.
                </p>
              </div>

              {/* Yellow Pixelated Graphic */}
              <div className="absolute -right-4 bottom-0 w-12 md:w-16 h-32 md:h-48 grid grid-cols-2 gap-1 opacity-100 hidden sm:grid">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`w-full h-full ${[1, 3, 5, 7, 8, 9, 11].includes(i) ? 'bg-yellow-400' : 'transparent'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5F5] text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-[12vw] md:text-[15vw] font-light leading-none tracking-tighter mb-8 md:mb-12 bg-cover bg-center bg-clip-text text-transparent" style={{
          backgroundImage: 'url("https://picsum.photos/seed/printcare-gradient/1200/400")',
          WebkitBackgroundClip: 'text',
        }}>
          WELLBEING AND SUPPORT
        </h2>
        <div className="max-w-3xl mx-auto relative z-10">
          <ul className="text-gray-600 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed space-y-2">
            <li>• Creative therapy workshops</li>
            <li>• Confidence in building sessions</li>
            <li>• Support for vulnerable adults</li>
            <li>• Mentoring and peer support</li>
            <li>• Community engagement projects</li>
          </ul>
          <button className="bg-[#E84A1A] text-white px-10 md:px-12 py-3 md:py-4 rounded-full font-light text-lg hover:bg-orange-700 transition-all shadow-lg">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Bottom Left Pixel Graphic */}
      <div className="absolute bottom-12 left-12 w-32 h-24 grid grid-cols-4 gap-1 opacity-100">
        {[...Array(16)].map((_, i) => (
          <div key={i} className={`w-full h-full ${[12, 13, 14, 15, 11, 7].includes(i) ? 'bg-yellow-400' : 'transparent'}`}></div>
        ))}
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-light text-[10px]">V</span>
              </div>
              <span className="text-xl font-light">Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
              To become a recognised community hub where creativity, enterprise and wellbeing transform lives.
            </h2>
            <div>
              <p className="text-xl font-light mb-1">PrintCare Academy CIC</p>
              <p className="text-gray-400 text-sm">Empowering Communities</p>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square max-w-[600px]">
            <div className="absolute inset-0 z-10" style={{
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M85,20 C85,20 70,5 50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C70,95 85,80 85,80 L85,60 C85,60 70,75 50,75 C35,75 25,65 25,50 C25,35 35,25 50,25 C70,25 85,40 85,40 Z' fill='black' /%3E%3C/svg%3E")`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M85,20 C85,20 70,5 50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C70,95 85,80 85,80 L85,60 C85,60 70,75 50,75 C35,75 25,65 25,50 C25,35 35,25 50,25 C70,25 85,40 85,40 Z' fill='black' /%3E%3C/svg%3E")`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}>
              <img 
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/03/kiro4.png" 
                alt="Vision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const programmes = [
    { 
      name: 'TRAINING PROGRAMMES', 
      items: [
        'Cricut and vinyl skills',
        'Sublimation and heat press',
        'T shirt and gift customisation',
        'Digital design basics',
        'Small business start up guidance',
        'Administrative skills training'
      ],
      rotation: '-rotate-6' 
    },
    { 
      name: 'PRINTING AND DESIGN', 
      items: [
        'Custom apparel printing',
        'Promotional merchandise',
        'Corporate branding',
        'Event printing',
        'Graphic design service'
      ],
      highlighted: true, 
      rotation: 'rotate-0' 
    },
    { 
      name: 'WELLBEING AND SUPPORT', 
      items: [
        'Creative therapy workshops',
        'Confidence in building sessions',
        'Support for vulnerable adults',
        'Mentoring and peer support',
        'Community engagement projects'
      ],
      rotation: 'rotate-6' 
    },
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-900 font-light tracking-widest mb-6 text-sm uppercase">OUR CORE PROGRAMMES</p>
        <h2 className="text-5xl md:text-7xl font-light mb-20 max-w-4xl mx-auto leading-tight">Empowering growth through creativity</h2>
        
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-0">
          {programmes.map((prog) => (
            <div 
              key={prog.name} 
              className={`p-12 rounded-sm transition-all transform w-full max-w-sm flex flex-col ${prog.rotation} lg:rotate-0 ${
                prog.highlighted 
                ? 'bg-[#E84A1A] text-white shadow-2xl z-10 py-20 lg:-mt-8' 
                : 'bg-white text-black shadow-lg border border-gray-50'
              }`}
            >
              <h3 className="text-2xl font-light mb-10 text-left border-b border-current pb-4">{prog.name}</h3>
              <ul className="space-y-4 mb-12 text-left flex-grow">
                {prog.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${prog.highlighted ? 'bg-white' : 'bg-[#E84A1A]'}`}></span>
                    <span className={`text-lg font-light ${prog.highlighted ? 'text-white/90' : 'text-gray-600'}`}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-full font-light text-xl transition-all ${
                prog.highlighted 
                ? 'bg-black text-white hover:bg-gray-900' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LogoCloud = () => {
  const logos = ['Slack', 'J&J', 'GitHub', 'Pfizer', 'GSK', 'Merck'];
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="relative flex items-center">
        <motion.div 
          className="flex items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all whitespace-nowrap"
          animate={{
            x: [ "-50%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <span key={`${logo}-${idx}`} className="text-3xl md:text-4xl font-light tracking-tighter px-4">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left Side: Image with custom mask */}
          <div className="flex-1 relative bg-[#F5F5F5] flex items-center justify-center p-8 lg:p-0">
            <div className="relative w-full h-full min-h-[500px] lg:min-h-full" style={{
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 Q30,10 50,0 Q70,-10 100,0 L100,100 L0,100 Z' fill='black'/%3E%3C/svg%3E")`,
              maskSize: '100% 100%',
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 Q30,10 50,0 Q70,-10 100,0 L100,100 L0,100 Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: '100% 100%',
            }}>
              {/* Secondary mask for the left side wave */}
              <div className="absolute inset-0" style={{
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 Q10,30 0,50 Q-10,70 0,100 L100,100 L100,0 Z' fill='black'/%3E%3C/svg%3E")`,
                maskSize: '100% 100%',
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 Q10,30 0,50 Q-10,70 0,100 L100,100 L100,0 Z' fill='black'/%3E%3C/svg%3E")`,
                WebkitMaskSize: '100% 100%',
              }}>
                <img 
                  src="/heer.avif" 
                  alt="Berlin Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating white blobs to mimic the image's mask edges */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#F5F5F5] rounded-full blur-2xl opacity-50"></div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 bg-white p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900">Newcastle upon Tyne</h2>
            
            <div className="space-y-12">
              <div>
                <p className="text-gray-400 font-medium mb-4 text-lg">Address</p>
                <p className="text-xl font-light leading-tight text-gray-800 mb-4">
                  NE6 2LF United Kingdom
                </p>
                <a href="#" className="text-gray-900 font-light flex items-center space-x-2 hover:text-lime-600 transition-colors">
                  <span>View on Map</span>
                  <span>&rarr;</span>
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 font-medium mb-4 text-lg">Contact</p>
                <p className="text-xl font-light leading-tight text-gray-800">
                  📞 +447950952103, +447904332009
                </p>
              </div>

              <div>
                <p className="text-gray-400 font-medium mb-4 text-lg">Emails</p>
                <div className="space-y-3">
                  <p className="text-xl font-light text-gray-800 cursor-pointer hover:text-lime-600 transition-colors">✉ rbborderstravels@outlook.com</p>
                  <p className="text-xl font-light text-gray-800 cursor-pointer hover:text-lime-600 transition-colors">✉ raisingbeyondborders@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    { 
      title: 'The impact of creative skills on community wellbeing', 
      category: 'COMMUNITY', 
      date: 'Nov 17, 2025',
      img: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/03/e1.png'
    },
    { 
      title: 'Mastering vinyl printing: A guide for small businesses', 
      category: 'TRAINING', 
      date: 'Nov 17, 2025',
      img: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/03/e2.png'
    },
    { 
      title: 'How custom apparel strengthens corporate branding', 
      category: 'DESIGN', 
      date: 'Nov 17, 2025',
      img: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/03/e3.png'
    },
    { 
      title: 'Empowering vulnerable adults through creative therapy', 
      category: 'WELLBEING', 
      date: 'Nov 17, 2025',
      img: 'https://kelechieze.wordpress.com/wp-content/uploads/2026/03/e4.png'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p className="text-lime-600 font-light tracking-widest mb-4">INNOVATING DIGITAL FUTURES</p>
            <h2 className="text-4xl md:text-6xl font-light">Partnering with you for growth</h2>
          </div>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-md font-light hover:bg-orange-700 transition-colors">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (idx < 2 ? (
            <div key={post.title} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-8 aspect-video">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-lime-400 text-black px-3 py-1 rounded-sm text-xs font-light">{post.category}</span>
                <span className="text-gray-400 text-sm">{post.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light group-hover:text-lime-600 transition-colors">{post.title}</h3>
            </div>
          ) : null))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
           {posts.map((post, idx) => (idx >= 2 ? (
            <div key={post.title} className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
              <div className="w-full sm:w-40 h-48 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-lime-600 text-xs font-light">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-light group-hover:text-lime-600 transition-colors leading-tight">{post.title}</h3>
              </div>
            </div>
          ) : null))}
        </div>
      </div>
    </section>
);
};

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Green Banner - Full Width */}
      <div className="bg-lime-400 py-16 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-light max-w-2xl text-black">
            Empower your business with digital innovation by PrintCare Academy CIC
          </h2>
          <button className="bg-black text-white px-10 py-4 rounded-md font-light text-lg hover:bg-gray-900 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24 border-b border-gray-100">
          <div className="col-span-1 lg:col-span-1">
            <img 
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/03/jdhsgh-removebg-preview.png" 
              alt="PrintCare Academy CIC Logo" 
              className="h-24 w-auto object-contain mb-8 block" /* Changed from h-16 to h-24 */
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-500 leading-relaxed mb-8">
              Empowering communities through creative skills and wellbeing. Training Printing Designing Community Support.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-light mb-8">Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-lime-500 cursor-pointer">Home</li>
              <li className="hover:text-lime-500 cursor-pointer">Services</li>
              <li className="hover:text-lime-500 cursor-pointer">About Us</li>
              <li className="hover:text-lime-500 cursor-pointer">Gallery</li>
              <li className="hover:text-lime-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-8">Product</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="hover:text-lime-500 cursor-pointer">Our Work</li>
              <li className="hover:text-lime-500 cursor-pointer">Gallery</li>
              <li className="hover:text-lime-500 cursor-pointer">Our Team</li>
              <li className="hover:text-lime-500 cursor-pointer">FAQs</li>
              <li className="hover:text-lime-500 cursor-pointer">Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-8">Contact</h4>
            <ul className="space-y-6">
              <li>
                <p className="text-gray-400 text-sm font-light uppercase mb-1">Email</p>
                <p className="text-lg font-light">rbborderstravels@outlook.com</p>
              </li>
              <li>
                <p className="text-gray-400 text-sm font-light uppercase mb-1">United Kingdom —</p>
                <p className="text-lg font-light">Newcastle upon Tyne<br />NE6 2LF United Kingdom</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2026. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-8 text-sm text-gray-400">
            <span className="hover:text-lime-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-lime-500 cursor-pointer">Terms of Service</span>
          </div>
          <p className="text-gray-400 text-sm">
            Site by <span className="text-black font-light">AncoraThemes</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-lime-300 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <ITPartner />
        <ServicesSection />
        <Testimonial />
        <Pricing />
        <LogoCloud />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
