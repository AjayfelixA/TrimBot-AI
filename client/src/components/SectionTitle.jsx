function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold text-yellow-400">
        {title}
      </h2>

      <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;