import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-2xl font-bold text-center mb-8">Connexion Eburniewood</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="••••••••" />
          </div>
          <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition">
            Se connecter
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Pas encore membre ? <Link to="/inscription" className="text-orange-600 font-bold">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;