export default function SectionList({ sections }) {
  return (
    <section className="py-12">
          <div
            key={sections.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={sections.image}
              alt="alt"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl md:text-lg text-base font-bold lg:mb-3 mb-1 text-black">{sections.title}</h1>
              <p className="text-gray-600 md:text-base text-sm md:mb-4 mb-2">{sections.description}</p>
            </div>
          </div>
    </section>
  );
}
