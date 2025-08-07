import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">LP</span>
              </div>
              <div>
                <span className="font-playfair font-bold text-2xl brand-text">La Piccola</span>
                <p className="text-muted-foreground text-sm">Ristorante Italiano</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Découvrez l'authenticité de la cuisine italienne dans le cœur de Montréal. 
              Une expérience culinaire inoubliable vous attend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="font-playfair font-semibold text-lg text-foreground">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">123 Rue Saint-Laurent<br />Montréal, QC H2X 2T1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">(514) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm">info@lapiccola.ca</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="font-playfair font-semibold text-lg text-foreground">Heures d'ouverture</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-muted-foreground text-sm">
                  <p>Lun - Jeu: 17h00 - 22h00</p>
                  <p>Ven - Sam: 17h00 - 23h00</p>
                  <p>Dim: 17h00 - 21h00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="font-playfair font-semibold text-lg text-foreground">Suivez-nous</span>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 La Piccola Ristorante. Tous droits réservés. | Fait avec ❤️ à Montréal
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;