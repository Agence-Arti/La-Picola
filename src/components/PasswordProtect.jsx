
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

const PasswordProtect = ({ onCorrectPassword }) => {
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Arti') {
      onCorrectPassword();
    } else {
      toast({
        title: 'Erreur',
        description: 'Mot de passe incorrect. Veuillez réessayer.',
        variant: 'destructive',
      });
      setPassword('');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto p-8 border border-border rounded-2xl shadow-xl bg-background/80 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/35ae68f9-420b-4438-95f9-632bb9e290be/0f5bae8c99c42b30067db3ec2a4086e9.jpg" 
              alt="Logo La Piccola" 
              className="w-24 h-24 mx-auto rounded-2xl mb-4"
            />
            <h1 className="font-playfair text-3xl font-bold brand-text">Accès Protégé</h1>
            <p className="text-muted-foreground mt-2">Veuillez entrer le mot de passe pour accéder au site.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Entrer
            </Button>
          </form>
        </motion.div>
      </div>
      <Toaster />
    </>
  );
};

export default PasswordProtect;
