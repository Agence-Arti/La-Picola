import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: 1, category: 'restaurant', title: 'Salle principale', description: 'Notre salle principale avec son ambiance chaleureuse et rustique' },
    { id: 2, category: 'food', title: 'Spaghetti Carbonara', description: 'Notre célèbre carbonara préparée selon la recette traditionnelle' },
    { id: 3, category: 'restaurant', title: 'Bar à vins', description: 'Notre sélection de vins italiens dans un cadre élégant' },
    { id: 4, category: 'food', title: 'Pizza Margherita', description: 'Pizza artisanale cuite au feu de bois avec mozzarella di bufala' },
    { id: 6, category: 'food', title: 'Tiramisu maison', description: 'Notre tiramisu préparé selon la recette familiale' },
    { id: 7, category: 'restaurant', title: 'Terrasse d\'été', description: 'Notre terrasse pour profiter des belles soirées montréalaises' },
    { id: 8, category: 'food', title: 'Antipasto della Casa', description: 'Sélection de charcuteries et fromages italiens' },
  ].filter(img => img.category !== 'kitchen');

  const categories = [
    { id: 'all', name: 'Tout voir', icon: '🏛️' },
    { id: 'restaurant', name: 'Restaurant', icon: '🍽️' },
    { id: 'food', name: 'Plats', icon: '🍝' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    const globalIndex = galleryImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setCurrentIndex(globalIndex);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Galerie - La Piccola Restaurant Italien Montréal</title>
        <meta name="description" content="Découvrez l'ambiance chaleureuse de La Piccola en images. Photos du restaurant, de nos plats authentiques et de notre équipe passionnée." />
      </Helmet>

      <div className="pt-24 bg-background">
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-foreground">
                Notre <span className="brand-text">Galerie</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Plongez dans l'univers de La Piccola à travers nos images.
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
                    : 'bg-background text-foreground hover:bg-accent hover:text-primary shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover-lift">
                    <img 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                      alt={image.description} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                      <h3 className="font-playfair text-xl font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl" 
                  alt={selectedImage.description} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <button onClick={closeLightbox} className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform"><X className="w-6 h-6" /></button>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"><ChevronRight className="w-6 h-6" /></button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;