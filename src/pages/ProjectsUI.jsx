export default function ProjectsUI() {
  return (
    <div className="max-w-4xl  mx-auto px-6 ">
      <div className=" p-4 w-[500px] bg-white rounded-md shadow-xl ">
        <h3 className="text-xl font-semibold mb-3">Projects</h3>

         <div className="grid grid-cols-3 gap-3">
          {[
            "E-Commerce",
            "Admin Panel",
            "Portfolio",
            "Product Dashboard",
            "Auth System",
            "Todo App",
          ].map((projects, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 hover:scale-105 duration-300 bg-gray-100 text-gray-700 rounded-lg"
            >
              {projects}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
