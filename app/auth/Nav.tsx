import Link from "next/link";
import Login from "./Login";

export default async function Nav() {
  return (
    <nav className=" flex justify-between items-center py-8  text-sky-50">
      <Link href={"/"}>
        <h1 className="font-bold text-lgp italic">PostItUp</h1>
      </Link>
      <ul className="flex items-center gap-6">
      <Login />
      </ul>
    </nav>
  );
}
