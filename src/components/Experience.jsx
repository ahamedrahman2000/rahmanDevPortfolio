export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      {/* Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience
      </h1>

      <div className="max-w-5xl mx-auto px-6 space-y-8">

        {/* Frontend Developer */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Frontend Developer
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Lumos Technology | Jan 2024 – Dec 2024
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Built responsive, mobile-first user interfaces using HTML5,
              CSS3, JavaScript, Tailwind CSS, and React.js.
            </li>
            <li>
              Developed reusable React components for clean and scalable UI
              architecture.
            </li>
            <li>
              Integrated frontend components with backend APIs and optimized
              application performance.
            </li>
            <li>
              Ensured cross-browser compatibility and clean DOM structure.
            </li>
            <li>
              Collaborated directly with clients to gather requirements and
              deliver timely bug fixes.
            </li>
            <li>
              Designed UI screens using Canva and prepared test cases to ensure
              quality and functionality.
            </li>
          </ul>
        </div>

        {/* Customer Support Executive */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            Customer Support Executive
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Tech Mahindra | IndusInd Bank (VKYC) | One Point One Solutions <br />
            Oct 2021 – Dec 2023
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Worked on multiple client-based projects involving customer
              identity verification (KYC).
            </li>
            <li>
              Supported Qatar Visa application processing for domestic and
              international clients.
            </li>
            <li>
              Handled customer communication, documentation verification, and
              query resolution.
            </li>
            <li>
              Strengthened communication, problem-solving, and responsibility
              handling skills through client interaction.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
