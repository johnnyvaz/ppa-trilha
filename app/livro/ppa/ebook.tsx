import React, { useState } from 'react';

function PaginaVendaEbook() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para processar o cadastro do usuário.
    console.log('Nome:', nome);
    console.log('Email:', email);
    // Redirecionar para a página de download do eBook ou mostrar uma mensagem de sucesso.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Compre o eBook "Método PPA"</h1>
        <p className="mb-4">Preencha os campos abaixo para receber o eBook em seu email:</p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-600">Nome:</label>
            <input
              type="text"
              id="nome"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              value={nome}
              onChange={handleNomeChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:ring focus:ring-indigo-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaginaVendaEbook;
