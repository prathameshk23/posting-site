"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li>
      <button className="text-sm bg-mywhite text-black py-2 px-6 rounded-xl disabled:opacity-25" onClick={() => signIn()}>
        Sign In
      </button>
    </li>
  );
}
