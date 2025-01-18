import React from 'react';

function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Roi Solomon</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#certifications" className="hover:text-blue-300">Certifications</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
