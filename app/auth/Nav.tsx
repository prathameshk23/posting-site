import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className=" flex justify-between items-center py-8  text-sky-50">
      <Link href={"/"}>
        <h1 className="font-bold text-2xl italic">PostItUp</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
}
