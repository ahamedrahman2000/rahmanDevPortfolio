export default function Certification() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="  w-[500px] p-4 bg-white rounded-md shadow-xl  ">
        <h3 className="text-xl font-semibold mb-1">
          Full-Stack Web Development
        </h3>

        <p className="text-gray-600">MegaMind Business Solution</p>

        <p className="text-sm text-gray-500 mb-4">June 2025 – November 2025</p>

        <div className="grid grid-cols-3 gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "React.js", 
            "Node.js",
            "Express.js",
            "MongoDB", 
          ].map((skill, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 hover:scale-105 duration-300
               bg-gray-100 text-gray-700 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
