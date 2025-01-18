import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Contact</h2>
        <p>Email: <a href="mailto:Roisolomon77@gmail.com" className="text-blue-600 hover:text-blue-800">Roisolomon77@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/roisol144" className="text-blue-600 hover:text-blue-800">https://github.com/roisol144</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/roi-solomon-rs777/" className="text-blue-600 hover:text-blue-800">https://www.linkedin.com/in/roi-solomon-rs777/</a></p>
      </div>
    </section>
  );
}

export default Contact;
