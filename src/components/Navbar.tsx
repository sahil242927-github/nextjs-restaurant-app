import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-red-500 border-b-2">
      {/* Logo */}
      <div className="uppercase">
        <Link href="/"> Massimo </Link>
      </div>
      {/* Mobile Menu */}
      <div>
        <Menu />
      </div>
    </div>
  );
}
