import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('antipasti');

  const categories = [
    { id: 'antipasti', name: 'Antipasti', icon: '🧀' },
    { id: 'insalata', name: 'Insalata', icon: '🥗' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'scaloppini', name: 'Scaloppini', icon: '🥩' },
    { id: 'groupe_midi', name: 'Menu Groupe Midi', icon: '☀️' },
    { id: 'groupe_soir', name: 'Menu Groupe Soir', icon: '🌙' },
  ];

  const generateItems = (category, count) => 
    Array.from({ length: count }, (_, i) => ({
      name: `${category} ${i + 1}`,
      description: `Description pour ${category.toLowerCase()} ${i + 1}. Ingrédients frais et savoureux.`,
      price: `${Math.floor(Math.random() * 20) + 15}$`
    }));

  const menuItems = {
    antipasti: generateItems("Antipasto", 9),
    insalata: generateItems("Insalata", 5),
    pizza: generateItems("Pizza", 14),
    pasta: generateItems("Pasta", 14),
    scaloppini: generateItems("Scaloppini", 11),
    groupe_midi: [{
      name: "Menu Fixe Midi (25+ personnes)",
      description: "Un menu spécialement conçu pour les groupes de 25 personnes et plus, incluant une sélection d'entrées, plats principaux et desserts. Contactez-nous pour les détails et la tarification.",
      price: "Sur demande"
    }],
    groupe_soir: [{
      name: "Menu Groupe Soir (15+ personnes)",
      description: "Découvrez notre menu pour les groupes de 15 personnes et plus, sujet à changement selon les arrivages saisonniers. Une expérience culinaire unique pour vos soirées.",
      price: "Sujet à changement"
    }]
  };

  return (
    <>
      <Helmet>
        <title>Menu - La Piccola Restaurant Italien Montréal</title>
        <meta name="description" content="Découvrez notre menu authentique italien : antipasti, pâtes fraîches, pizzas artisanales, plats traditionnels et desserts maison. Réservez maintenant!" />
      </Helmet>

      <div className="pt-28 bg-background">
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-foreground">
                Notre <span className="brand-text">Menu</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos spécialités italiennes préparées avec passion et des ingrédients de première qualité.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                    : 'bg-card text-foreground hover:bg-accent hover:text-primary shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm hover-lift transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="font-bold brand-text text-lg whitespace-nowrap pl-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Menu;