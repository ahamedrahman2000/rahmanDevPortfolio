import { Link } from "react-router-dom";
import user from "../assets/images/userAr.jpg";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 h-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        <img
          src={user}
          alt="Rahman"
          className="w-[200px] h-[200px] rounded-full object-contain border-4 border-white shadow"
        />

        <h1 className="text-xl text-gray-600">
          Hi, I’m <span className="font-semibold text-black">Rahman</span>
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          A <span className="text-blue-600">Frontend Developer</span> crafting
          clean & user-friendly web experiences
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl">
          I specialize in{" "}
          <span className="font-semibold text-red-500">React</span>,{" "}
          <span className="font-semibold text-red-500">JavaScript</span> and{" "}
          <span className="font-semibold text-red-500">Tailwind CSS</span>. I
          enjoy turning ideas into real, interactive products.
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500 transition"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-red-500 text-red-500 px-6 py-3 rounded-md text-lg hover:bg-red-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
