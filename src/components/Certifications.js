import React from 'react';

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <a
              href="https://coursera.org/share/9ec8ddb5c4de90fa71b681909124fc3e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Stanford Online Supervised Machine Learning
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/certificate/UC-4f670889-a658-478d-8646-460284d1843e/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Udemy – The Complete SQL Bootcamp
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
