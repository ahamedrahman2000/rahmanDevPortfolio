import { Link, NavLink } from "react-router-dom";
import user from "../assets/images/userAr.jpg";
import Certification from "../pages/Certifications";
import ProjectsUI from "../pages/ProjectsUI";
import CompaniesUI from "../pages/CompaniesUI";
import ProfileCard from "../pages/ProfileCard";
import { useState } from "react";
import MobileMenu from "../pages/MobileMenu";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="shadow-lg sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between h-14 max-w-7xl mx-auto px-6">
        <div className="text-2xl cursor-pointer duration-300 hover:scale-105 font-extrabold drop-shadow-lg">
          Ahamed Rahman
        </div>

        <nav className="hidden md:flex gap-5 text-lg items-center relative">
          <div className="relative group">
            <a
              href="#certification"
              className="hover:text-red-500 cursor-pointer"
            >
              Certifications
            </a>
            <div
              className="absolute -left-36 top-full mt-3 px-12 transform group-hover:translate-y-0 
              translate-y-2 z-50 transition-all duration-300  opacity-0 invisible group-hover:opacity-100 group-hover:visible "
            >
              <Certification />
            </div>
          </div>

          <div className="relative group">
            <a href="#projects" className="hover:text-red-500 cursor-pointer">
              Projects
            </a>
            <div
              className="absolute -left-36 top-full mt-3 px-12 transform group-hover:translate-y-0 
              translate-y-2 z-50 transition-all duration-300  opacity-0 invisible group-hover:opacity-100 group-hover:visible "
            >
              <ProjectsUI />
            </div>
          </div>

          <a href="#skills" className="hover:text-red-500">
            Skills
          </a>

          <div className="relative group">
            <a href="#projects" className="hover:text-red-500 cursor-pointer">
              Experience
            </a>
            <div
              className="absolute -left-60 top-full mt-3 px-12 transform group-hover:translate-y-0 
              translate-y-2 z-50 transition-all duration-300   opacity-0 invisible group-hover:opacity-100 group-hover:visible "
            >
              <CompaniesUI />
            </div>
          </div>

          <span className="relative group">
            <img
              src={user}
              alt="profile"
              className="w-[50px] h-[50px] rounded-full border-2 object-cover cursor-pointer hover:border-red-500"
            />

            <div
              className="absolute -left-44 top-full   z-50 transition-all duration-300  translate-y-2 group-hover:opacity-100
              opacity-0 invisible group-hover:visible group-hover:translate-y-0 "
            >
              <ProfileCard />
            </div>
          </span>
        </nav>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {open && <MobileMenu setOpen={setOpen}/>}
    </header>
  );
}
