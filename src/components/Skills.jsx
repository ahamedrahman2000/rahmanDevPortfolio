export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills
      </h1>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-brands fa-react text-blue-500 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">React.js</p>
        </div>

        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-brands fa-js text-yellow-400 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">JavaScript</p>
        </div>

        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-brands fa-html5 text-orange-500 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">HTML5</p>
        </div>

        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-brands fa-css3-alt text-blue-600 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">CSS3</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-6">
        Learning Skills
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-brands fa-node-js text-green-500 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">Node.js</p>
        </div>

        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-solid fa-server text-gray-600 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">Express.js</p>
        </div>

        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-solid fa-database text-green-700 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">MongoDB</p>
        </div>

        <div className="group p-4 bg-white rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <i className="fa-solid fa-mobile-screen-button text-gray-700 text-7xl mb-2 transition-transform duration-300 group-hover:scale-110"></i>
          <p className="text-2xl">React Native</p>
        </div>
      </div>
    </section>
  );
}
