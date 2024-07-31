"use server";

import { auth } from "@/auth";
import { PrismaClient, Role } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function updateUserRoleAction(formData: FormData) {
    const session = await auth();

    if (session?.user.role !== Role.ADMIN) {
        throw new Error("Unauthorized access");
    }

    const userId = formData.get("userId") as string;
    const newRole = formData.get("newRole") as Role;

    if (!userId || !newRole) {
        throw new Error("Invalid data");
    }

    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                role: newRole,
            },
        });
        revalidatePath("/dashboard");
    } catch (error) {
        console.error("Failed to update user role: ", error);
    }
}
