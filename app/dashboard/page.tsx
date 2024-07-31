import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import UserTable from "../components/UserTable";

const prisma = new PrismaClient();

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/api/auth/signin");
    }

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
    });

    const isAdmin = session.user.role === "ADMIN";

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <UserTable users={users} isAdmin={isAdmin}></UserTable>
        </div>
    );
}
