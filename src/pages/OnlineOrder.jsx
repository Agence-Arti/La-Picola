import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ExternalLink, Truck, Clock, CreditCard } from 'lucide-react';

const OnlineOrder = () => {
  const { toast } = useToast();

  const handleOrder = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Commande en ligne - La Piccola Restaurant Italien Montréal</title>
        <meta name="description" content="Commandez en ligne vos plats italiens préférés de La Piccola. Livraison rapide à Montréal. Pâtes fraîches, pizzas artisanales et spécialités italiennes." />
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
                Commande <span className="text-secondary">en ligne</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Savourez nos spécialités italiennes dans le confort de votre foyer.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Informations
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground">
                        Tous les jours: 17h00 - 21h30
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Truck className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Livraison</h3>
                      <p className="text-muted-foreground">
                        Temps moyen: 30-45 min
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CreditCard className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Paiement</h3>
                      <p className="text-muted-foreground">
                        Paiement sécurisé en ligne
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/5 rounded-lg p-8 text-center flex flex-col justify-center items-center border border-secondary/20"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Commander maintenant
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Accédez à notre menu complet et passez votre commande en quelques clics.
              </p>
              <Button 
                onClick={handleOrder}
                size="lg" 
                variant="secondary"
                className="w-full"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Voir le menu et commander
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Redirection vers notre plateforme de commande
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineOrder;