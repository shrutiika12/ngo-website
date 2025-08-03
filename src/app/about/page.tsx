'use client';

export default function About() {
  return (
    <div className="min-h-screen  bg-cover bg-center bg-no-repeat flex flex-col items-center px-6 py-10 text-center text-white mt-10">
      <div className="bg-black/50 p-8 rounded-xl max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-4">Who We Are</h1>
        <p className="mb-6">
          We are a passionate non-profit organization on a mission to protect and expand India&apos;s green cover.
          Our goal is simple yet powerful — to plant trees, restore forests, and inspire communities to take climate action.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8 font-semibold text-green-300">
          <div>🚀 Founded in 2025</div>
          <div>🌳 50,000+ Trees Planted</div>
          <div>🙌 1,000+ Volunteers</div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="mb-4">
          To restore the Earth&apos;s green cover through community-led afforestation and environmental education.
          We work with people from all walks of life to create sustainable, green communities.
        </p>
        <ul className="list-disc list-inside text-left mb-8 space-y-2">
          <li>🌱 Tree plantation drives</li>
          <li>🏫 Environmental education in schools</li>
          <li>🌻 Community sustainability programs</li>
          <li>♻️ Eco-friendly living advocacy</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="mb-8">
          We envision a future where forests flourish, cities are greener, and people live in harmony with nature.
          A world where every individual understands their role in nurturing our planet.
        </p>

        <h2 className="text-2xl font-bold mb-2">Who We Work With</h2>
        <p>
          Collaborating with local communities, volunteers, schools, and environmental organizations to drive change.
        </p>
      </div>
    </div>
  );
}
