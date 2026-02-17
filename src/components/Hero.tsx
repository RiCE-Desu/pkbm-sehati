"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen flex items-end" // Align at bottom
      style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D72]/100 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-white flex flex-col justify-end h-full w-full pb-16 z-10">
        {/* Horizontal line above header and description */}
        <hr className="border-t border-white w-full mb-6" />

        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 z-10">
          {/* Header */}
          <h1 className="font-header font-extrabold text-[#F6E7BC] text-2xl sm:text-5xl md:text-6xl md:max-w-md z-10">
            PKBM Sehati
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-0 text-white max-w-md text-base sm:text-lg md:text-xl leading-relaxed z-10">
            Pendidikan adab & iman untuk kehidupan.
            <br />
            Pengetahuan & Keterampilan untuk kesuksesan.
          </p>

          {/* Square arrow button */}
          <button
            aria-label="Go forward"
            className="ml-6 mt-6 md:mt-0 bg-red-800 hover:bg-red-900 text-white w-12 h-12 flex items-center justify-center transition z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
