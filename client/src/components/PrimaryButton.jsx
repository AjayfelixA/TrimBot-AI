function PrimaryButton({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-yellow-500
        hover:bg-yellow-400
        transition-all
        duration-300
        px-8
        py-4
        rounded-xl
        font-semibold
        text-black
        shadow-lg
        hover:scale-105
      "
    >
      {title}
    </button>
  );
}

export default PrimaryButton;