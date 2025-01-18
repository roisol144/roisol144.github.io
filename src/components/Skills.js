import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-bold">Languages</h3>
            <p>Python, SQL, C/C++, C#, JavaScript</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Frameworks</h3>
            <p>.NET, Flask, Selenium, Pandas, NumPy</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Tools</h3>
            <p>Docker, Git, GitHub Actions</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Methodologies</h3>
            <p>Client-Server Architecture, OOP, TDD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
