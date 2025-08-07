import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 5000,
    });
  };

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Adresse", details: ["123 Rue Saint-Laurent", "Montréal, QC H2X 2T1"] },
    { icon: <Phone className="w-6 h-6 text-primary" />, title: "Téléphone", details: ["(514) 555-0123"] },
    { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email", details: ["info@lapiccola.ca"] },
    { icon: <Clock className="w-6 h-6 text-primary" />, title: "Horaires", details: ["Lun-Dim: 17h - 23h"] }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - La Piccola Restaurant Italien Montréal</title>
        <meta name="description" content="Contactez La Piccola restaurant italien à Montréal. Adresse, téléphone, horaires et formulaire de contact." />
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
                <span className="brand-text">Contactez-nous</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une question ? Une réservation de groupe ? N'hésitez pas à nous écrire.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div>{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-background rounded-lg p-8 shadow-sm border"
            >
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Nom *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-muted border-transparent rounded-lg focus:ring-2 focus:ring-primary transition-all" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-muted border-transparent rounded-lg focus:ring-2 focus:ring-primary transition-all" placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Sujet *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 bg-muted border-transparent rounded-lg focus:ring-2 focus:ring-primary transition-all" placeholder="Sujet de votre message" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-muted border-transparent rounded-lg focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Votre message..."></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;