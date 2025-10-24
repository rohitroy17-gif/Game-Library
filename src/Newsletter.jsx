// Newsletter.jsx
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <div className="mt-12 bg-gray-100 p-6 rounded bg-indigo-900
">
      <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded flex-grow focus:outline-none"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded font-semibold transition">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
