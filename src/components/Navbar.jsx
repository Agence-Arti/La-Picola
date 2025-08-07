import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Accueil',
    path: '/'
  }, {
    name: 'Menu',
    path: '/menu'
  }, {
    name: 'Réservations',
    path: '/reservations'
  }, {
    name: 'Commande en ligne',
    path: '/commande'
  }, {
    name: 'Galerie',
    path: '/galerie'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-sm shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-28">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 overflow-hidden">
            <img className="h-16 sm:h-20 w-auto rounded-2xl flex-shrink-0" alt="Logo de La Piccola" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/35ae68f9-420b-4438-95f9-632bb9e290be/0f5bae8c99c42b30067db3ec2a4086e9.jpg" />
            <div className="flex flex-col justify-center">
              <h1 className="font-playfair font-bold text-xl md:text-2xl brand-text truncate">Restaurant italien</h1>
              <p className="text-sm text-muted-foreground truncate">Apportez votre vin</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${location.pathname === item.path ? 'text-primary-foreground' : 'text-foreground hover:text-primary'}`}>
                {item.name}
                {location.pathname === item.path && <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary rounded-full -z-10" transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }} />}
              </Link>)}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-4 py-6 space-y-2">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 text-base font-medium rounded-2xl transition-colors duration-200 ${location.pathname === item.path ? 'text-primary-foreground bg-primary' : 'text-foreground hover:bg-accent'}`}>
                  {item.name}
                </Link>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
export default Navbar;