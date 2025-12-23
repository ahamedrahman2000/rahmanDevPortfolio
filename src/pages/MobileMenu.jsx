export default function MobileMenu({setOpen}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-6 transition-all">
        <button className="text-2xl mb-6" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <nav className="flex flex-col gap-5 text-lg">
          <a href="#certification" onClick={() => setOpen(false)}>
            Certifications
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
