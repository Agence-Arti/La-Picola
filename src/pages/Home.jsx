import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>La Piccola - Restaurant Italien Authentique à Montréal</title>
        <meta name="description" content="Découvrez La Piccola, restaurant italien authentique au cœur de Montréal. Cuisine traditionnelle, ambiance chaleureuse et service exceptionnel." />
      </Helmet>

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Illustration de style italien avec une tranche de pizza, des pâtes, une bouteille de vin, une tomate et du basilic"
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/35ae68f9-420b-4438-95f9-632bb9e290be/107962551b1de05f1eba7e0a0f5140c2.png"
          />
           <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground text-shadow">
              Bienvenue à
              <span className="block brand-text mt-2">La Piccola</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
              L'authenticité de l'Italie au cœur de Montréal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg">
                <Link to="/menu">Découvrir le Menu</Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/reservations">Réserver une Table</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Notre <span className="brand-text">Histoire</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fondée en 2009, La Piccola est née de la passion de partager les saveurs authentiques de l'Italie. Nos recettes, transmises de génération en génération, vous transportent directement dans les collines de la Toscane.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chaque plat est préparé avec amour, en utilisant des ingrédients locaux de la plus haute qualité. Notre équipe passionnée vous accueille comme en famille.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">En savoir plus</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                className="w-full h-auto object-cover rounded-3xl shadow-xl hover-lift" 
                alt="Façade du restaurant La Piccola avec son enseigne et sa porte d'entrée rouge" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/35ae68f9-420b-4438-95f9-632bb9e290be/b5712be0fa1a633290e04a06fcccbf16.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Prêt pour une expérience inoubliable ?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Réservez votre table et laissez-vous transporter 
              par les saveurs de l'Italie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/reservations">Réserver maintenant</Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/commande">Commander en ligne</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;