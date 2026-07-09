function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-10 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-yellow-400">
        💈 TrimBot AI
      </h1>

      <ul className="flex gap-10 font-medium">

        <li className="cursor-pointer hover:text-yellow-400">
          Home
        </li>

        <li className="cursor-pointer hover:text-yellow-400">
          Services
        </li>

        <li className="cursor-pointer hover:text-yellow-400">
          About
        </li>

        <li className="cursor-pointer hover:text-yellow-400">
          Contact
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;