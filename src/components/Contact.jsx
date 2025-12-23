import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Let’s work together
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I’m open to frontend developer roles, internships, and freelance
            opportunities. If you have a project in mind or just want to
            connect, feel free to reach out.
          </p>
        </div>

        <div className="space-y-5">
          <div className="group flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <span className="text-gray-700">
              ahamedrahman2000@gmail.com
            </span>
          </div>

          <a
            href="https://github.com/ahamedrahman2000"
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub className="text-gray-800 text-2xl" />
            <span className="text-gray-700">
              github.com/ahamedrahman2000
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-rahman-20ar0031"
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin className="text-blue-700 text-2xl" />
            <span className="text-gray-700">
              linkedin.com/in/abdul-rahman-20ar0031
            </span>
          </a>

          <div className="group flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <span className="text-gray-700">
              +91 98846 80243
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
