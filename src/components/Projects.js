import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Virtual Bank',
      description: 'Backend system using Python, Flask, PostgreSQL, and JWT authentication.',
      link: 'https://github.com/roisol144/VirtualBank',
    },
    {
      title: "Stock's Intrinsic Value",
      description: 'Automates stock evaluation using Python and the FMP API.',
      link: 'https://github.com/roisol144/Stocks-Intrinsic-Value',
    },
    {
      title: 'Unit Resource Center',
      description: 'Web-based system using JavaScript, HTML, and CSS, managed via SharePoint.',
    },
    {
      title: '"Teammate" Desktop App',
      description: 'Python app to automate endpoint maintenance tasks.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                >
                  View Repository
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
