export default function VolunteerForm() {
  return (
    <div
      className="min-h-screen bg-[url('/your-background-image.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 ml-100">
      <div className="bg-black/50 backdrop-blur-md p-10 md:p-14 rounded-2xl text-white max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-6 text-lime-300 text-center">Volunteer with Us 🌿</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-lime-400 p-3 rounded bg-white/80 text-black placeholder-gray-700" />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-lime-400 p-3 rounded bg-white/80 text-black placeholder-gray-700" />
          <textarea
            placeholder="Why do you want to volunteer?"
            className="border border-lime-400 p-3 rounded bg-white/80 text-black placeholder-gray-700"
            rows={4} />
          <button
            type="submit"
            className="bg-lime-600 text-white p-3 rounded-xl hover:bg-lime-700 transition text-lg font-semibold">
            Submit 🌱
          </button>
        </form>
      </div>
    </div>
  );
}

