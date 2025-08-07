import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ExternalLink, Calendar, Clock, Users, Phone } from 'lucide-react';

const Reservations = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 5000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Réservations - La Piccola Restaurant Italien Montréal</title>
        <meta name="description" content="Réservez votre table à La Piccola. Restaurant italien authentique à Montréal. Réservation en ligne facile et rapide pour une expérience culinaire inoubliable." />
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
                <span className="brand-text">Réservations</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Réservez votre table pour une expérience culinaire authentique 
                dans l'ambiance chaleureuse de La Piccola.
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
                    <Calendar className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lun - Sam: 17h - 23h<br />
                        Dimanche: 17h - 22h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Groupes</h3>
                      <p className="text-muted-foreground">
                        Pour les groupes de 8+, contactez-nous directement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                      <p className="text-muted-foreground">
                        (514) 555-0123
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
              className="bg-primary/5 rounded-lg p-8 text-center flex flex-col justify-center items-center border border-primary/20"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Réserver maintenant
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Cliquez ci-dessous pour accéder à notre système de réservation en ligne.
              </p>
              <Button 
                onClick={handleReservation}
                size="lg" 
                className="w-full"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Réserver en ligne
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Redirection vers notre partenaire
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;