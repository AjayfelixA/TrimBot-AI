function Hero() {
  return (
    <section className="bg-slate-900 text-white h-[90vh] flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold text-yellow-400">

        Premium Barber Experience

      </h1>

      <p className="text-xl mt-6 text-slate-300">

        Book your haircut with AI in just a few seconds.

      </p>

      <button className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-300 transition">

        Book Appointment

      </button>

    </section>
  );
}

export default Hero;