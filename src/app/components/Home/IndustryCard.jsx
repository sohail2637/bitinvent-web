import { useState } from "react";

export default function Home({ industries }) {
  const [hoverIndex, setHoverIndex] = useState(0);

  const currentBg = industries[hoverIndex]?.bgImage || "/assets/images/HealthCare.png";

  return (
    <main className="min-h-screen bg-gray-900">
      <section
        className="relative w-full h-screen bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${currentBg})`,
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 w-full h-full">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="relative border border-white/30 flex items-center justify-center p-6 cursor-pointer"
              onMouseEnter={() => setHoverIndex(idx)}
            >
              {hoverIndex !== idx && (
                <h2 className="text-white font-semibold text-lg md:text-xl text-center">
                  {item.title}
                </h2>
              )}

              {hoverIndex === idx && (
                <div className="absolute inset-0 bg-gradient-to-br to-blue-500 from-purple-500 p-6 flex flex-col justify-center transition-all duration-500">
                  <h2 className="text-white font-semibold text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-white text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
