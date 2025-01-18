import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Roi Solomon. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a
              href="https://github.com/roisol144"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/roi-solomon-rs777/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:Roisolomon77@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
