// app/page.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/your-background-image.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-6">
      <div className="bg-black/50 backdrop-blur-md p-6 md:p-16 rounded-2xl text-center text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-300">
          Together, Let&apos;s Grow a Greener Future 🌍🌳
        </h1>
        <p className="text-base md:text-xl leading-relaxed">
          Join us in planting trees, restoring forests, and building a healthier planet for future generations.
        </p>

        <a href="/volunteer"
          className="mt-8 inline-block px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white text-base md:text-lg rounded-xl hover:bg-green-700 transition">
          Join Our Mission 🌱
        </a>
      </div>
    </div>
  );
}
