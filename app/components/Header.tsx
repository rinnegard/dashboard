"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header className="bg-primary text-primary-foreground p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold">
                    Dashboard
                </Link>
                {status === "authenticated" ? (
                    <Button
                        variant={"secondary"}
                        onClick={() => {
                            signOut({ callbackUrl: "/" });
                        }}
                    >
                        Signout
                    </Button>
                ) : (
                    <Button
                        variant={"secondary"}
                        onClick={() => {
                            signIn("github");
                        }}
                    >
                        Sign in
                    </Button>
                )}
            </div>
        </header>
    );
}
