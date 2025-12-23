import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
       
        <p className="text-sm">
          © {new Date().getFullYear()} Ahamed Abdul Rahman. All rights reserved.
        </p>

     
        <p className="text-sm text-gray-400">
          Frontend Developer • React • Tailwind CSS
        </p>
 
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/your-github-username"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/abdul-rahman-474b19312"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ahamedrahman2000@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
