export default function Projects() {
  const projects = [
    {
      name: "E-Commerce Web App",
      description:
        "Responsive e-commerce UI with product listing, search, cart, and checkout.",
      tech: ["React", "Tailwind", "JavaScript"],
    },
    {
      name: "Admin Panel Dashboard",
      description:
        "Admin dashboard for managing users, analytics, and roles.",
      tech: ["React", "Tailwind", "Hooks"],
    },
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio to showcase skills, projects, and resume.",
      tech: ["React", "Tailwind"],
    },
    {
      name: "Product Dashboard",
      description:
        "Dashboard with search, filter, sorting, and pagination.",
      tech: ["React", "JavaScript"],
    },
    {
      name: "Todo Application",
      description:
        "Task management app with add, delete, and complete features.",
      tech: ["React", "Local Storage"],
    },
    {
      name: "Login & Protected Routes",
      description:
        "Authentication system with protected pages using React Router.",
      tech: ["React", "Context API"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-6 flex flex-col hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border rounded-full text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
              <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                Live Demo
              </button>

              <button className="flex-1 border border-gray-700 text-gray-700 py-2 rounded hover:bg-gray-700 hover:text-white transition">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
