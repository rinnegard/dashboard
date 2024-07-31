"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header className="bg-slate-800 text-white p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold">
                    Dashboard
                </Link>
                {status === "authenticated" ? (
                    <button
                        onClick={() => {
                            signOut({ callbackUrl: "/" });
                        }}
                    >
                        Signout
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            signIn("github");
                        }}
                    >
                        Sign in
                    </button>
                )}
            </div>
        </header>
    );
}
