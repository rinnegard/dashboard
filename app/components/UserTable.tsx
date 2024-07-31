import { Role } from "@prisma/client";
import { updateUserRoleAction } from "../actions/updateUserRole";

type User = {
    id: string;
    name: string | null;
    email: string | null;
    role: Role;
};

interface UserTableProps {
    users: User[];
    isAdmin: boolean;
}

export default function UserTable({ users, isAdmin }: UserTableProps) {
    return (
        <table className="w-full border-collapse my-4">
            <thead>
                <tr>
                    <th className="border p2">Name</th>
                    <th className="border p2">Email</th>
                    <th className="border p2">Role</th>
                    {isAdmin && <th className="border p2">Action</th>}
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td className="border p2">{user.name}</td>
                            <td className="border p2">{user.email}</td>
                            <td className="border p2">{user.role}</td>
                            {isAdmin && (
                                <td className="border p2">
                                    <form action={updateUserRoleAction}>
                                        <input
                                            type="hidden"
                                            name="userId"
                                            value={user.id}
                                        />
                                        <select
                                            name="newRole"
                                            defaultValue={user.role}
                                            className="p-1 rounded-md w-1/2"
                                        >
                                            <option value={Role.USER}>
                                                User
                                            </option>
                                            <option value={Role.ADMIN}>
                                                Admin
                                            </option>
                                        </select>
                                        <button
                                            className="bg-blue-600 w-1/2 text-white p-1 hover:bg-blue-800 active:bg-blue-900 rounded-md"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </td>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
