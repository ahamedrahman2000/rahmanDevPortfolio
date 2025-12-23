export default function ProfileCard() {
  return (
    <div className="w-80 bg-white border rounded-xl shadow-xl p-5">
      <h3 className="text-xl font-semibold">Ahamed Abdul Rahman</h3>

      <p className="text-sm text-blue-600 font-medium mb-2">
        Frontend Developer
      </p>

      <p className="text-sm text-gray-600 mb-4">
        Frontend Developer skilled in React.js, Tailwind CSS, and JavaScript.
        Experienced in building responsive UIs, reusable components, and
        integrating APIs. Currently learning backend development.
      </p>

      <p className="text-sm text-gray-500 mb-4">
        📍 Thiyagadurgam, Tamil Nadu 9884680243
      </p>

      <div className="flex gap-3">
        <a
          href="/resume.pdf"
          className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Resume
        </a>

        <a
          href="#contact"
          className="flex-1 text-center border border-gray-700 text-gray-700 py-2 rounded hover:bg-gray-700 hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
