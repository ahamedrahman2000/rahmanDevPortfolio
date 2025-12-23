import user from "../assets/images/Rahman_PIC.png";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-50"> 
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
        About Me
      </h1> 
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 gap-10">
 
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I’m <span className="font-semibold text-gray-900">Ahamed Abdul Rahman</span>, a
            Frontend Developer skilled in <span className="text-blue-600 font-semibold">React.js</span>, 
            <span className="text-blue-600 font-semibold">Tailwind CSS</span>, and <span className="text-blue-600 font-semibold">JavaScript</span>.  
            I build responsive, user-friendly web apps and am currently learning backend development to expand my skill set.  
            Passionate about creating interactive web experiences and improving problem-solving skills through real projects.
          </p>
        </div>
 
        <div className="md:w-1/2 flex justify-center">
          <img
            src={user}
            alt="Ahamed Abdul Rahman"
            className="w-64 h-50 rounded-full object-contain border-4 border-blue-200 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
