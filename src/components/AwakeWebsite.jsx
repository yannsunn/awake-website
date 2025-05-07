import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

// メインコンポーネント
const AwakeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // スクロール検知のためのuseEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // アクティブセクションの更新
      const sections = ['home', 'about', 'services', 'contact'];
      for (const id of sections.reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FAQアイテムコンポーネント
  const FaqItem = ({ question, answer, isOpen: defaultOpen }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
      <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <button
          className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{question}</h3>
          <ChevronDown 
            size={20} 
            className={`text-blue-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </button>
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 pt-0 text-gray-600 dark:text-gray-400">
            {answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrolled={scrolled} 
        activeSection={activeSection} 
      />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AwakeWebsite; 