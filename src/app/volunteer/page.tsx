export default function VolunteerForm() {
  return (
    <div className="min-h-screen bg-[url('earth.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-6">
      <div className="bg-black/50 backdrop-blur-md p-6 md:p-10 rounded-2xl text-white w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-lime-400 text-center">Volunteer with Us 🌿</h1>
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