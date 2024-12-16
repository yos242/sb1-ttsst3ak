import React, { useState } from 'react';
import { InputField } from './InputField';
import { Button } from './Button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        id="email"
        label="Email ou numéro de mobile"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        id="password"
        label="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" variant="primary">
        Connexion
      </Button>

      <div className="text-center">
        <a 
          href="#" 
          className="text-[#0070ba] hover:underline text-sm"
        >
          Mot de passe oublié ?
        </a>
      </div>
    </form>
  );
}